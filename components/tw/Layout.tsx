import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex bg-green-200 justify-center  items-center py-5 border-4 border-green-600">
      {children}
    </div>
  );
};

export default Layout;
