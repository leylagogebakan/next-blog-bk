"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as NProgress from "nprogress";

const ProgressStop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // console.log("pathname, searchParams", pathname, searchParams);

  useEffect(() => {
    NProgress.done();
    console.log("-- stop progeress --");
  }, [pathname, searchParams]);

  return <></>;
};

export default ProgressStop;
