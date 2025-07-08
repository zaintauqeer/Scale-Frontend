"use client";

import { useState } from "react";

interface CartItem {
  _id: string;
  title: { en: string };
  pricePerUnit: number;
}

interface FormState {
  username: string;
  location: string;
  email: string;
  quantity: number;
}

export default function ProductDetail() {
  const [cartItem, setCartItem] = useState<CartItem>({
    _id: "demo-id",
    title: { en: "Super Deal" },
    pricePerUnit: 1500,
  });

  const [form, setForm] = useState<FormState>({
    username: "",
    location: "",
    email: "",
    quantity: 1,
  });

  const [showSidebar, setShowSidebar] = useState(false);

  const handleAddToCart = () => {
    if (!form.username || !form.email || !form.location || !form.quantity) {
      alert("Please fill out all fields.");
      return;
    }

    localStorage.setItem("cart", JSON.stringify([cartItem]));
    localStorage.setItem("cartForm", JSON.stringify(form));
    setShowSidebar(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>

      <div className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Full Name"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location / Address"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          min={1}
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: parseInt(e.target.value, 10) })
          }
          className="w-full border p-2 rounded"
        />
        <button
          onClick={handleAddToCart}
          className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 focus:outline-none focus:ring"
        >
          Add to Cart
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 p-6 overflow-y-auto 
          transform transition-transform duration-300 ease-in-out 
          ${showSidebar ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <h2 className="text-xl font-bold mb-4">🛒 Checkout Summary</h2>
        <div className="space-y-2">
          <p><strong>Product:</strong> {cartItem.title.en}</p>
          <p><strong>Price:</strong> {cartItem.pricePerUnit} / Unit</p>
          <p><strong>Quantity:</strong> {form.quantity}</p>
          <hr />
          <p><strong>Name:</strong> {form.username}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Location:</strong> {form.location}</p>
          <hr />
          <button
            onClick={() => window.location.href = "/en/checkout"}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full mt-4 focus:outline-none focus:ring"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => setShowSidebar(false)}
            className="text-sm text-gray-500 underline mt-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
