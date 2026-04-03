// // // // // // import { useEffect, useState } from "react";
// // // // // // import API from "../services/api";

// // // // // // const AdminDashboard = () => {
// // // // // //   const [stats, setStats] = useState({});
// // // // // //   const [projects, setProjects] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     fetchStats();
// // // // // //     fetchProjects();
// // // // // //   }, []);

// // // // // //   // 📊 Dashboard Stats
// // // // // //   const fetchStats = async () => {
// // // // // //     try {
// // // // // //       const res = await API.get("/admin/dashboard");
// // // // // //       setStats(res.data.data);
// // // // // //     } catch (err) {
// // // // // //       console.log(err);
// // // // // //     }
// // // // // //   };

// // // // // //   // 📁 All Projects
// // // // // //   const fetchProjects = async () => {
// // // // // //     try {
// // // // // //       const res = await API.get("/admin/projects");
// // // // // //       setProjects(res.data.data);
// // // // // //     } catch (err) {
// // // // // //       console.log(err);
// // // // // //     }
// // // // // //   };

// // // // // //   // ✅ Approve Project
// // // // // //   const handleApprove = async (id) => {
// // // // // //     try {
// // // // // //       await API.put(`/admin/projects/${id}/status`, {
// // // // // //         status: "ACTIVE",
// // // // // //       });

// // // // // //       alert("Project Approved");
// // // // // //       fetchProjects();
// // // // // //     } catch (err) {
// // // // // //       alert("Error");
// // // // // //     }
// // // // // //   };

// // // // // //   // ❌ Reject Project
// // // // // //   const handleReject = async (id) => {
// // // // // //     try {
// // // // // //       await API.put(`/admin/projects/${id}/status`, {
// // // // // //         status: "FAILED",
// // // // // //       });

// // // // // //       alert("Project Rejected");
// // // // // //       fetchProjects();
// // // // // //     } catch (err) {
// // // // // //       alert("Error");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

// // // // // //       {/* 📊 Stats */}
// // // // // //       <div className="grid grid-cols-4 gap-4 mb-6">
// // // // // //         <div className="border p-4">Users: {stats.totalUsers}</div>
// // // // // //         <div className="border p-4">Projects: {stats.totalProjects}</div>
// // // // // //         <div className="border p-4">Active: {stats.activeProjects}</div>
// // // // // //         <div className="border p-4">
// // // // // //           Fund: ₹{stats.totalFundRaised}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* 📁 Projects */}
// // // // // //       <h2 className="text-xl mb-2">All Projects</h2>

// // // // // //       {projects.map((p) => (
// // // // // //         <div key={p._id} className="border p-3 mb-3">
// // // // // //           <h3 className="font-bold">{p.title}</h3>
// // // // // //           <p>Status: {p.status}</p>
// // // // // //           <p>Creator: {p.creatorId?.name}</p>

// // // // // //           <div className="mt-2 space-x-2">
// // // // // //             <button
// // // // // //               onClick={() => handleApprove(p._id)}
// // // // // //               className="bg-green-500 text-white px-2 py-1"
// // // // // //             >
// // // // // //               Approve
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={() => handleReject(p._id)}
// // // // // //               className="bg-red-500 text-white px-2 py-1"
// // // // // //             >
// // // // // //               Reject
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AdminDashboard;
// // // // // import { useEffect, useState } from "react";
// // // // // import API from "../services/api";

// // // // // export default function AdminDashboard() {
// // // // //   const [stats, setStats] = useState({});
// // // // //   const [projects, setProjects] = useState([]);

// // // // //   useEffect(() => {
// // // // //     fetchStats();
// // // // //     fetchProjects();
// // // // //   }, []);

// // // // //   const fetchStats = async () => {
// // // // //     try {
// // // // //       const res = await API.get("/admin/dashboard");
// // // // //       setStats(res.data.data || {});
// // // // //     } catch (err) {
// // // // //       console.log(err);
// // // // //     }
// // // // //   };

// // // // //   const fetchProjects = async () => {
// // // // //     try {
// // // // //       const res = await API.get("/admin/projects");
// // // // //       setProjects(res.data.data || []);
// // // // //     } catch (err) {
// // // // //       console.log(err);
// // // // //     }
// // // // //   };

// // // // //   const handleApprove = async (id) => {
// // // // //     try {
// // // // //       await API.put(`/admin/projects/${id}/status`, {
// // // // //         status: "ACTIVE",
// // // // //       });
// // // // //       fetchProjects();
// // // // //     } catch {
// // // // //       alert("Error");
// // // // //     }
// // // // //   };

// // // // //   const handleReject = async (id) => {
// // // // //     try {
// // // // //       await API.put(`/admin/projects/${id}/status`, {
// // // // //         status: "FAILED",
// // // // //       });
// // // // //       fetchProjects();
// // // // //     } catch {
// // // // //       alert("Error");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// // // // //       <div className="max-w-7xl mx-auto px-6 py-10">

// // // // //         {/* Header */}
// // // // //         <div className="mb-8">
// // // // //           <h1 className="text-3xl font-bold">Admin Dashboard 👑</h1>
// // // // //           <p className="text-blue-200">
// // // // //             Manage users, projects and platform activity
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Stats */}
// // // // //         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
// // // // //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// // // // //             <p className="text-sm text-gray-500">Users</p>
// // // // //             <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
// // // // //           </div>

// // // // //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// // // // //             <p className="text-sm text-gray-500">Projects</p>
// // // // //             <h2 className="text-2xl font-bold">{stats.totalProjects || 0}</h2>
// // // // //           </div>

// // // // //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// // // // //             <p className="text-sm text-gray-500">Active</p>
// // // // //             <h2 className="text-2xl font-bold">{stats.activeProjects || 0}</h2>
// // // // //           </div>

// // // // //           <div className="bg-white/95 text-black rounded-2xl p-5 shadow-lg">
// // // // //             <p className="text-sm text-gray-500">Total Fund</p>
// // // // //             <h2 className="text-2xl font-bold">
// // // // //               ₹{stats.totalFundRaised || 0}
// // // // //             </h2>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Projects */}
// // // // //         <div>
// // // // //           <h2 className="text-xl font-semibold mb-4">
// // // // //             All Projects 📁
// // // // //           </h2>

// // // // //           <div className="space-y-4">
// // // // //             {projects.length > 0 ? (
// // // // //               projects.map((p) => (
// // // // //                 <div
// // // // //                   key={p._id}
// // // // //                   className="bg-white/95 text-black rounded-2xl shadow-lg p-5 hover:scale-[1.01] transition"
// // // // //                 >
// // // // //                   <div className="flex justify-between items-center">
                    
// // // // //                     <div>
// // // // //                       <h3 className="text-lg font-semibold">
// // // // //                         {p.title}
// // // // //                       </h3>
// // // // //                       <p className="text-sm text-gray-600">
// // // // //                         Creator: {p.creatorId?.name || "Unknown"}
// // // // //                       </p>
// // // // //                       <p className="text-sm mt-1">
// // // // //                         Status:{" "}
// // // // //                         <span
// // // // //                           className={`font-semibold ${
// // // // //                             p.status === "ACTIVE"
// // // // //                               ? "text-green-600"
// // // // //                               : p.status === "PENDING"
// // // // //                               ? "text-yellow-600"
// // // // //                               : "text-red-600"
// // // // //                           }`}
// // // // //                         >
// // // // //                           {p.status}
// // // // //                         </span>
// // // // //                       </p>
// // // // //                     </div>

// // // // //                     {/* Buttons */}
// // // // //                     <div className="flex gap-2">
// // // // //                       <button
// // // // //                         onClick={() => handleApprove(p._id)}
// // // // //                         className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
// // // // //                       >
// // // // //                         Approve
// // // // //                       </button>

// // // // //                       <button
// // // // //                         onClick={() => handleReject(p._id)}
// // // // //                         className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
// // // // //                       >
// // // // //                         Reject
// // // // //                       </button>
// // // // //                     </div>

// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))
// // // // //             ) : (
// // // // //               <p className="text-blue-200">No projects found</p>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useEffect, useState } from "react";
// // // // import API from "../services/api";

// // // // export default function AdminDashboard() {
// // // //   const [stats, setStats] = useState({});
// // // //   const [projects, setProjects] = useState([]);
// // // //   const [users, setUsers] = useState([]);
// // // //   const [selectedInvestments, setSelectedInvestments] = useState([]);

// // // //   const [showUsers, setShowUsers] = useState(false);
// // // //   const [showInvestments, setShowInvestments] = useState(false);

// // // //   const [search, setSearch] = useState("");

// // // //   useEffect(() => {
// // // //     fetchStats();
// // // //     fetchProjects();
// // // //   }, []);

// // // //   // 📊 Stats
// // // //   const fetchStats = async () => {
// // // //     const res = await API.get("/admin/dashboard");
// // // //     setStats(res.data.data || {});
// // // //   };

// // // //   // 📁 Projects
// // // //   const fetchProjects = async () => {
// // // //     const res = await API.get("/admin/projects");
// // // //     setProjects(res.data.data || []);
// // // //   };

// // // //   // 👤 Users
// // // //   const fetchUsers = async () => {
// // // //     const res = await API.get("/admin/users");
// // // //     setUsers(res.data.data || []);
// // // //     setShowUsers(true);
// // // //   };

// // // //   // 💰 Investments
// // // //   const fetchInvestments = async (projectId) => {
// // // //     const res = await API.get(`/admin/investments/${projectId}`);
// // // //     setSelectedInvestments(res.data.data || []);
// // // //     setShowInvestments(true);
// // // //   };

// // // //   // ✅ Approve
// // // //   const handleApprove = async (id) => {
// // // //     if (!window.confirm("Approve this project?")) return;

// // // //     await API.put(`/admin/projects/${id}/status`, {
// // // //       status: "ACTIVE",
// // // //     });

// // // //     alert("✅ Project Approved");
// // // //     fetchProjects();
// // // //   };

// // // //   // ❌ Reject
// // // //   const handleReject = async (id) => {
// // // //     if (!window.confirm("Reject this project?")) return;

// // // //     await API.put(`/admin/projects/${id}/status`, {
// // // //       status: "FAILED",
// // // //     });

// // // //     alert("❌ Project Rejected");
// // // //     fetchProjects();
// // // //   };

// // // //   // 🚫 Block User
// // // //   const toggleBlock = async (id, current) => {
// // // //     await API.put(`/admin/users/${id}/block`, {
// // // //       isBlocked: !current,
// // // //     });

// // // //     fetchUsers();
// // // //   };

// // // //   // 🔍 Filter
// // // //   const filteredProjects = projects.filter((p) =>
// // // //     p.title.toLowerCase().includes(search.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// // // //       <div className="max-w-7xl mx-auto px-6 py-10">

// // // //         {/* HEADER */}
// // // //         <h1 className="text-3xl font-bold mb-6">Admin Dashboard 👑</h1>

// // // //         {/* 📊 STATS */}
// // // //         <div className="grid md:grid-cols-4 gap-6 mb-10">

// // // //           <div
// // // //             onClick={fetchUsers}
// // // //             className="bg-white text-black p-5 rounded-xl cursor-pointer"
// // // //           >
// // // //             <p>Users</p>
// // // //             <h2 className="text-2xl font-bold">{stats.totalUsers}</h2>
// // // //           </div>

// // // //           <div className="bg-white text-black p-5 rounded-xl">
// // // //             <p>Projects</p>
// // // //             <h2 className="text-2xl font-bold">{stats.totalProjects}</h2>
// // // //           </div>

// // // //           <div className="bg-white text-black p-5 rounded-xl">
// // // //             <p>Active</p>
// // // //             <h2 className="text-2xl font-bold">{stats.activeProjects}</h2>
// // // //           </div>

// // // //           <div className="bg-white text-black p-5 rounded-xl">
// // // //             <p>Fund</p>
// // // //             <h2 className="text-2xl font-bold">
// // // //               ₹{stats.totalFundRaised}
// // // //             </h2>
// // // //           </div>
// // // //         </div>

// // // //         {/* 🔍 SEARCH */}
// // // //         <input
// // // //           placeholder="Search project..."
// // // //           className="p-2 mb-6 rounded text-black w-full"
// // // //           onChange={(e) => setSearch(e.target.value)}
// // // //         />

// // // //         {/* 📁 PROJECTS */}
// // // //         <div className="space-y-4">
// // // //           {filteredProjects.map((p) => (
// // // //             <div
// // // //               key={p._id}
// // // //               className="bg-white text-black p-5 rounded-xl shadow"
// // // //             >
// // // //               <h2 className="font-bold text-lg">{p.title}</h2>
// // // //               <p>Creator: {p.creatorId?.name}</p>
// // // //               <p>Status: {p.status}</p>

// // // //               <div className="flex gap-2 mt-3 flex-wrap">

// // // //                 <button
// // // //                   onClick={() => handleApprove(p._id)}
// // // //                   className="bg-green-600 text-white px-3 py-1 rounded"
// // // //                 >
// // // //                   Approve
// // // //                 </button>

// // // //                 <button
// // // //                   onClick={() => handleReject(p._id)}
// // // //                   className="bg-red-600 text-white px-3 py-1 rounded"
// // // //                 >
// // // //                   Reject
// // // //                 </button>

// // // //                 <button
// // // //                   onClick={() => fetchInvestments(p._id)}
// // // //                   className="bg-blue-600 text-white px-3 py-1 rounded"
// // // //                 >
// // // //                   View Investments
// // // //                 </button>

// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* 👤 USERS MODAL */}
// // // //         {showUsers && (
// // // //           <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
// // // //             <div className="bg-white text-black p-6 rounded w-[600px] max-h-[80vh] overflow-auto">
// // // //               <h2 className="text-xl mb-4">All Users</h2>

// // // //               {users.map((u) => (
// // // //                 <div key={u._id} className="border p-2 mb-2">
// // // //                   <p>{u.name} ({u.email})</p>
// // // //                   <p>Role: {u.role}</p>

// // // //                   <button
// // // //                     onClick={() => toggleBlock(u._id, u.isBlocked)}
// // // //                     className="bg-red-500 text-white px-2 py-1 mt-1"
// // // //                   >
// // // //                     {u.isBlocked ? "Unblock" : "Block"}
// // // //                   </button>
// // // //                 </div>
// // // //               ))}

// // // //               <button
// // // //                 onClick={() => setShowUsers(false)}
// // // //                 className="mt-3 bg-gray-800 text-white px-3 py-1"
// // // //               >
// // // //                 Close
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* 💰 INVESTMENTS MODAL */}
// // // //         {showInvestments && (
// // // //           <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
// // // //             <div className="bg-white text-black p-6 rounded w-[600px] max-h-[80vh] overflow-auto">
// // // //               <h2 className="text-xl mb-4">Investments</h2>

// // // //               {selectedInvestments.map((inv) => (
// // // //                 <div key={inv._id} className="border p-2 mb-2">
// // // //                   <p>Name: {inv.investorId?.name}</p>
// // // //                   <p>Email: {inv.investorId?.email}</p>
// // // //                   <p>Amount: ₹{inv.amount}</p>
// // // //                 </div>
// // // //               ))}

// // // //               <button
// // // //                 onClick={() => setShowInvestments(false)}
// // // //                 className="mt-3 bg-gray-800 text-white px-3 py-1"
// // // //               >
// // // //                 Close
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useEffect, useState } from "react";
// // // import API from "../services/api";
// // // import AdminLayout from "../components/AdminLayout";
// // // import AdminCharts from "../components/AdminCharts";

// // // export default function AdminDashboard() {
// // //   const [stats, setStats] = useState({});
// // //   const [projects, setProjects] = useState([]);

// // //   useEffect(() => {
// // //     fetchStats();
// // //     fetchProjects();
// // //   }, []);

// // //   const fetchStats = async () => {
// // //     const res = await API.get("/admin/dashboard");
// // //     setStats(res.data.data || {});
// // //   };

// // //   const fetchProjects = async () => {
// // //     const res = await API.get("/admin/projects");
// // //     setProjects(res.data.data || []);
// // //   };

// // //   const handleApprove = async (id) => {
// // //     if (!window.confirm("Approve project?")) return;

// // //     await API.put(`/admin/projects/${id}/status`, {
// // //       status: "ACTIVE",
// // //     });

// // //     alert("Approved");
// // //     fetchProjects();
// // //   };

// // //   const handleReject = async (id) => {
// // //     if (!window.confirm("Reject project?")) return;

// // //     await API.put(`/admin/projects/${id}/status`, {
// // //       status: "FAILED",
// // //     });

// // //     alert("Rejected");
// // //     fetchProjects();
// // //   };

// // //   return (
// // //     <AdminLayout>

// // //       <h1 className="text-2xl font-bold mb-6">
// // //         Dashboard 👑
// // //       </h1>

// // //       {/* Stats Cards */}
// // //       <div className="grid md:grid-cols-4 gap-4 mb-6">
// // //         <div className="bg-white p-4 rounded shadow">
// // //           Users: {stats.totalUsers}
// // //         </div>
// // //         <div className="bg-white p-4 rounded shadow">
// // //           Projects: {stats.totalProjects}
// // //         </div>
// // //         <div className="bg-white p-4 rounded shadow">
// // //           Active: {stats.activeProjects}
// // //         </div>
// // //         <div className="bg-white p-4 rounded shadow">
// // //           ₹{stats.totalFundRaised}
// // //         </div>
// // //       </div>

// // //       {/* 📊 Charts */}
// // //       <AdminCharts stats={stats} />

// // //       {/* Projects */}
// // //       <h2 className="text-xl mt-8 mb-3">Projects</h2>

// // //       {projects.map((p) => (
// // //         <div
// // //           key={p._id}
// // //           className="bg-white p-4 rounded shadow mb-3"
// // //         >
// // //           <h3 className="font-bold">{p.title}</h3>
// // //           <p>Status: {p.status}</p>

// // //           <div className="mt-2 space-x-2">
// // //             <button
// // //               onClick={() => handleApprove(p._id)}
// // //               className="bg-green-600 text-white px-2 py-1"
// // //             >
// // //               Approve
// // //             </button>

// // //             <button
// // //               onClick={() => handleReject(p._id)}
// // //               className="bg-red-600 text-white px-2 py-1"
// // //             >
// // //               Reject
// // //             </button>
// // //           </div>
// // //         </div>
// // //       ))}

// // //     </AdminLayout>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import API from "../services/api";
// // import AdminLayout from "../components/AdminLayout";
// // import AdminCharts from "../components/AdminCharts";

// // export default function Dashboard() {
// //   const [stats, setStats] = useState({});
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     API.get("/admin/dashboard").then((res) =>
// //       setStats(res.data.data)
// //     );
// //   }, []);

// //   return (
// //     <AdminLayout>

// //       <h1 className="text-3xl mb-6 font-bold">Dashboard</h1>

// //       {/* CLICKABLE CARDS */}
// //       <div className="grid md:grid-cols-4 gap-4 mb-6">

// //         <div
// //           onClick={() => navigate("/admin/users")}
// //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// //         >
// //           Users: {stats.totalUsers}
// //         </div>

// //         <div
// //           onClick={() => navigate("/admin/projects?status=ACTIVE")}
// //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// //         >
// //           Active: {stats.activeProjects}
// //         </div>

// //         <div
// //           onClick={() => navigate("/admin/projects?status=DRAFT")}
// //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// //         >
// //           Draft Projects
// //         </div>

// //         <div
// //           onClick={() => navigate("/admin/projects?status=FAILED")}
// //           className="bg-white/90 text-black p-4 rounded cursor-pointer"
// //         >
// //           Cancelled
// //         </div>

// //       </div>

// //       <AdminCharts stats={stats} />

// //     </AdminLayout>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";
// import AdminCharts from "../components/AdminCharts";

// export default function Dashboard() {
//   const [stats, setStats] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/admin/dashboard").then((res) =>
//       setStats(res.data.data)
//     );
//   }, []);

//   return (
//     <AdminLayout>
//       <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

//       <div className="grid md:grid-cols-4 gap-6 mb-8">

//         <div
//           onClick={() => navigate("/users")}
//           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
//         >
//           <p className="text-sm text-gray-500">Users</p>
//           <h2 className="text-2xl font-bold">{stats.totalUsers || 0}</h2>
//         </div>

//         <div
//           onClick={() => navigate("/projects?status=ACTIVE")}
//           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer"
//         >
//           Active: {stats.activeProjects || 0}
//         </div>

//         <div
//           onClick={() => navigate("/projects?status=DRAFT")}
//           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer"
//         >
//           Draft : {stats.draftProjects || 0}
//         </div>

//         <div
//           onClick={() => navigate("/projects?status=FAILED")}
//           className="bg-white/95 text-black p-5 rounded-xl cursor-pointer"
//         >
//           Cancelled :{stats.cancelledProjects || 0}
//         </div>

//       </div>

//       <AdminCharts stats={stats} />
//     </AdminLayout>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";
import AdminCharts from "../components/AdminCharts";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/admin/dashboard").then((res) => {
      console.log("STATS:", res.data.data);
      setStats(res.data.data);
    });
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

      {/* ✅ RESPONSIVE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

        {/* USERS */}
        <div
          onClick={() => navigate("/users")}
          className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
        >
          <p className="text-sm text-gray-500">Users</p>
          <h2 className="text-xl md:text-2xl font-bold">
            {stats.totalUsers || 0}
          </h2>
        </div>

        {/* ACTIVE */}
        <div
          onClick={() => navigate("/projects?status=ACTIVE")}
          className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
        >
          <p className="text-sm text-gray-500">Active</p>
          <h2 className="text-xl md:text-2xl font-bold">
            {stats.activeProjects || 0}
          </h2>
        </div>

        {/* DRAFT */}
        <div
          onClick={() => navigate("/projects?status=DRAFT")}
          className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
        >
          <p className="text-sm text-gray-500">Draft</p>
          <h2 className="text-xl md:text-2xl font-bold">
            {stats.draftProjects || 0}
          </h2>
        </div>

        {/* CANCELLED */}
        <div
          onClick={() => navigate("/projects?status=FAILED")}
          className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
        >
          <p className="text-sm text-gray-500">Cancelled</p>
          <h2 className="text-xl md:text-2xl font-bold">
            {stats.cancelledProjects || 0}
          </h2>
        </div>

        {/* COMPLETED */}
        <div
          onClick={() => navigate("/projects?status=COMPLETED")}
          className="bg-white/95 text-black p-5 rounded-xl cursor-pointer hover:scale-105 transition"
        >
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="text-xl md:text-2xl font-bold">
            {stats.completedProjects || 0}
          </h2>
        </div>

        {/* 💰 TOTAL FUND (FIXED UI) */}
        <div className="bg-white/95 text-black p-5 rounded-xl col-span-2">
          <p className="text-sm text-gray-500">Total Fund</p>
          <h2 className="text-lg md:text-2xl font-bold break-words">
            ₹{stats.totalFundRaised?.toLocaleString() || 0}
          </h2>
        </div>

      </div>

      {/* Charts */}
      <AdminCharts stats={stats} />
    </AdminLayout>
  );
}