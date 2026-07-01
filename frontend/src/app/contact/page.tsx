"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Youtube, Instagram, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initialForm: ContactFormState = { name: "", phone: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        submittedAt: serverTimestamp(),
      });
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again.");
    }
  };

  return (

     <>
        <div className="text-left px-14 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-darkblue mb-4">
            Contact Us
          </h1>
        </div>
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center py-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3174')",
      }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via transparent to-black/30" />

      <div className="container mx-auto px-6 relative z-10">
       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-10 text-center text-white">
                <CheckCircle2 className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message sent</h3>
                <p className="text-sm text-gray-200 mb-6">
                  Thanks for reaching out — our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-transparent rounded-2xl border border-white/20">
                <div className="space-y-6">
                  {status === "error" && errorMessage && (
                    <div className="bg-red-500/20 border border-red-400/50 text-red-100 text-sm rounded-lg px-4 py-3">
                      {errorMessage}
                    </div>
                  )}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Contact Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      "SENDING..."
                    ) : (
                      <>
                        SEND MESSAGE <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500 text-center ">
              For Booking & Inquiries
            </h2>

            <div className="space-y-6">
              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Call Us
                </h3>
                <p className="text-sm mt-1">(+91) 9990907208</p>
                <p className="text-sm">(+91) 9990907508</p>
              </div>

              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Email Us
                </h3>
                <p className="text-sm mt-1">info@gobibtravels.com</p>
              </div>

              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  Location
                </h3>
                <div className="mt-2">
                  <p className="font-medium text-sm">Office</p>
                  <p className="text-xs mt-1">
                    416,417 Spaze Boulevard, Sohna road,<br />
                    Sector-47, Gurugram<br />
                    Haryana - 122018.<br />
                    <span className="text-orange-400">Open 10AM – 6PM</span>
                  </p>
                </div>
              </div>

              
              <div>
                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition text-sm font-bold"> <Facebook className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition text-sm font-bold"> <Instagram className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition text-sm"> <Twitter className="w-5 h-5" /></a>
                  <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition text-sm"><Youtube className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
