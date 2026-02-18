import fs from "fs";
import path from "path";

export function getChangelogs() {
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
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return logs;
}
