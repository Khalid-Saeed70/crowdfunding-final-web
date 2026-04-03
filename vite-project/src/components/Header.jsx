// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Header = () => {
//   const { user, logout } = useAuth();

//   return (
//     <div className="flex justify-between items-center p-4 bg-black text-white">
//       <h1 className="text-xl font-bold">Crowdfund</h1>

//       <div className="space-x-4 flex items-center">
//         {/* 🌍 Common */}
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>

//         {/* 🧑‍💻 Creator */}
//         {user?.role === "CREATOR" && (
//           <>
//             <Link to="/creator">Dashboard</Link>
//             <Link to="/create">Create</Link>
//           </>
//         )}

//         {/* 💰 Investor */}
//         {user?.role === "INVESTOR" && (
//           <>
//             <Link to="/my-investments">My Investments</Link>
//           </>
//         )}

//         {/* 👑 Admin */}
//         {user?.role === "ADMIN" && (
//           <>
//             <Link to="/admin">Admin Panel</Link>
//           </>
//         )}

//         {/* 🔐 Auth */}
//         {!user ? (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         ) : (
//           <>
//             <span className="text-sm">
//               ({user.role})
//             </span>
//             <button
//               onClick={logout}
//               className="bg-red-500 px-2 py-1 rounded"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Crowdfund</h1>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>

        {user?.role === "CREATOR" && (
          <>
            <Link to="/creator">Dashboard</Link>
            <Link to="/create">Create</Link>
          </>
        )}

        {user?.role === "INVESTOR" && (
          <Link to="/my-investments">My Investment</Link>
        )}

        {user?.role === "ADMIN" && (
          <Link to="/admin">Dashboard</Link>
        )}

        {!user ? (
          <>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-success">Register</Link>
          </>
        ) : (
          <>
            <span className="text-sm text-gray-500">
              {user.role}
            </span>
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
