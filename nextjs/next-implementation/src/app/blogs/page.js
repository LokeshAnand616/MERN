"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function BlogPost() {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <h1>Theme: {theme}</h1>
    </>
  );
}
