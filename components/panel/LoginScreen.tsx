"use client";

import { useState } from "react";

interface LoginScreenProps {
  onLogin: (name: string, avatar: string | null) => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!name) return alert("Enter username");
    onLogin(name, avatar);
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center gap-6 text-yellowx">
      <div className="text-3xl tracking-widest">BLACKARCH CYBERDECK</div>

      {/* Avatar Preview */}
      <div className="w-32 h-32 rounded-full border border-yellowx overflow-hidden flex items-center justify-center">
        {avatar ? (
          <img src={avatar} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs opacity-60">NO AVATAR</span>
        )}
      </div>

      {/* Upload Image */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="text-sm"
      />

      {/* Input Name */}
      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-transparent border border-yellowx px-4 py-2 text-center"
      />

      <button
        onClick={handleSubmit}
        className="px-6 py-2 border border-yellowx hover:bg-yellowx hover:text-black transition-all duration-300"
      >
        BREACH SYSTEM
      </button>
    </div>
  );
}
