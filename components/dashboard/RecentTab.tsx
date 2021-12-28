import React from "react";

interface RecentTabProps {
  title: string;
}

const RecentTab = ({
  children,
  title,
}: React.PropsWithChildren<RecentTabProps>) => {
  return (
    <div className="border-2 border-gray-100 rounded-xl p-7 my-5 flex flex-col justify-between">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-medium">{title}</h1>
        <h1 className="text-lg">Click to view all</h1>
      </div>
      {children}
    </div>
  );
};

export default RecentTab;
