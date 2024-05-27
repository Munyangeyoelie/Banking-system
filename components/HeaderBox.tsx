import React from "react";

const HeaderBox = ({
  type = "title",
  subtext,
  title,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">{user}</span>
        )}
      </h1>
    </div>
  );
};

export default HeaderBox;
