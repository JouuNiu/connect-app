'use client';

import UserCard from "@/components/ui/user-card";
import { dataUser } from "@/mock/data-user";
import {
  IconLogout,
  IconLogout2,
  IconUser,
  IconUserCog,
} from "@tabler/icons-react";
import useSWR from "swr";

export default function UserPage() {
  const data = dataUser;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data: users,
    error,
    isLoading,
  } = useSWR(`https://jsonplaceholder.typicode.com/users`, fetcher);

  if (isLoading){
    return(
      <div>
        <p>
          Loading...
        </p>
      </div>
    );
  }

  if (error){
    return(
      <div>
        <p>
          Gagal memuat data
        </p>
      </div>
    );
  }

  console.log(users);

  return (
    <section id="content" className="bg-white w-80% ">
      <div className="flex justify-center h-30 py-8">
        <input
          type="text"
          placeholder="Cari user"
          className="border-2 border-gray p-5 w-full rounded-lg text-black "
        />
      </div>
      {users.map((Employee, index) => (
        <UserCard
          key={index}
          fullname={Employee.name}
          email={Employee.email}
          role={Employee.phone}
          status={Employee.website}
        />
      ))}

      <div className="text-right py-30 px-10">
        <button className="text-black text-4xl border-2 rounded w-15 bg-gray-300 border-gray-300 ">
          +
        </button>
      </div>
    </section>
  );
}
