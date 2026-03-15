import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

const SIZE = 180;

/**
 * Apple touch icon (e.g. home screen). Used by Next.js for all routes.
 */
export default async function AppleIcon() {
  const buffer = await readFile(
    path.join(process.cwd(), "public", "favicon-128x128.png")
  );
  const dataUrl = `data:image/png;base64,${buffer.toString("base64")}`;

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={dataUrl}
        width={SIZE}
        height={SIZE}
        alt=""
        style={{ width: SIZE, height: SIZE }}
      />
    ),
    { width: SIZE, height: SIZE }
  );
}
