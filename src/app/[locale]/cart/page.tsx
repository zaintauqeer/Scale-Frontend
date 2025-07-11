"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations, useLocale } from "next-intl";

interface CartItem {
  _id: string;
  title: { en: string; ar: string }; // ✅ title.ar is required
  pricePerUnit: number;
}

interface FormState {
  username: string;
  location: string;
  email: string;
  contactNumber: string; // Added this
  quantity: number;
}

export default function CartPage() {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [form, setForm] = useState<FormState>({
    username: "",
    location: "",
    email: "",
    contactNumber: "", // added
    quantity: 1,
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const t = useTranslations("checkout");
  const router = useRouter();

  useEffect(() => {
    const storedItem = localStorage.getItem("cart");
    if (storedItem) {
      const parsed = JSON.parse(storedItem);
      setCartItem(parsed[0]);
    }
    const storedForm = localStorage.getItem("cartForm");
    if (storedForm) {
      setForm(JSON.parse(storedForm));
    }
  }, []);

  const handleProceed = () => {
    if (!form.username || !form.location || !form.email || !form.quantity) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem("cartForm", JSON.stringify(form));
    setIsCheckoutOpen(true); // Open sidebar instead of redirecting
  };

  ////

  useEffect(() => {
    const storedItem = localStorage.getItem("cart");
    if (storedItem) {
      const parsed = JSON.parse(storedItem);
      console.log("🧪 Loaded Cart Item:", parsed[0]);
      setCartItem(parsed[0]);
    }
  }, []);

  const handlePlaceOrder = async () => {
    if (!cartItem) {
      alert("No item in cart.");
      return;
    }

    const userId = "64e26d831a5df515f33c4cb9";
    const payload = {
      userId,
      username: form.username,
      email: form.email,
      location: form.location,
      contactNumber: form.contactNumber, // added
      itemId: cartItem._id,
      quantity: form.quantity,
      title_en: cartItem.title.en, // added
      title_ar: cartItem.title.ar, // added
      pricePerUnit: cartItem.pricePerUnit, // added
    };

    try {
      const res = await fetch("https://scale-gold.vercel.app/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("✅ Order placed successfully!");
        localStorage.removeItem("cart");
        setIsCheckoutOpen(false); // Close sidebar
        router.push("/en/deals");
      } else {
        alert("❌ Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, form.quantity + change);
    setForm({ ...form, quantity: newQuantity });
  };

  if (!cartItem) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center text-gray-500">No item in cart.</div>
        <Footer />
      </>
    );
  }

  const total = cartItem.pricePerUnit * form.quantity;

  return (
    <>
      <Navbar />

      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
          🛒  {t("yourCart")}
        </h1>
      </div>

      <div className="max-w-5xl mx-auto p-6 mt-8 mb-12 bg-white border border-gray-200 shadow-lg rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Summary */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-2">
            {t("productSummary")}
            </h2>
            <div className="space-y-4 text-gray-800">
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{t("product")}:</span>
                <span className="text-lg">{cartItem.title.en}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg">{t("pricePerUnit")}:</span>
                <span className="text-lg">{cartItem.pricePerUnit} {t("sar")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-lg"> {t("total")}:</span>
                <span className="text-lg font-semibold text-orange-600">
                  {total} {t("sar")}
                </span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
            {t("customerInformation")}
            </h2>

            <input
              type="text"
              placeholder={t("fName")}
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />

            <input
              type="email"
              placeholder={t("email")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />

            <input
              type="tel"
              placeholder={t("contactNumber")}
              value={form.contactNumber}
              onChange={(e) =>
                setForm({ ...form, contactNumber: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />

            <input
              type="text"
              placeholder={t("address")}
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-10 h-10 bg-gray-200 rounded-full text-xl font-bold text-gray-700 hover:bg-gray-300 transition duration-200"
              >
                -
              </button>
              <span className="text-lg font-semibold">{form.quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-10 h-10 bg-gray-200 rounded-full text-xl font-bold text-gray-700 hover:bg-gray-300 transition duration-200"
              >
                +
              </button>
            </div>

            <input
              type="number"
              min={1}
              placeholder="Quantity"
              value={form.quantity}
              onChange={(e) =>
                setForm({
                  ...form,
                  quantity: parseInt(e.target.value, 10) || 1,
                })
              }
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 hidden"
            />

            <button
              onClick={handleProceed}
              className="w-full bg-[#F15625] hover:bg-[#d64a1d] text-white py-3 rounded-lg font-semibold transition duration-200 shadow-md hover:shadow-lg"
            >
             {t("proceedToCheckout")}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Checkout */}
      {isCheckoutOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div
            className="w-full max-w-md bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isCheckoutOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">{t("checkout")}</h1>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>

              {cartItem ? (
                <>
                  {/* Product preview */}
                  <div className="border border-gray-200 p-6 rounded-lg shadow-md mb-8 bg-white">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                      {cartItem.title.en}
                    </h2>
                    <p className="text-lg text-gray-600">
                    {t("price")} {cartItem.pricePerUnit} / Unit
                    </p>
                  </div>

                  {/* Customer form */}
                  <div className="space-y-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.username}
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F05526] transition duration-200"
                    />

                    <input
                      type="text"
                      placeholder="Location / Address"
                      value={form.location}
                      onChange={(e) =>
                        setForm({ ...form, location: e.target.value })
                      }
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F05526] transition duration-200"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F05526] transition duration-200"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Number (e.g., +966XXXXXXXXX)"
                      value={form.contactNumber}
                      onChange={(e) =>
                        setForm({ ...form, contactNumber: e.target.value })
                      }
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                    />

                    <input
                      type="number"
                      min={1}
                      placeholder="Quantity"
                      value={form.quantity}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          quantity: parseInt(e.target.value, 10),
                        })
                      }
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F05526] transition duration-200"
                    />

                    <button
                      onClick={handlePlaceOrder}
                      className="w-full bg-[#F05526] hover:bg-[#d63f1e] text-white py-3 rounded-lg font-semibold transition duration-200 shadow-md hover:shadow-lg"
                    >
                     {t("placeOrder")}
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-center text-gray-500 text-lg">
                  No item in cart.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
