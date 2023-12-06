"use client";

import React, { useState, useEffect } from "react";
import { MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/preview.css";
import { useTheme } from "next-themes";

const MyMdPreview = ({ id, cnt }: { id: string; cnt: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // 服务端不管theme
    return (
      <>
        <MdPreview editorId={id} modelValue={cnt} />
      </>
    );
  }

  console.log("client theme: ", theme);

  return (
    <>
      <MdPreview
        editorId={id}
        modelValue={cnt}
        theme={theme === "light" ? "light" : "dark"}
      />
    </>
  );
};

export default MyMdPreview;
