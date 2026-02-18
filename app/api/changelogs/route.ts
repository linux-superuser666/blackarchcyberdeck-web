import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";  

export async function GET() {
  const directory = path.join(process.cwd(), "data/changelogs");

  const files = fs.readdirSync(directory);

  const logs = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(directory, file);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContents);
    })
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() -
        new Date(a.releaseDate).getTime()
    );

  return NextResponse.json(logs);
}
