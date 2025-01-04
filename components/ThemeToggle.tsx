"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun /> : <MoonStar />}
    </button>
  );
};

export default ThemeSwitch;