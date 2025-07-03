import { User } from "@/state/api";
import Image from "next/image";
import React from "react";

type UserProps = {
  user: User;
};

const UserCard = ({ user }: UserProps) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`https://pm-s-3-images.s3.ap-south-1.amazonaws.com/p1.jpeg`}
          alt="profile picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
