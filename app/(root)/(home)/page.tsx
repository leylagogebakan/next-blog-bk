import PostCard from "@/components/post/PostCard";
import { Post } from "@/types";

const posts: Post[] = [
  {
    id: 1,
    slug: "hello",
    title:
      "markdown-test markdown-test markdown-test markdown-test markdown-test markdown-test",
    thumbnail:
      "https://six-img.sh1a.qingstor.com/202301/202301232044294944cne.png",
    summary: "test test",
    views: 0,
    likes: 2,
    comments: 3,
    publishDate: "2023-11-11",
  },
  {
    id: 2,
    slug: "hello",
    title:
      "注意，不要设置此标签的高度，下方代码设置了行数，会自动根据行数进行计算高度的",
    thumbnail:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    summary: "test test",
    views: 0,
    likes: 2,
    comments: 3,
    publishDate: "2023-11-11",
  },
  {
    id: 3,
    slug: "hello",
    title: "markdown-test",
    thumbnail:
      "https://six-img.sh1a.qingstor.com/202301/20230123204308288xurc.png",
    summary: "test test",
    views: 0,
    likes: 2,
    comments: 3,
    publishDate: "2023-11-11",
  },
  {
    id: 4,
    slug: "hello",
    title: "markdown-test",
    thumbnail:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    summary: "test test",
    views: 2020,
    likes: 3333,
    comments: 3,
    publishDate: "2023-11-11",
  },
  {
    id: 5,
    slug: "hello",
    title: "markdown-test",
    thumbnail:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    summary: "",
    views: 0,
    likes: 2,
    comments: 3,
    publishDate: "2023-11-11",
  },
  {
    id: 6,
    slug: "hello",
    title: "markdown-test",
    thumbnail:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    summary:
      "注意，不要设置此标签的高度，下方代码设置了行数，会自动根据行数进行计算高度的est testtest testtest testtest testtest testtest testtest test",
    views: 0,
    likes: 2,
    comments: 3,
    publishDate: "2023-11-11",
  },
  {
    id: 7,
    slug: "hello",
    title: "markdown-test",
    thumbnail:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    summary: "test test",
    views: 0,
    likes: 2,
    comments: 3,
    publishDate: "2023-11-11",
  },
];

export default function Home() {
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
    </div>
  );
}
