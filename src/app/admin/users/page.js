import UserCard from "@/components/ui/user-card";
import { dataUser } from "@/mock/data-user";


export default function UserPage() {
  const data = dataUser;

  return (
    <section id="content" className="bg-white w-80% ">
      <div className="flex justify-center h-30 py-5">
        <input
          type="text"
          placeholder="Cari user"
          className="border-2 border-gray p-5 w-385 rounded-lg text-black "
        />
      </div>
      {data.map((Employee, index) => (
        <UserCard
          key={index}
          fullname={Employee.fullname}
          email={Employee.email}
          role={Employee.role}
          status={Employee.status}
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
