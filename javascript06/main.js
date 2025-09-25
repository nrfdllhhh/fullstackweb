import { index, store, destroy } from "./controller.js";

const main = () => {
  console.log("=== Data Asli (10 data) ===");
  index();

  console.log("\n=== Setelah Tambah 2 Data ===");
  store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@email.com" });
  store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@email.com" });
  index();

  console.log("\n=== Setelah Hapus Data Terakhir ===");
  destroy();
  index();
};

main();
