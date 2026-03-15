import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

const SIZE = 32;

/**
 * Default app icon served at /icon. Used by Next.js for all routes.
 * Regenerated from public/favicon-32x32.png so the icon appears on every route.
 */
export default async function Icon() {
  const buffer = await readFile(
    path.join(process.cwd(), "public", "favicon-32x32.png")
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
