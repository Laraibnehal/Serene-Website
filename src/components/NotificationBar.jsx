import React from "react";

const NotificationBar = ({ notification }) => {
  return (
    <div className="w-full bg-yellow-900 p-4 text-white text-center py-2">
      {notification}
    </div>
  );
};

export default NotificationBar;
