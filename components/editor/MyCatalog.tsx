"use client";

import React, { useState, useEffect } from "react";
import { MdCatalog } from "md-editor-rt";
import { useTheme } from "next-themes";
import { generateMdHeadingId } from "@/lib/MdEditorUtil";

const MyCatalog = ({ id }: { id: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // 服务端不渲染目录
    return null;
  }

  const scrollElement = document.documentElement;

  return (
    <MdCatalog
      editorId={id}
      mdHeadingId={generateMdHeadingId}
      theme={theme === "light" ? "light" : "dark"}
      offsetTop={90}
      scrollElement={scrollElement}
      scrollElementOffsetTop={70}
    />
  );
};

export default MyCatalog;
