// import { Link, useLocation } from "react-router-dom";

// export default function AdminLayout({ children }) {
//   const { pathname } = useLocation();

//   const linkClass = (path) =>
//     `block px-3 py-2 rounded ${
//       pathname === path
//         ? "bg-white text-black"
//         : "hover:bg-white/20"
//     }`;

//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">

//       {/* Sidebar */}
//       <div className="w-64 p-5 space-y-4">
//         <h2 className="text-xl font-bold">Admin Panel 👑</h2>

//         <Link to="/admin" className={linkClass("/admin")}>
//           Dashboard
//         </Link>

//         <Link to="/users" className={linkClass("/users")}>
//           Users
//         </Link>

//         <Link to="/projects" className={linkClass("/projects")}>
//           Projects
//         </Link>
//       </div>

//       {/* Content */}
//       <div className="flex-1 p-6">
//         {children}
//       </div>

//     </div>
//   );
// }
import { Link, useLocation } from "react-router-dom";

export default function AdminLayout({ children }) {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-white text-black font-semibold"
        : "hover:bg-white/20"
    }`;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">

      {/* Sidebar */}
      <div className="w-64 p-6 space-y-4 border-r border-white/10">
        <h2 className="text-2xl font-bold mb-6">Admin </h2>

        <Link to="/admin" className={linkClass("/admin")}>
          Dashboard
        </Link>

        <Link to="/users" className={linkClass("/users")}>
          Users
        </Link>

        <Link to="/projects" className={linkClass("/projects")}>
          Projects
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}