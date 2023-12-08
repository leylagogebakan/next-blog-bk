"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Post } from "@/types";
import {
  EyeIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { formatCount } from "@/lib/CommonUtils";
import * as NProgress from "nprogress";

const PostCard = ({ post }: { post: Post }) => {
  const router = useRouter();

  const routeToDetail = () => {
    // 进度条
    NProgress.start();
    // 导航
    router.push(`/p/${post.id}`);
  };

  return (
    <div className="flex items-start justify-center">
      <div className="card glass w-96 overflow-hidden" onClick={routeToDetail}>
        <figure>
          {/* width和height是必须参数，用css方式设置Image的高度，需要设置为0 */}
          <Image
            src={post.thumbnail}
            alt="post cover"
            width={0}
            height={0}
            sizes="100vw"
            // h-56 w-full object-cover object-center 固定图片高度，自动调整图片宽度，尽量让图片撑满
            // hover:scale-125 鼠标悬浮时候，放大图片
            className="h-56 w-full object-cover object-center hover:scale-125"
          />
        </figure>
        {/* 设置高度 h-44  防止因为文章简介造成 Card 高度不一样 */}
        <div className="card-body h-44">
          {/* line-clamp-1 省略超出一行的内容 */}
          <h2 className="card-title line-clamp-1">{post.title}</h2>
          <p className="line-clamp-2">{post.summary}</p>
          <div className="flex justify-between">
            <div className="badge badge-ghost">{post.publishDate}</div>
            <div className="card-actions justify-end">
              <div className="badge gap-2">
                <EyeIcon className="h-5 w-5" />
                {formatCount(post.views)}
              </div>
              <div className="badge gap-2">
                <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
                {formatCount(post.likes)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
