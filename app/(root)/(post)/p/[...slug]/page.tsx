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

  // console.log("data---", data);

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
    <>
      {/* 基本信息 */}
      <div>
        <div>slug: {postDetail.slug}</div>
        <h1>{postDetail.title}</h1>
        <div>
          <span>{postDetail.author}</span>
          <span>{postDetail.createAt}</span>
          <span>{postDetail.updateAt}</span>
        </div>
      </div>

      <div className="flex">
        {/* 内容 */}
        <MyMdPreview id={id} cnt={postDetail.cnt} />
        {/* 目录 */}
        <MyCatalog id={id} />
      </div>
    </>
  );
};

export default PostDetailPage;
