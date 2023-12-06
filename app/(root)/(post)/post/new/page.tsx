"use client";
import React, {useState} from "react";
import { useUser } from "@clerk/nextjs";
import { getJwtToken } from "@/lib/AuthUtils";

const NewPostPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [token, setToken] = useState('');

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const createPost = async () => {
    // 获取jwt token
    const token = await getJwtToken();
    setToken(token);
    // 带着token请求新建接口
  };

  return (
    <div>
      <h1>新建文章</h1>
      <div>Hello, {user.id} welcome to Clerk</div>
      <div>{token}</div>
      <button onClick={createPost}>保存</button>
    </div>
  );
};

export default NewPostPage;
