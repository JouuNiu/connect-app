import { IconLogout, IconLogout2, IconUser, IconUserCog } from "@tabler/icons-react";

export default function UserPage() {
    return (
        <div id="container" className="flex h-100vh">
            <section id="navigation" className="bg-white p-4 w-20% border-r-3 border-black">
                <h1 className="text-4xl font-bold text-center text-black">Connect</h1>
                <div className="flex flex-col space-y-6 px-12 py-15 ">
                    <button className="flex items-center px-3 font-bold text-xl gap-2 bg-white text-black hover:bg-black hover:text-white rounded-md w-45 h-10"><IconUser></IconUser>User</button>
                    <button className="flex items-center px-3 font-bold text-xl gap-2 bg-white text-black hover:bg-black hover:text-white rounded-md w-45 h-10"><IconUserCog></IconUserCog> Hak akses</button>
                    <button className="flex items-center px-3 font-bold text-xl gap-2 bg-white text-black hover:bg-black hover:text-white rounded-md w-45 h-10"><IconLogout2></IconLogout2> Logout</button>
                </div>
            </section>
            <section id="content" className="bg-white w-80% ">
                <div className="flex justify-center h-30 py-8">
                    <input type="text" placeholder="Cari user" className="border-2 border-gray p-5 w-385 rounded-lg text-black " /></div>
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
                <div className=" px-10 py-3 ">
                    <div id="list-users" className="px- border-1 h-30  border-gray-400 w-380 rounded-lg ">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-black px-5 py-5">Lintang</h1>
                        <h2 className="text-sm text-black px-5 relative top-[-28px] ">lintang@universitasmulia.ac.id</h2>
                        <h2 className="text-2xl font-bold text-black text-right px-5 relative top-[-48px]"> Aktif</h2>
                    </div>
                    <div className="flex space-x-3 px-5 relative top-[-45] " >
                        <h2 className="bg-black text-white text-sm px-2 rounded">Employee</h2>
                    </div>
                    </div>
                </div>
                <div className=" px-10 py-3 ">
                    <div id="list-users" className="px- border-1 h-30  border-gray-400 w-380 rounded-lg ">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-black px-5 py-5">Shafira</h1>
                        <h2 className="text-sm text-black px-5 relative top-[-28px] ">Shafira@universitasmulia.ac.id</h2>
                        <h2 className="text-2xl font-bold text-black text-right px-5 relative top-[-48px]"> Aktif</h2>
                    </div>
                    <div className="flex space-x-3 px-5 relative top-[-45] " >
                        <h2 className="bg-black text-white text-sm px-2 rounded">Employee</h2>
                    </div>
                    </div>
                </div>
                <div className=" px-10 py-3 ">
                    <div id="list-users" className="px- border-1 h-30  border-gray-400 w-380 rounded-lg ">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-black px-5 py-5">Lebah Ganteng</h1>
                        <h2 className="text-sm text-black px-5 relative top-[-28px] ">lebahganteng@universitasmulia.ac.id</h2>
                        <h2 className="text-2xl font-bold text-black text-right px-5 relative top-[-48px]"> Suspended</h2>
                    </div>
                    <div className="flex space-x-3 px-5 relative top-[-45] " >
                        <h2 className="bg-black text-white text-sm px-2 rounded">Employee</h2>
                    </div>
                    </div>
                </div>
                <div className="text-right py-30 px-10">
                    <button className="text-black text-4xl border-2 rounded w-15 bg-gray-300 border-gray-300 ">
                        +
                    </button>
                </div>
            </section>
            
        </div>
    );
}