"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState("dark");

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center gap-4">
      <Button onClick={toggleTheme} variant="ghost" size="sm">
        {themeMode === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
