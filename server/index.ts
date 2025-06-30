import { Hono } from 'hono'
import { cors } from '@hono/cors'
import { exec } from "child_process"
import { promisify } from "util"
import ffmpegpath from "ffmpeg-static"

const execPromise = promisify(exec);
const app = new Hono()

app.use('*', cors());

app.post("/clip", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get("video");
    if (!file || !(file instanceof File)) {
      return c.text("No video file provided", 400);
    }
    // Save uploaded file temporarily
    const timestamp = Date.now();
    const inputPath = `uploaded_${timestamp}.mp4`;
    const outputPath = `clip_${timestamp}.mp4`;
    const arrayBuffer = await file.arrayBuffer();
    await Bun.write(inputPath, new Uint8Array(arrayBuffer));
    // Clip the first 10 seconds
    const cmd = `${ffmpegpath} -i ${inputPath} -ss 00:00:00 -t 10 -c copy ${outputPath}`;
    await execPromise(cmd);
    // Clean up the uploaded file
    await execPromise(`rm "${inputPath}"`);
    // Return the clipped video
    const clippedFile = Bun.file(outputPath);
    return new Response(clippedFile.stream(), {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": "attachment; filename=clip.mp4"
      }
    });
  } catch (error) {
    console.error("Error processing video:", error);
    return c.text("Error processing video", 500);
  }
});

Bun.serve({ fetch: app.fetch, port: 3001 })
console.log(`Video clipping server running on http://localhost:3001`);