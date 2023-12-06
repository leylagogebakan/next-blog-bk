"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getJwtToken } from "@/lib/AuthUtils";

const EditPostPage = ({ params }: { params: { id: string } }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [token, setToken] = useState("");

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const updatPost = async () => {
    // 获取jwt token
    const token = await getJwtToken();
    setToken(token);
    // 带着token请求更新接口
  };

  return (
    <div>
      <div>Hello, {user.id} welcome to Clerk</div>
      <div>{token}</div>
      <div>更新id是{params.id}的文章</div>
      <button onClick={updatPost}>保存</button>
    </div>
  );
};

export default EditPostPage;
