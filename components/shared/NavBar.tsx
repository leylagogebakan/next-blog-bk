import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <p className="text-2xl font-bold leading-8">
            Next
            <span className="text-primary">Blog</span>
          </p>
        </Link>
      </div>

      <div className="mr-2 flex-none gap-4">
        {/* 检索框 */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>

        {/* 主题切换按钮 */}
        <ThemeSwitch />

        {/* 用户图标 */}
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            // appearance={{
            //   elements: {
            //     avatarBox: "h-10 w-10",
            //   },
            //   variables: {
            //     colorPrimary: "#ff7000",
            //   },
            // }}
          />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
