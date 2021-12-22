import React from "react";

const RedBadge = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <div className="flex flex-row justify-between py-2 text-white bg-red-700 rounded-xl p-3 my-2 items-center items-center">
      {children}
    </div>
  );
};

const GreenBadge = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <div className="flex flex-row justify-between py-2 text-white bg-green-500 rounded-xl p-3 my-2 items-center">
      {children}
    </div>
  );
};

const YellowBadge = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <div className="flex flex-row justify-between py-2 bg-yellow-300 rounded-xl p-3 my-2">
      {children}
    </div>
  );
};

interface BadgeProps {
  color: "red" | "green" | "yellow";
}

export function Badge({
  children,
  color,
}: React.PropsWithChildren<BadgeProps>) {
  if (color == "red") {
    return <RedBadge>{children}</RedBadge>;
  }
  if (color == "green") {
    return <GreenBadge>{children}</GreenBadge>;
  }
  return <YellowBadge>{children}</YellowBadge>;
}
