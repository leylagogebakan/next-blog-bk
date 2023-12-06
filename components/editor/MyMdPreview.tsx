"use client";

import React, { useState, useEffect } from "react";
import { MdPreview } from "md-editor-rt";
import "md-editor-rt/lib/preview.css";
import { useTheme } from "next-themes";
import { generateMdHeadingId } from "@/lib/MdEditorUtil";

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
        {/* 在请求返回的html中能看到这行 */}
        <div hidden>server preview</div>
        <MdPreview
          editorId={id}
          modelValue={cnt}
          mdHeadingId={generateMdHeadingId}
        />
      </>
    );
  }

  console.log("client theme: ", theme);

  // 这个地方很有意思，客户端使用的是下面客户端渲染，但是上面服务端渲染不加mdHeadingId，目录就无法跳转

  return (
    <>
      {/* 在页面能看到这行 */}
      <div hidden>client preview</div>
      <MdPreview
        editorId={id}
        modelValue={cnt}
        mdHeadingId={generateMdHeadingId}
        theme={theme === "light" ? "light" : "dark"}
      />
    </>
  );
};

export default MyMdPreview;
