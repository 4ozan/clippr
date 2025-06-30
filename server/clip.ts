import { exec } from "child_process"
import { promisify } from "util";
import  ffmpegpath from "ffmpeg-static"

const execPromise = promisify(exec);

export async function clipVideo(inputPath:string, start:string, end:string) {
    const outputPath = `public/clip${Date.now()}.mp4`;
    const cmd = `${ffmpegpath} -i ${inputPath} -ss ${start} -to ${end} -c copy ${outputPath}`
    await execPromise(cmd);
    return outputPath;

}