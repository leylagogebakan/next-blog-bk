import NavBar from "@/components/shared/NavBar";
import React from "react";
import ProgressStop from "@/components/shared/ProgressStop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <ProgressStop />
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
