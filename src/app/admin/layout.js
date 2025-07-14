"use client";

import {
  IconLogout,
  IconLogout2,
  IconNews,
  IconUser,
  IconUserCog,
} from "@tabler/icons-react";

export default function AdminLayout({ children }) {
  return (
    <div id="container" className="flex h-100vh">
      <section
        id="navigation"
        className="bg-white p-10 w-20% border-r-2 border-gray-200"
      >
        <h1 className="text-4xl font-bold text-center text-black">Connect</h1>
        <div className="flex flex-col space-y-6 px-12 py-15 ">
          <button onClick={() => window.location.href = '/admin/users'} className="flex items-center px-3 font-bold text-xl gap-2 bg-white text-black hover:bg-black hover:text-white rounded-md w-45 h-10">
            <IconUser></IconUser>User
          </button>
          <button onClick={() => window.location.href = '/admin/roles'} className="flex items-center px-3 font-bold text-xl gap-2 bg-white text-black hover:bg-black hover:text-white rounded-md w-45 h-10">
            <IconUserCog></IconUserCog> Hak akses
          </button>
          <button onClick={() => window.location.href = '/admin/News'} className="flex items-center px-3 font-bold text-xl gap-2 bg-white text-black hover:bg-black hover:text-white rounded-md w-45 h-10">
            <IconNews></IconNews> Berita
          </button>
          <button className="flex items-center px-3 font-bold text-xl gap-2 bg-white text-black hover:bg-black hover:text-white rounded-md w-45 h-10">
            <IconLogout2></IconLogout2> Logout
          </button>
          
 
        </div>
      </section>
      <section id="content" className="bg-white w-85% flex-1 p-[30px] overflow-y auto">
        {children}
      </section>
      
    </div>
  );
    
}
