"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="text-sm font-bold uppercase hover:bg-background hover:text-foreground px-1">
        [THEME]
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-sm font-bold uppercase hover:bg-background hover:text-foreground px-1"
      aria-label="Toggle Dark Mode"
    >
      [{theme === "dark" ? "LIGHT MODE" : "DARK MODE"}]
    </button>
  );
}
