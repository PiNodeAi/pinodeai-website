/**
 * Generates favicon sizes 16, 32, 48, 64, 128, 512 from public/favicon.png.
 * Run: node scripts/generate-favicons.mjs
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const input = path.join(publicDir, "favicon.png");
const SIZES = [16, 32, 48, 64, 128, 512];

async function main() {
  try {
    await sharp(input)
      .resize(SIZES[0], SIZES[0])
      .png()
      .toFile(path.join(publicDir, "favicon-16x16.png"));
    console.log("favicon-16x16.png");
  } catch (e) {
    console.error("Missing public/favicon.png. Add your 512x512 source image first.");
    process.exit(1);
  }

  for (const size of SIZES.slice(1)) {
    await sharp(input)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
    console.log(`favicon-${size}x${size}.png`);
  }
  console.log("Favicons generated.");
}

main();
