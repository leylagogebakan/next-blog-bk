"use client"

import React  from "react";
import { MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/preview.css";
import { useTheme } from "next-themes";

const MyMdPreview = ({ id, cnt }: { id: string; cnt: string }) => {
  const { theme } = useTheme();

  console.log('theme------', theme)

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
