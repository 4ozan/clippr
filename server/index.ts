import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { clipVideo } from "./clip"

const app = new Hono()

app.post("/clip", async (c) => {
  const formData = await c.req.formData();
  const file = formData.get("video") as File;
  const start = c.req.query("start") || "00:00:00";
  const end = c.req.query("end") || "00:00:10";

  if (!file) {
    return c.text("Upload failed", 500);
  }

  try {
    // Save the file to disk (if needed) and pass the path to clipVideo
    const arrayBuffer = await file.arrayBuffer();
    const filePath = `/tmp/${file.name}`;
    await Bun.write(filePath, new Uint8Array(arrayBuffer));

    const outputPath = await clipVideo(filePath, start, end);
    const clippedFile = Bun.file(outputPath);
    return new Response(clippedFile.stream(), {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": "attachment; filename=clip.mp4"
      }
    });
  } catch (e) {
    return c.text("Clipping failed", 500);
  }
});

Bun.serve({ fetch: app.fetch })
