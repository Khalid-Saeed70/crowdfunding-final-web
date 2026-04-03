// const About = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">About Us</h1>
//       <p>
//         This is a crowdfunding platform where creators can raise funds
//         and investors can support innovative ideas.
//       </p>
//     </div>
//   );
// };

// export default About;
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">About CrowdFund</h1>
          <p className="text-blue-200 mt-2">
            Empowering ideas. Connecting creators with supporters.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Mission */}
          <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To help creators turn their ideas into reality by connecting them
              with people who believe in innovation.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              Building a global platform where anyone can raise funds and make
              a difference through community support.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white/95 text-black rounded-3xl shadow-xl p-6 hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">What We Do</h2>
            <p className="text-gray-600">
              We provide a secure and user-friendly platform for crowdfunding,
              helping investors discover and support innovative projects.
            </p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-12 bg-white/90 text-black rounded-3xl p-8 shadow-xl hover:scale-[1.02] transition">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Secure and trusted platform</li>
            <li>✔ Easy project creation</li>
            <li>✔ Transparent funding process</li>
            <li>✔ Strong community support</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;