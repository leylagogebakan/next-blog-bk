import NavBar from "@/components/shared/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // console.log("detail page layout");
  return (
    <main className="relative">
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
