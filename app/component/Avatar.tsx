"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      alt="Avatar"
      height="30"
      width="30"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
