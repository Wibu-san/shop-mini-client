export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "GTA V", price: 341500, image: "/images/GTA_V.png", category: "Game", stock: 18 },
  { id: 2, name: "GTA VI", price: 2000000, image: "/images/GTA_VI.png", category: "Game", stock: 0 },
  { id: 3, name: "GTA IV", price: 90000, image: "/images/GTA_IV.png", category: "Game", stock: 30 },
  { id: 4, name: "PlayStation 5 Pro", price: 3499000, image: "/images/PS5.jpg", category: "Thiết bị chơi game", stock: 10 },
  { id: 5, name: "Tai nghe PlayStation 5", price: 550000, image: "/images/tai_nghe_PS5.png", category: "Thiết bị chơi game", stock: 8 },
  { id: 6, name: "Tay cầm PlayStation 5", price: 1590000, image: "/images/tay_cam_PS5.png", category: "Thiết bị chơi game", stock: 15 },
];