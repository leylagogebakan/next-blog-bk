"use client";

import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="fixed bottom-16 right-2 hidden md:block lg:right-12">
      <button className="btn btn-ghost btn-active" onClick={scrollToTop}>
        <ChevronDoubleUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BackToTop;
