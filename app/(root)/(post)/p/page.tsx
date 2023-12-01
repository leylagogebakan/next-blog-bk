"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  // 跳转到首页
  router.push("/", { scroll: false });
}
