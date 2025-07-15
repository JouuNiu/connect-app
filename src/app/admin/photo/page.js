'use client';

import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function GalleryPage() {
  const { data: photos, error, isLoading } = useSWR(
    'https://picsum.photos/v2/list?page=1&limit=12',
    fetcher
  );

  if (isLoading) {
    return <div className="p-5 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-5 text-center text-red-500">Gagal memuat data</div>;
  }

  return (
    <section className="bg-white w-full p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Galeri Gambar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border rounded-lg overflow-hidden shadow">
            <Image
              src={`https://picsum.photos/id/${photo.id}/300/200`}
              alt={photo.author}
              width={300}
              height={200}
              className="object-cover"
            />
            <p className="text-sm p-2 text-center">By {photo.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

