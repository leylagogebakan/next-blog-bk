import React from "react";

const MobileNav = () => {
  return (
    // 大于sm(640)隐藏
    <div className="drawer sm:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* 图标 */}
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </label>
      </div>

      {/* 侧边栏 */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
