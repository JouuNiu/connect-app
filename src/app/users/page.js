export default function UserPage() {
    return (
        <div id="container" className="flex h-[100vh]">
            <section id="navigation" className="bg-gray-400 p-4 w-[200px]">
                <h1 classname="text-3xl font-bold text-center">connect</h1>
                <div className="flex flex-col gap-2 mt-4">
                    <button>User</button>
                    <button>Hak akses</button>
                    <button>Logout</button>
                </div>
            </section>
            <section>
                <input type="text" placeholder="cari user" className="p-3 w-500"/>
                <div id="list-users"></div>
            </section>
            
        </div>
    );
}