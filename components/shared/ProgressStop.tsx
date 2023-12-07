"use client";
import { useEffect } from "react";
import * as NProgress from "nprogress";

const ProgressStop = () => {
  useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <></>
  )
};

export default ProgressStop;
