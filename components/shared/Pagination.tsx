"use client";

import React from "react";
import { useRouter } from "next/navigation";
import * as NProgress from "nprogress";

function generatePageArray(length: number): number[] {
  return Array.from({ length }, (_, index) => index + 1);
}

const Pagination = ({
  total,
  size,
  current,
}: {
  total: number;
  size: number;
  current: number;
}) => {
  const router = useRouter();

  // 计算页数
  const totalPage = Math.ceil(total / size);
  const pages = generatePageArray(totalPage);

  const routeTo = (clickPageNum: number) => {
    if (clickPageNum === current) {
      return;
    }
    // 开启进度条
    NProgress.start();
    // 跳转时加分页参数
    router.push(`?page=${clickPageNum}&size=${size}`);
  };

  return (
    <div className="m-6 mb-12 flex w-full items-center justify-center">
      <div className="join">
        <button
          className="btn join-item"
          style={{ display: current === 1 ? "none" : "block" }}
          onClick={() => routeTo(current - 1)}
        >
          «
        </button>
        {pages.map((item) => (
          <button
            key={item}
            onClick={() => routeTo(item)}
            className={`btn join-item ${item === current && "btn-active"}`}
          >
            {item}
          </button>
        ))}
        <button
          className="btn join-item"
          style={{ display: current === totalPage ? "none" : "block" }}
          onClick={() => routeTo(current + 1)}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
