// // // // import { useEffect, useState } from "react";
// // // // import API from "../services/api";
// // // // import AdminLayout from "../components/AdminLayout";

// // // // export default function Users() {
// // // //   const [users, setUsers] = useState([]);

// // // //   const fetchUsers = async () => {
// // // //     const res = await API.get("/users");
// // // //     setUsers(res.data.data);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchUsers();
// // // //   }, []);

// // // //   const toggleBlock = async (id, current) => {
// // // //     await API.put(`/users/${id}/block`, {
// // // //       isBlocked: !current,
// // // //     });
// // // //     fetchUsers();
// // // //   };

// // // //   return (
// // // //     <AdminLayout>
// // // //       <h1 className="text-2xl mb-4">Users</h1>

// // // //       {users.map((u) => (
// // // //         <div
// // // //           key={u._id}
// // // //           className="bg-white text-black p-4 mb-2 rounded"
// // // //         >
// // // //           <p>{u.name} ({u.email})</p>
// // // //           <p>Role: {u.role}</p>

// // // //           <button
// // // //             onClick={() => toggleBlock(u._id, u.isBlocked)}
// // // //             className="bg-red-500 text-white px-2 py-1 mt-2"
// // // //           >
// // // //             {u.isBlocked ? "Unblock" : "Block"}
// // // //           </button>
// // // //         </div>
// // // //       ))}
// // // //     </AdminLayout>
// // // //   );
// // // // }
// // // import { useEffect, useState } from "react";
// // // import API from "../services/api";
// // // import AdminLayout from "../components/AdminLayout";

// // // export default function Users() {
// // //   const [users, setUsers] = useState([]);
// // //   const [roleFilter, setRoleFilter] = useState(""); // ✅ filter state

// // //   const fetchUsers = async () => {
// // //     const res = await API.get("/users");
// // //     setUsers(res.data.data);
// // //   };

// // //   useEffect(() => {
// // //     fetchUsers();
// // //   }, []);

// // //   const toggleBlock = async (id, current) => {
// // //     await API.put(`/users/${id}/block`, {
// // //       isBlocked: !current,
// // //     });
// // //     fetchUsers();
// // //   };

// // //   // ✅ FILTER LOGIC
// // //   const filteredUsers = users.filter((u) =>
// // //     roleFilter ? u.role === roleFilter : true
// // //   );

// // //   return (
// // //     <AdminLayout>
// // //       <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

// // //       {/* 🔍 FILTER */}
// // //       <div className="mb-4">
// // //         <select
// // //           value={roleFilter}
// // //           onChange={(e) => setRoleFilter(e.target.value)}
// // //           className="p-2 rounded text-black"
// // //         >
// // //           <option value="">All Users</option>
// // //           <option value="ADMIN">Admin</option>
// // //           <option value="CREATOR">Creator</option>
// // //           <option value="INVESTOR">Investor</option>
// // //         </select>
// // //       </div>

// // //       {/* 👇 USERS LIST */}
// // //       {filteredUsers.length > 0 ? (
// // //         filteredUsers.map((u) => (
// // //           <div
// // //             key={u._id}
// // //             className="bg-white text-black p-4 mb-3 rounded-xl shadow"
// // //           >
// // //             <p className="font-semibold">
// // //               {u.name} ({u.email})
// // //             </p>

// // //             <p className="text-sm">
// // //               Role:{" "}
// // //               <span className="font-medium">{u.role}</span>
// // //             </p>

// // //             <p className="text-sm">
// // //               Status:{" "}
// // //               <span
// // //                 className={`font-semibold ${
// // //                   u.isBlocked ? "text-red-600" : "text-green-600"
// // //                 }`}
// // //               >
// // //                 {u.isBlocked ? "Blocked" : "Active"}
// // //               </span>
// // //             </p>

// // //             <button
// // //               onClick={() => toggleBlock(u._id, u.isBlocked)}
// // //               className={`mt-2 px-3 py-1 rounded text-white ${
// // //                 u.isBlocked
// // //                   ? "bg-green-600 hover:bg-green-700"
// // //                   : "bg-red-500 hover:bg-red-600"
// // //               }`}
// // //             >
// // //               {u.isBlocked ? "Unblock" : "Block"}
// // //             </button>
// // //           </div>
// // //         ))
// // //       ) : (
// // //         <p className="text-white">No users found</p>
// // //       )}
// // //     </AdminLayout>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import API from "../services/api";
// // import AdminLayout from "../components/AdminLayout";

// // export default function Users() {
// //   const [users, setUsers] = useState([]);
// //   const [roleFilter, setRoleFilter] = useState("");

// //   const fetchUsers = async () => {
// //     try {
// //       const res = await API.get("/users");
// //       setUsers(res.data.data);
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error fetching users");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   const toggleBlock = async (id, current) => {
// //     try {
// //       await API.put(`/users/${id}/block`); // ✅ no body needed
// //       alert(`User ${current ? "unblocked" : "blocked"} successfully ✅`);
// //       fetchUsers();
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error toggling block");
// //     }
// //   };

// //   const filteredUsers = users.filter((u) =>
// //     roleFilter ? u.role === roleFilter : true
// //   );

// //   return (
// //     <AdminLayout>
// //       <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

// //       {/* FILTER */}
// //       <div className="mb-4">
// //         <select
// //           value={roleFilter}
// //           onChange={(e) => setRoleFilter(e.target.value)}
// //           className="p-2 rounded text-black"
// //         >
// //           <option value="">All Users</option>
// //           <option value="ADMIN">Admin</option>
// //           <option value="CREATOR">Creator</option>
// //           <option value="INVESTOR">Investor</option>
// //         </select>
// //       </div>

// //       {/* USERS LIST */}
// //       {filteredUsers.length > 0 ? (
// //         filteredUsers.map((u) => (
// //           <div
// //             key={u._id}
// //             className="bg-white text-black p-4 mb-3 rounded-xl shadow"
// //           >
// //             <p className="font-semibold">{u.name} ({u.email})</p>
// //             <p className="text-sm">
// //               Role: <span className="font-medium">{u.role}</span>
// //             </p>
// //             <p className="text-sm">
// //               Status:{" "}
// //               <span className={`font-semibold ${u.isBlocked ? "text-red-600" : "text-green-600"}`}>
// //                 {u.isBlocked ? "Blocked" : "Active"}
// //               </span>
// //             </p>

// //             <button
// //               onClick={() => toggleBlock(u._id, u.isBlocked)}
// //               className={`mt-2 px-3 py-1 rounded text-white ${
// //                 u.isBlocked
// //                   ? "bg-green-600 hover:bg-green-700"
// //                   : "bg-red-500 hover:bg-red-600"
// //               }`}
// //             >
// //               {u.isBlocked ? "Unblock" : "Block"}
// //             </button>
// //           </div>
// //         ))
// //       ) : (
// //         <p className="text-white">No users found</p>
// //       )}
// //     </AdminLayout>
// //   );
// // }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [roleFilter, setRoleFilter] = useState("");

//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/users");
//       setUsers(res.data.data);
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error fetching users");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const toggleBlock = async (id) => {
//     try {
//       // 🔹 Only call the endpoint, no body
//       await API.put(`/users/${id}/block`);

//       // 🔹 Update local state immediately
//       setUsers((prev) =>
//         prev.map((u) =>
//           u._id === id ? { ...u, isBlocked: !u.isBlocked } : u
//         )
//       );

//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error toggling block");
//     }
//   };

//   const filteredUsers = users.filter((u) =>
//     roleFilter ? u.role === roleFilter : true
//   );

//   return (
//     <AdminLayout>
//       <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

//       {/* FILTER */}
//       <div className="mb-4">
//         <select
//           value={roleFilter}
//           onChange={(e) => setRoleFilter(e.target.value)}
//           className="p-2 rounded text-black"
//         >
//           <option value="">All Users</option>
//           <option value="ADMIN">Admin</option>
//           <option value="CREATOR">Creator</option>
//           <option value="INVESTOR">Investor</option>
//         </select>
//       </div>

//       {/* USERS LIST */}
//       {filteredUsers.length > 0 ? (
//         filteredUsers.map((u) => (
//           <div
//             key={u._id}
//             className="bg-white text-black p-4 mb-3 rounded-xl shadow"
//           >
//             <p className="font-semibold">{u.name} ({u.email})</p>
//             <p className="text-sm">
//               Role: <span className="font-medium">{u.role}</span>
//             </p>
//             <p className="text-sm">
//               Status:{" "}
//               <span
//                 className={`font-semibold ${
//                   u.isBlocked ? "text-red-600" : "text-green-600"
//                 }`}
//               >
//                 {u.isBlocked ? "Blocked" : "Active"}
//               </span>
//             </p>

//             <button
//               onClick={() => toggleBlock(u._id)}
//               className={`mt-2 px-3 py-1 rounded text-white ${
//                 u.isBlocked
//                   ? "bg-green-600 hover:bg-green-700"
//                   : "bg-red-500 hover:bg-red-600"
//               }`}
//             >
//               {u.isBlocked ? "Unblock" : "Block"}
//             </button>
//           </div>
//         ))
//       ) : (
//         <p className="text-white">No users found</p>
//       )}
//     </AdminLayout>
//   );
// }
import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("");

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users"); // ✅ corrected admin path
      setUsers(res.data.data);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error fetching users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Toggle block/unblock a user
  const toggleBlock = async (id) => {
    try {
      await API.put(`/admin/users/${id}/block`); // ✅ admin route
      // Update local state immediately for UI feedback
      setUsers((prev) =>
        prev.map((u) => (u._id === id ? { ...u, isBlocked: !u.isBlocked } : u))
      );
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error toggling block");
    }
  };

  // Filter users by role
  const filteredUsers = users.filter((u) =>
    roleFilter ? u.role === roleFilter : true
  );

  return (
    <AdminLayout>
      <h1 className="text-2xl mb-4 text-white">Users 👥</h1>

      {/* Role Filter */}
      <div className="mb-4">
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="p-2 rounded text-black"
        >
          <option value="">All Users</option>
          <option value="ADMIN">Admin</option>
          <option value="CREATOR">Creator</option>
          <option value="INVESTOR">Investor</option>
        </select>
      </div>

      {/* Users List */}
      {filteredUsers.length > 0 ? (
        filteredUsers.map((u) => (
          <div
            key={u._id}
            className="bg-white text-black p-4 mb-3 rounded-xl shadow"
          >
            <p className="font-semibold">
              {u.name} ({u.email})
            </p>

            <p className="text-sm">
              Role: <span className="font-medium">{u.role}</span>
            </p>

            <p className="text-sm">
              Status:{" "}
              <span
                className={`font-semibold ${
                  u.isBlocked ? "text-red-600" : "text-green-600"
                }`}
              >
                {u.isBlocked ? "Blocked" : "Active"}
              </span>
            </p>

            <button
              onClick={() => toggleBlock(u._id)}
              className={`mt-2 px-3 py-1 rounded text-white ${
                u.isBlocked
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {u.isBlocked ? "Unblock" : "Block"}
            </button>
          </div>
        ))
      ) : (
        <p className="text-white">No users found</p>
      )}
    </AdminLayout>
  );
}