"use client";
import { dataUser } from "@/mock/data-user";
import useSWR from "swr";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
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
    <div className="p-6">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className={"text-xl"}>Bagaimana cara berlangganan newsletter?</AccordionTrigger>
          <AccordionContent>Anda dapat berlangganan newsletter kami dengan memasukkan alamat email Anda di bagian bawah halaman utama. Kami akan mengirimkan ringkasan berita harian atau mingguan langsung ke inbox Anda.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className={"text-xl"}>Apakah konten di website ini gratis?</AccordionTrigger>
          <AccordionContent>Sebagian besar konten kami tersedia secara gratis. Namun, artikel premium dan analisis mendalam hanya tersedia untuk pengguna yang telah berlangganan paket premium.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className={"text-xl"}>Apakah saya bisa mengirimkan artikel atau opini ke website ini?</AccordionTrigger>
          <AccordionContent>Ya, kami menerima kontribusi dari penulis tamu. Anda dapat mengunjungi halaman "Kirim Artikel" atau menghubungi redaksi melalui email untuk informasi lebih lanjut mengenai ketentuan dan format penulisan..</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className={"text-xl"}>Bagaimana cara melaporkan kesalahan dalam artikel?</AccordionTrigger>
          <AccordionContent>Jika Anda menemukan kesalahan fakta atau penulisan dalam artikel kami, silakan gunakan tombol "Laporkan Kesalahan" di bawah artikel atau kirim email ke redaksi@gmail.com</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className={"text-xl"}> Apakah berita di sini sudah diverifikasi kebenarannya?</AccordionTrigger>
          <AccordionContent>Kami menjalankan proses editorial yang ketat dan melakukan verifikasi fakta sebelum menerbitkan setiap artikel. Kami juga mencantumkan sumber referensi di akhir artikel jika diperlukan.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
