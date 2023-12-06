import Image from "next/image";
import MyCatalog from "@/components/editor/MyCatalog";
import MyMdPreview from "@/components/editor/MyMdPreview";
import React from "react";

interface PostDetail {
  slug: string;
  cnt: string;
  title: string;
  author: string;
  createAt: string;
  updateAt: string;
}

const PostDetailPage = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch(`https://cfw.6bw.fun/api/v1/blog/id/${params.slug}`);

  const { data } = await res.json();

  const postDetail: PostDetail = {
    slug: params.slug,
    cnt: data.cnt,
    title: data.ob_path,
    author: data.created_by,
    createAt: data.created_at,
    updateAt: data.last_modified_at,
  };

  const id = "md-preview";

  return (
    <main id="mdPost">
      <div className="mx-auto flex justify-center">
        {/* 文章信息 */}
        <div id="mdcnt" className="overflow-y-auto lg:w-1/2">
          {/* 文章基本信息 */}
          <div className="m-4 flex flex-col items-center justify-center space-y-4">
            <div hidden>slug: {postDetail.slug}</div>
            <h1 className="mx-auto text-3xl font-bold">{postDetail.title}</h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex space-x-1">
                <Image
                  src="/assets/icons/user.svg"
                  alt="作者"
                  width={24}
                  height={24}
                />
                <span>{postDetail.author}</span>
              </div>
              <div className="flex space-x-1">
                <Image
                  src="/assets/icons/calendar-days.svg"
                  alt="文章发布日期"
                  width={24}
                  height={24}
                />
                <span>{postDetail.createAt}</span>
              </div>
            </div>
          </div>
          {/* 文章正文 */}
          <MyMdPreview id={id} cnt={postDetail.cnt} />
        </div>

        {/* 右边栏：目录 */}
        <div id="category" className="ml-4 shrink-0 grow-0 max-lg:hidden">
          <div className="sticky top-20">
            <MyCatalog id={id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostDetailPage;
