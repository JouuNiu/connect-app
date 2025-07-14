export default function UserCard({fullname, email, role, status}) {
  return (
    <div className=" px-10 py-3 w-full ">
      <div
        id="list-users"
        className="px- border-1 h-30  border-gray-200 w-full rounded-lg ">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-black px-5 py-5">
            {fullname}
          </h1>
          <h2 className="text-sm text-black px-5 relative top-[-28px] ">
            {email}
          </h2>
          <h2 className="text-2xl font-bold text-black text-right px-5 relative top-[-48px]">
            {status}
          </h2>
        </div>
        <div className="flex space-x-3 px-5 relative top-[-45] ">
          <h2 className="bg-black text-white text-sm px-2 rounded">{role}</h2>
        </div>
        
      </div>
    </div>
  );
}
