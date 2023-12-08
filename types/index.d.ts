export interface Post {
  id: number,
  slug: string,
  title: string,
  thumbnail: string,
  summary: string,
  views: number,
  likes: number,
  comments: number,
  publishDate: string,
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
