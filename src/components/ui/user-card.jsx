export default function UserCard() {
    return(
        <div className=" px-10 py-3 ">
                    <div id="list-users" className="px- border-1 h-30  border-gray-400 w-380 rounded-lg ">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-black px-5 py-5">Rahmat Saudi Al Fathir</h1>
                        <h2 className="text-sm text-black px-5 relative top-[-28px] ">rahmatsaudi@universitasmulia.ac.id</h2>
                        <h2 className="text-2xl font-bold text-black text-right px-5 relative top-[-48px]"> Aktif</h2>
                    </div>
                    <div className="flex space-x-3 px-5 relative top-[-45] " >
                        <h2 className="bg-black text-white text-sm px-2 rounded">Admin</h2>
                        <h2 className="bg-black text-white text-sm px-2 rounded">Employee</h2>
                    </div>
                    </div>
                </div>
    )
}