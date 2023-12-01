import NavBar from "@/components/shared/NavBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <NavBar />
      <div>
        <section className="mx-auto min-h-screen w-full">{children}</section>
      </div>
    </main>
  );
};

export default Layout;
