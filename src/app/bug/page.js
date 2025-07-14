'use client';
import { IconBugOff } from '@tabler/icons-react';
import { useState } from 'react';

export default function LaporBug() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    kategori: 'Bug',
    deskripsi: '',
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'screenshot') {
      setForm({ ...form, screenshot: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.email || !form.deskripsi) {
      alert('Mohon isi semua kolom wajib.');
      return;
    }
   
    console.log('Form terkirim:', form);
    alert('Terima kasih! Laporan bug Anda telah dikirim.');
    setForm({
      nama: '',
      email: '',
      kategori: 'Bug',
      deskripsi: '',
      screenshot: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4"><IconBugOff/> Lapor Bug</h1>
        <p className="text-sm text-gray-600 mb-6">
          Jika kamu mengalami masalah, silakan isi formulir ini. Kami akan segera menindaklanjuti.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nama" className="block font-medium text-gray-700 mb-1">Nama*</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="kategori" className="block font-medium text-gray-700 mb-1">Kategori*</label>
            <select
              id="kategori"
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="Bug">Bug</option>
              <option value="Saran Fitur">Saran Fitur</option>
              <option value="UX/UI">Masalah UX/UI</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label htmlFor="deskripsi" className="block font-medium text-gray-700 mb-1">Deskripsi Bug*</label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg h-32 resize-none"
              required
            />
          </div>

          <div>
            <label htmlFor="screenshot" className="block font-medium text-gray-700 mb-1">Screenshot (opsional)</label>
            <input
              type="file"
              id="screenshot"
              name="screenshot"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Kirim Laporan
            </button>
            <button onClick={() => window.location.href = '/admin/users'} className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            Kembali
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
