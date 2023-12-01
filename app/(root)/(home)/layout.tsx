import NavBar from "@/components/shared/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <NavBar />
      <div className="flex">
        LeftSideBar
        {/* 
            flex-1: 分配剩余空间给flex容器，使其在垂直方向上占据所有可用空间
            flex-col: 设置flex容器为垂直方向布局，使子元素在垂直方向上排列

            max-md:pb-14 的意思 
            因为后面设置了sm:px-14，所以这个意思就是当屏幕宽度小于等于md(768px)尺寸，大于sm(640px)时，设置底部内边距为14；
            如果后面不设置sm，意思就是小于等于md(768px)尺寸，设置底部内边距为14；
         */}
        {/* sm:px-14 的意思 屏幕尺寸大于sm(640px)，设置水平内边距为14 */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full">{children}</div>
        </section>
        RightSideBar
      </div>
    </main>
  );
};

export default Layout;
