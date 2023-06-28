import React from "react";

const NotificationBar = ({ notification }) => {
  return (
    <div className="w-full bg-sky-900 px-4 text-white py-2 text-center hidden md:block">
      {notification}
    </div>
  );
};

export default NotificationBar;
