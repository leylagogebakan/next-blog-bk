import PostCard from "@/components/post/PostCard";
import Pagination from "@/components/shared/Pagination";
import { Post, SearchParamsProps } from "@/types";

export default async function Home({ searchParams }: SearchParamsProps) {
  console.log("searchParams: ", searchParams);
  const currentPage = searchParams?.page ? +searchParams.page : 1;
  const size = searchParams?.size ? +searchParams.size : 9;

  const response = await fetch(
    `https://cfw.6bw.fun/api/v1/blog/list?size=${size}&page=${currentPage}`
  );
  const res = await response.json();
  const total = res.data.total;
  const records = res.data.records;
  const posts: Post[] = [];
  records.forEach((item) => {
    const onePost: Post = {
      id: item.id,
      slug: item.slug,
      title: item.title,
      thumbnail: item.thumbnail
        ? item.thumbnail
        : `https://picsum.photos/384/224?id=${Math.floor(
            Math.random() * 10 + 1
          )}`,
      summary: item.summary,
      views: item.view_count,
      likes: item.like_count,
      comments: item.comment_count,
      publishDate:
        item?.published_time?.length > 10
          ? item.published_time.substring(0, 10)
          : "1970-01-01",
    };
    posts.push(onePost);
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-center">
        {posts.map((post) => {
          return (
            <div className="max-w-md p-4 md:w-1/2 lg:w-1/3" key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
      </div>
      <div>
        <Pagination total={total} current={currentPage} size={size} />
      </div>
    </div>
  );
}
