import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi.";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!formData.username.trim()) newErrors.username = "Username wajib diisi.";
    if (!formData.password.trim()) {
      newErrors.password = "Password wajib diisi.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    if (validate()) {
      console.log("Data berhasil dikirim:", formData);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Registrasi Pengguna
        </h1>

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-sm text-center">
            Registrasi berhasil! 🎉
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full p-2.5 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none`}
              placeholder="Masukkan nama lengkap"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2.5 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none`}
              placeholder="Masukkan email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-2.5 border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none`}
              placeholder="Masukkan username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2.5 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none`}
              placeholder="Masukkan password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Daftar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login di sini
          </a>
        </p>
      </div>
    </div>
  );
}
