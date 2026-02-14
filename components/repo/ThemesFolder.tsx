"use client";
import React, { useEffect, useState } from "react";

const ThemesFolder: React.FC = () => {
  const [items, setItems] = useState<{ name: string; type: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.github.com/repos/linux-superuser666/BlackArchCyberpunk2077/contents/dotThemes/Cyberdeck-Blackarch"
      );
      const data = await res.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <p key={item.name} className="cursor-pointer hover:font-bold p-1">
          {item.type === "dir" ? "📁" : "📄"} {item.name}
        </p>
      ))}
    </div>
  );
};

export default ThemesFolder;
