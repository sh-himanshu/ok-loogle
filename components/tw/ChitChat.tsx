import React from "react";
import logo from "../../public/images/chit_chat.png";
import Image from "next/image";

const ChitChat = () => {
  return (
    <div className="rounded-xl max-w-sm shadow-md flex p-6 bg-white space-x-4">
      <div className="h-12 w-12 flex-shrink-0">
        <Image src={logo} alt="Chit Chat" className=" rounded-full" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
};

export default ChitChat;
