// // // // const Contact = () => {
// // // //   return (
// // // //     <div className="p-6">
// // // //       <h1 className="text-2xl font-bold">Contact Us</h1>
// // // //       <p>Email: support@crowdfund.com</p>
// // // //       <p>Phone: +91 9876543210</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Contact;
// // import { Mail, Phone, MapPin } from "lucide-react";

// // const Contact = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// //       <div className="max-w-6xl mx-auto px-6 py-12">
        
// //         {/* Heading */}
// //         <div className="text-center mb-10">
// //           <h1 className="text-4xl font-bold">Contact Us</h1>
// //           <p className="text-blue-200 mt-2">
// //             We’d love to hear from you. Get in touch with us anytime!
// //           </p>
// //         </div>

// //         {/* Main Section */}
// //         <div className="grid md:grid-cols-2 gap-8">
          
// //           {/* Contact Info */}
// //           <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 space-y-4">
// //             <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>

// //             <div className="flex items-center gap-3">
// //               <Mail className="text-blue-600" />
// //               <span>support@crowdfund.com</span>
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <Phone className="text-blue-600" />
// //               <span>+91 9876543210</span>
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <MapPin className="text-blue-600" />
// //               <span>123 Innovation Street, Kanpur, India</span>
// //             </div>

// //             <p className="text-gray-600 text-sm mt-4">
// //               Our team is available Monday to Saturday, 9 AM – 6 PM.
// //             </p>
// //           </div>

// //           {/* Contact Form */}
// //           <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6">
// //             <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

// //             <form className="space-y-4">
// //               <input
// //                 type="text"
// //                 placeholder="Your Name"
// //                 className="w-full p-3 rounded-xl bg-gray-100 outline-none"
// //               />

// //               <input
// //                 type="email"
// //                 placeholder="Your Email"
// //                 className="w-full p-3 rounded-xl bg-gray-100 outline-none"
// //               />

// //               <textarea
// //                 placeholder="Your Message"
// //                 rows="4"
// //                 className="w-full p-3 rounded-xl bg-gray-100 outline-none"
// //               ></textarea>

// //               <button
// //                 type="submit"
// //                 className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
// //               >
// //                 Send Message
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Extra Section */}
// //         <div className="mt-12 bg-white/90 text-black rounded-3xl p-8 shadow-xl text-center">
// //           <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
// //           <p className="text-gray-600">
// //             Visit our Help Center or reach out to our support team for quick assistance.
// //           </p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // 🔹 Contact Cards Data
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      text: "support@crowdfund.com",
      link: "mailto:support@crowdfund.com",
      color: "text-red-500",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "+91 9876543210",
      link: "tel:+919876543210",
      color: "text-green-600",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      text: "Chat with us",
      link: "https://wa.me/919876543210",
      color: "text-green-500",
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      text: "@crowdfund",
      link: "#",
      color: "text-blue-600",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      text: "@crowdfund_app",
      link: "#",
      color: "text-pink-500",
    },
  ];

  // 🔹 Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 🔹 Send Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",     // 👈 replace
        "YOUR_TEMPLATE_ID",    // 👈 replace
        form,
        "YOUR_PUBLIC_KEY"      // 👈 replace
      )
      .then(() => {
        alert("Message sent ✅");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed ❌");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* 🔷 Heading */}
        <h1 className="text-4xl font-bold mb-3 tracking-wide">
          Contact Us
        </h1>
        <p className="text-blue-200 mb-10 text-sm md:text-base">
          We’d love to hear from you! Reach out for support, queries or project verification.
        </p>

        {/* 📦 Contact Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black rounded-2xl p-6 shadow-xl 
              hover:scale-105 hover:shadow-2xl transition duration-300 
              flex flex-col items-center group"
            >
              <div
                className={`text-3xl mb-3 ${item.color} group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.text}
              </p>
            </a>
          ))}
        </div>

        {/* ✉️ Send Message Form */}
        <div className="bg-white text-black rounded-3xl p-8 shadow-xl max-w-xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-4">Send Message</h2>

          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-gray-100 outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-gray-100 outline-none"
              required
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-gray-100 outline-none"
              rows="4"
              required
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* 💬 Extra Section */}
        <div className="mt-14 bg-white text-black rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2">
            Need Help?
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            If you want to verify any project or need help, feel free to contact us anytime.
          </p>
        </div>

      </div>
    </div>
  );
}