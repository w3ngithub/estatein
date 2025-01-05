"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <>
      <input
        type="checkbox"
        value=""
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
    </>
  );
};

export default ThemeToggle;
