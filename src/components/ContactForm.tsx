"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const t = useTranslations("contactForm");

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      phone: "",
      message: "",
    };

    // Name validation
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Message validation
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-[Outfit-Bold] rtl:font-sans rtl:font-bold">
          {t("title")}
        </h2>
        <div className="flex lg:flex-nowrap flex-wrap gap-4">
          <div className="lg:w-1/2 w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder={t("placeholder1")}
              onChange={handleChange}
              className={`block w-full rounded-sm p-3 outline-0 bg-[#2222220F]  ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div className="lg:w-1/2 w-full">
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder={t("placeholder2")}
              value={formData.phone}
              onChange={handleChange}
              className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-sm p-3 outline-0 bg-[#2222220F] ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder={t("placeholder3")}
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`block w-full rounded-sm p-3 outline-0 bg-[#2222220F]  ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#f15625] text-white  text-xl  py-5 px-6 rounded-sm"
        >
          {t("sendMessage")}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
