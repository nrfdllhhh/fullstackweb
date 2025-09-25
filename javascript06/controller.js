import { users } from "./data.js";

const index = () => {
  console.log("Daftar Users:");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

const store = (user) => {
  users.push(user);
  console.log("Data berhasil ditambahkan!");
};

const destroy = () => {
  users.pop();
  console.log("Data terakhir berhasil dihapus!");
};

export { index, store, destroy };
