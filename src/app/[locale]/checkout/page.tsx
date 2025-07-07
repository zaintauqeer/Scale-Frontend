'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

/* ---------------- Types ---------------- */
interface CartItem {
  _id: string;                 // comes from deal detail
  title: { en: string };
  pricePerUnit: number;
}

interface FormState {
  username:  string;
  location:  string;           // delivery address / city, etc.
  email:     string;
  quantity:  number;
}

export default function CheckoutPage() {
  /* ---------------- State ---------------- */
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [form, setForm] = useState<FormState>({
    username: '',
    location: '',
    email:    '',
    quantity: 1,
  });

  const router = useRouter();

  /* ---------------- Load selected deal ---------------- */
  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      const parsed: CartItem[] = JSON.parse(stored);
      setCartItem(parsed[0]);                // single‑item cart for now
    }
  }, []);

  /* ---------------- Hard‑coded userId (replace later) ---------------- */
  const userId = '64e26d831a5df515f33c4cb9';

  /* ---------------- Submit order ---------------- */
  const handlePlaceOrder = async () => {
    if (!cartItem) {
      alert('No item in cart.');
      return;
    }

    /* Payload names exactly as your backend expects */
    const payload = {
      userId,                          // string
      username: form.username,         // string
      email:    form.email,            // string
      location: form.location,         // string
      itemId:   cartItem._id,          // string (product/deal id)
      quantity: form.quantity,         // number
    };

    try {
      const res = await fetch(
        'https://scale-gold.vercel.app/api/orders',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        alert('✅ Order placed successfully!');
        localStorage.removeItem('cart');
        router.push('/en/thank-you');
      } else {
        alert('❌ Failed to place order. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cartItem ? (
        <>
          {/* Product preview */}
          <div className="border p-4 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-2">{cartItem.title.en}</h2>
            <p>Price: {cartItem.pricePerUnit} / Unit</p>
          </div>

          {/* Customer form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
              className="w-full border rounded p-2"
            />

            <input
              type="text"
              placeholder="Location / Address"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
              className="w-full border rounded p-2"
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border rounded p-2"
            />

            <input
              type="number"
              min={1}
              placeholder="Quantity"
              value={form.quantity}
              onChange={(e) =>
                setForm({ ...form, quantity: parseInt(e.target.value, 10) })
              }
              className="w-full border rounded p-2"
            />

            <button
              onClick={handlePlaceOrder}
              className="bg-[#F05526] text-white px-6 py-3 rounded font-semibold hover:bg-[#d63f1e] transition"
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <p>No item in cart.</p>
      )}
    </div>
  );
}
