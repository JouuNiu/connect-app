'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { dataUser } from "@/mock/data-user";
import useSWR from "swr";

export default function RolesPage(){
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
      
  
  return (
      <div>
        <input 
          type="search"
          placeholder="Cari Hak Akses"
          className="w-full p-3 border rounded-lg mb-7 text-base"
        />
      
    <Table>
        <TableHeader>
         <TableRow>
          <TableHead>Nomor</TableHead>
          <TableHead className={"text-center"}>Hak Akses</TableHead>
          <TableHead className={"text-right"}>Action</TableHead>
          </TableRow>
        </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className={"text-center"}>Employee</TableCell>
          <TableCell className={"flex justify-end gap-4"}><IconPencil/><IconTrash/>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className={"font-medium"}>2</TableCell>
          <TableCell className={"text-center"}>Admin</TableCell>
          <TableCell className={"flex justify-end gap-4"}>
            <IconPencil/> <IconTrash/>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  );
}