import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function RolesPage(){
    return (
      <div>
        <input 
          type="search"
          placeholder="Cari Hak Akses"
          className="w-full p-3 border rounded-lg mb-7 text-base"
        />
      
    <Table>
      <TableCaption>Nomor</TableCaption>
        <TableHeader>
         <TableRow>
          <TableHead className="w-[100px]">Hak Akses</TableHead>
          <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
    );
}