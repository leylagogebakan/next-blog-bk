"use client";

import React, { useState, useEffect } from "react";
import { MdCatalog } from "md-editor-rt";

const MyCatalog = ({ id }: { id: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const scrollElement = document.documentElement;

  return <MdCatalog editorId={id} scrollElement={scrollElement} />;
};

export default MyCatalog;
