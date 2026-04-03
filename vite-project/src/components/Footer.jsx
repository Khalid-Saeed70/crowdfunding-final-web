// // const Footer = () => {
// //   return (
// //     <div className="bg-white border-t mt-10 p-4 text-center text-gray-500">
// //       <p>© 2026 Crowdfunding Platform</p>
// //       <p>Email: support@crowdfund.com</p>
// //     </div>
// //   );
// // };

// // export default Footer;
// // import { Mail, Phone } from "lucide-react";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white mt-10">
// //       <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
// //         {/* Logo / About */}
// //         <div>
// //           <h2 className="text-xl font-bold mb-2">CrowdFund</h2>
// //           <p className="text-blue-200 text-sm">
// //             Empowering creators to bring ideas to life and connecting them with supporters worldwide.
// //           </p>
// //         </div>

// //         {/* Links */}
// //         <div>
// //           <h3 className="font-semibold mb-2">Quick Links</h3>
// //           <ul className="space-y-1 text-blue-200 text-sm">
// //             <li className="hover:text-white cursor-pointer">Home</li>
// //             <li className="hover:text-white cursor-pointer">About</li>
// //             <li className="hover:text-white cursor-pointer">Contact</li>
// //           </ul>
// //         </div>

// //         {/* Contact */}
// //         <div>
// //           <h3 className="font-semibold mb-2">Contact</h3>

// //           <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
// //             <Mail size={16} />
// //             <span>support@crowdfund.com</span>
// //           </div>

// //           <div className="flex items-center gap-2 text-blue-200 text-sm">
// //             <Phone size={16} />
// //             <span>+91 9876543210</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom */}
// //       <div className="border-t border-white/20 text-center py-4 text-sm text-blue-200">
// //         © 2026 CrowdFund. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // }
// import { Mail, Phone, Twitter, Linkedin, Instagram, Camera } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white mt-10">
//       <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

//         {/* Logo / About */}
//         <div>
//           <h2 className="text-xl font-bold mb-2">CrowdFund</h2>
//           <p className="text-blue-200 text-sm">
//             Empowering creators to bring ideas to life and connecting them with supporters worldwide.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-semibold mb-2">Quick Links</h3>
//           <ul className="space-y-1 text-blue-200 text-sm">
//             <li>
//               <Link to="/" className="hover:text-white">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-white">About</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-white">Contact</Link>
//             </li>
//             {/* <li>
//               <Link to="/faq" className="hover:text-white">FAQ</Link>
//             </li> */}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="font-semibold mb-2">Contact</h3>
//           <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
//             <Mail size={16} />
//             <a href="mailto:support@crowdfund.com" className="hover:text-white">support@crowdfund.com</a>
//           </div>
//           <div className="flex items-center gap-2 text-blue-200 text-sm mb-2">
//             <Phone size={16} />
//             <a href="tel:+919876543210" className="hover:text-white">+91 9876543210</a>
//           </div>

//           {/* Address */}
//           <p className="text-blue-200 text-sm">
//             123 Innovation Street, Kanpur, India
//           </p>

//           {/* Social Media */}
//           <div className="flex gap-3 mt-2">
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <Twitter size={18} className="hover:text-white" />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <Linkedin size={18} className="hover:text-white" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               < size={18} className="hover:text-white" />
//             </a>
//           </div>
//         </div>

//         {/* Newsletter / Legal */}
//         <div>
//           <h3 className="font-semibold mb-2">Stay Updated</h3>
//           <p className="text-blue-200 text-sm mb-2">Subscribe to our newsletter</p>
//           <form className="flex gap-2">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="p-2 rounded w-full text-black"
//             />
//             <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Subscribe</button>
//           </form>

//           {/* Legal Links */}
//           <div className="mt-4 text-blue-200 text-sm space-y-1">
//             <Link to="/privacy" className="hover:text-white block">Privacy Policy</Link>
//             <Link to="/terms" className="hover:text-white block">Terms of Service</Link>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-white/20 text-center py-4 text-sm text-blue-200">
//         © 2026 CrowdFund. All rights reserved.
//       </div>
//     </footer>
//   );
// }
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold mb-2">CrowdFund</h2>
          <p className="text-blue-200 text-sm">
            Empowering creators to bring ideas to life and connecting them with supporters worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-blue-200 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            {/* <li><Link to="/faq" className="hover:text-white">FAQ</Link></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-1">
            <Mail size={16} />
            <a href="mailto:support@crowdfund.com" className="hover:text-white">support@crowdfund.com</a>
          </div>
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-2">
            <Phone size={16} />
            <a href="tel:+919876543210" className="hover:text-white">+91 9876543210</a>
          </div>
          <p className="text-blue-200 text-sm mb-2">
            123 Innovation Street, Kanpur, India
          </p>

          {/* Social Media Icons (SVG) */}
          <div className="flex gap-3 mt-2">
            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="hover:text-white">
                <path d="M24 4.56c-.89.39-1.85.65-2.85.77a4.96 4.96 0 0 0 2.17-2.73 9.92 9.92 0 0 1-3.14 1.2 4.92 4.92 0 0 0-8.39 4.48 13.96 13.96 0 0 1-10.15-5.15 4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.93 4.93 0 0 0 3.95 4.83 4.92 4.92 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 19.54a13.88 13.88 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64a9.94 9.94 0 0 0 2.46-2.55z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="hover:text-white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.061-1.865-3.061-1.867 0-2.153 1.459-2.153 2.967v5.698h-3v-10h2.885v1.367h.041c.402-.761 1.384-1.561 2.847-1.561 3.043 0 3.606 2.002 3.606 4.604v5.59z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="hover:text-white">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.3 1 .6 1.4 1.1.4.4.7.9 1 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.6-.6 1-1.1 1.4-.4.4-.9.7-1.4 1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.3-1-.6-1.4-1-.4-.4-.7-.9-1-1.4-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.6.6-1 1.1-1.4.4-.4.9-.7 1.4-1 .4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.4 4 .7c-.9.3-1.7.8-2.4 1.5-.7.7-1.2 1.5-1.5 2.4-.3.8-.5 1.7-.6 3C0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 5 .1 1.3.3 2.2.6 3 .3.9.8 1.7 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6.9-.3 1.7-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3-.3-.9-.8-1.7-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0z"/>
                <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                <circle cx="18.4" cy="5.6" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter / Legal */}
        <div>
          {/* <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-blue-200 text-sm mb-2">Subscribe to our newsletter</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded w-full text-black"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Subscribe</button>
          </form> */}

          {/* Legal Links */}
          <div className="mt-4 text-blue-200 text-sm space-y-1">
            <Link to="/privacy" className="hover:text-white block">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white block">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-blue-200">
        © 2026 CrowdFund. All rights reserved.
      </div>
    </footer>
  );
}