'use client';
import { useState } from 'react';

export default function SignUpPage() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.email || !form.password || !form.confirmPassword) {
      alert("Semua kolom wajib diisi.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Password dan konfirmasi tidak cocok.");
      return;
    }

    if (!form.agree) {
      alert("Anda harus menyetujui syarat dan ketentuan.");
      return;
    }

    // Simulasi kirim data
    alert(`Akun ${form.nama} berhasil didaftarkan!`);
    console.log("Data Sign Up:", form);
    setForm({
      nama: '',
      email: '',
      password: '',
      confirmPassword: '',
      agree: false
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Buat Akun</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-gray-300"
              placeholder="Nama lengkap"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-gray-300"
              placeholder="Email aktif"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-gray-300"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-gray-300"
              placeholder="Ketik ulang password"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              Saya menyetujui <a href="#" className="text-blue-600 hover:underline">Syarat & Ketentuan</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Daftar
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Sudah punya akun? <a href="/login" className="text-blue-600 hover:underline">Masuk di sini</a>
        </p>
      </div>
    </div>
  );
}

