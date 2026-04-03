// // // // // import { useEffect, useState } from "react";
// // // // // import { useSearchParams } from "react-router-dom";
// // // // // import API from "../services/api";
// // // // // import AdminLayout from "../components/AdminLayout";

// // // // // export default function Projects() {
// // // // //   const [projects, setProjects] = useState([]);
// // // // //   const [search, setSearch] = useState("");
// // // // //   const [category, setCategory] = useState("");

// // // // //   const [investments, setInvestments] = useState([]);
// // // // //   const [showInvestments, setShowInvestments] = useState(false);

// // // // //   const [params] = useSearchParams();

// // // // //   const fetchProjects = async () => {
// // // // //     const res = await API.get("/projects");
// // // // //     let data = res.data.data;

// // // // //     const status = params.get("status");
// // // // //     if (status) {
// // // // //       data = data.filter((p) => p.status === status);
// // // // //     }

// // // // //     setProjects(data);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchProjects();
// // // // //   }, [params]);

// // // // //   const handleApprove = async (id) => {
// // // // //     await API.put(`/projects/${id}/status`, {
// // // // //       status: "ACTIVE",
// // // // //     });
// // // // //     fetchProjects();
// // // // //   };

// // // // //   const handleReject = async (id) => {
// // // // //     await API.put(`/projects/${id}/status`, {
// // // // //       status: "FAILED",
// // // // //     });
// // // // //     fetchProjects();
// // // // //   };

// // // // //   const fetchInvestments = async (id) => {
// // // // //     const res = await API.get(`/investments/${id}`);
// // // // //     setInvestments(res.data.data);
// // // // //     setShowInvestments(true);
// // // // //   };

// // // // //   const filtered = projects
// // // // //     .filter((p) =>
// // // // //       p.title.toLowerCase().includes(search.toLowerCase())
// // // // //     )
// // // // //     .filter((p) =>
// // // // //       category ? p.category === category : true
// // // // //     );

// // // // //   return (
// // // // //     <AdminLayout>

// // // // //       <h1 className="text-2xl mb-4">Projects</h1>

// // // // //       {/* FILTER */}
// // // // //       <div className="flex gap-3 mb-4">
// // // // //         <input
// // // // //           placeholder="Search..."
// // // // //           className="p-2 text-black rounded"
// // // // //           onChange={(e) => setSearch(e.target.value)}
// // // // //         />

// // // // //         <select
// // // // //           className="p-2 text-black rounded"
// // // // //           onChange={(e) => setCategory(e.target.value)}
// // // // //         >
// // // // //           <option value="">All Category</option>
// // // // //           <option>Tech</option>
// // // // //           <option>Health</option>
// // // // //           <option>Education</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       {filtered.map((p) => (
// // // // //         <div key={p._id} className="bg-white text-black p-4 mb-3 rounded">
// // // // //           <h2>{p.title}</h2>
// // // // //           <p>{p.category}</p>
// // // // //           <p>Status: {p.status}</p>

// // // // //           <div className="mt-2 space-x-2">
// // // // //             <button
// // // // //               onClick={() => handleApprove(p._id)}
// // // // //               className="bg-green-500 text-white px-2 py-1"
// // // // //             >
// // // // //               Approve
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => handleReject(p._id)}
// // // // //               className="bg-red-500 text-white px-2 py-1"
// // // // //             >
// // // // //               Reject
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => fetchInvestments(p._id)}
// // // // //               className="bg-blue-500 text-white px-2 py-1"
// // // // //             >
// // // // //               Investments
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}

// // // // //       {/* INVESTMENT MODAL */}
// // // // //       {showInvestments && (
// // // // //         <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
// // // // //           <div className="bg-white text-black p-5 rounded w-[500px]">
// // // // //             <h2>Investments</h2>

// // // // //             {investments.map((i) => (
// // // // //               <p key={i._id}>
// // // // //                 {i.investorId?.name} - ₹{i.amount}
// // // // //               </p>
// // // // //             ))}

// // // // //             <button
// // // // //               onClick={() => setShowInvestments(false)}
// // // // //               className="mt-3 bg-black text-white px-3 py-1"
// // // // //             >
// // // // //               Close
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //     </AdminLayout>
// // // // //   );
// // // // // }
// // // // import { useEffect, useState } from "react";
// // // // import { useSearchParams } from "react-router-dom";
// // // // import API from "../services/api";
// // // // import AdminLayout from "../components/AdminLayout";

// // // // export default function Projects() {
// // // //   const [projects, setProjects] = useState([]);
// // // //   const [search, setSearch] = useState("");
// // // //   const [category, setCategory] = useState("");
// // // //   const [statusFilter, setStatusFilter] = useState("");
// // // //   const [budget, setBudget] = useState("");

// // // //   const [categories, setCategories] = useState([]);

// // // //   const [investments, setInvestments] = useState([]);
// // // //   const [showInvestments, setShowInvestments] = useState(false);

// // // //   const [params] = useSearchParams();

// // // //   // 🔥 FIX 1 → ADMIN API USE KARO
// // // //   const fetchProjects = async () => {
// // // //     const res = await API.get("/admin/projects"); // ✅ important change
// // // //     let data = res.data.data;

// // // //     setProjects(data);

// // // //     // ✅ dynamic categories
// // // //     const uniqueCategories = [
// // // //       ...new Set(data.map((p) => p.category)),
// // // //     ];
// // // //     setCategories(uniqueCategories);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchProjects();
// // // //   }, []);

// // // //   // ✅ Approve / Reject
// // // //   const handleApprove = async (id) => {
// // // //     await API.put(`/admin/projects/${id}/status`, {
// // // //       status: "ACTIVE",
// // // //     });
// // // //     fetchProjects();
// // // //   };

// // // //   const handleReject = async (id) => {
// // // //     await API.put(`/admin/projects/${id}/status`, {
// // // //       status: "FAILED",
// // // //     });
// // // //     fetchProjects();
// // // //   };

// // // //   // 💰 Investments
// // // //   const fetchInvestments = async (id) => {
// // // //     const res = await API.get(`/admin/investments/${id}`);
// // // //     setInvestments(res.data.data);
// // // //     setShowInvestments(true);
// // // //   };

// // // //   // 🔥 FILTER LOGIC
// // // //   const filtered = projects
// // // //     .filter((p) =>
// // // //       p.title.toLowerCase().includes(search.toLowerCase())
// // // //     )
// // // //     .filter((p) =>
// // // //       category ? p.category === category : true
// // // //     )
// // // //     .filter((p) =>
// // // //       statusFilter ? p.status === statusFilter : true
// // // //     )
// // // //     .filter((p) => {
// // // //       if (budget === "low") return p.targetAmount < 50000;
// // // //       if (budget === "medium")
// // // //         return p.targetAmount >= 50000 && p.targetAmount <= 200000;
// // // //       if (budget === "high") return p.targetAmount > 200000;
// // // //       return true;
// // // //     });

// // // //   return (
// // // //     <AdminLayout>
// // // //       <h1 className="text-2xl mb-4 text-white">Projects 📁</h1>

// // // //       {/* 🔍 FILTER BAR */}
// // // //       <div className="flex flex-wrap gap-3 mb-6">

// // // //         <input
// // // //           placeholder="Search..."
// // // //           className="p-2 text-black rounded"
// // // //           onChange={(e) => setSearch(e.target.value)}
// // // //         />

// // // //         {/* ✅ Dynamic Category */}
// // // //         <select
// // // //           className="p-2 text-black rounded"
// // // //           onChange={(e) => setCategory(e.target.value)}
// // // //         >
// // // //           <option value="">All Category</option>
// // // //           {categories.map((c, i) => (
// // // //             <option key={i}>{c}</option>
// // // //           ))}
// // // //         </select>

// // // //         {/* ✅ Status Filter */}
// // // //         <select
// // // //           className="p-2 text-black rounded"
// // // //           onChange={(e) => setStatusFilter(e.target.value)}
// // // //         >
// // // //           <option value="">All Status</option>
// // // //           <option value="ACTIVE">Approved</option>
// // // //           <option value="FAILED">Rejected</option>
// // // //           <option value="DRAFT">Draft</option>
// // // //         </select>

// // // //         {/* 💰 Budget Filter */}
// // // //         <select
// // // //           className="p-2 text-black rounded"
// // // //           onChange={(e) => setBudget(e.target.value)}
// // // //         >
// // // //           <option value="">All Budget</option>
// // // //           <option value="low">Below 50K</option>
// // // //           <option value="medium">50K - 2L</option>
// // // //           <option value="high">Above 2L</option>
// // // //         </select>
// // // //       </div>

// // // //       {/* 📦 PROJECT LIST */}
// // // //       {filtered.map((p) => (
// // // //         <div
// // // //           key={p._id}
// // // //           className="bg-white text-black p-4 mb-3 rounded-xl shadow"
// // // //         >
// // // //           <h2 className="font-bold">{p.title}</h2>
// // // //           <p>{p.category}</p>

// // // //           <p>
// // // //             Status:{" "}
// // // //             <span className="font-semibold">{p.status}</span>
// // // //           </p>

// // // //           <p>₹{p.targetAmount}</p>

// // // //           <div className="mt-2 space-x-2">
// // // //             <button
// // // //               onClick={() => handleApprove(p._id)}
// // // //               className="bg-green-600 text-white px-3 py-1 rounded"
// // // //             >
// // // //               Approve
// // // //             </button>

// // // //             <button
// // // //               onClick={() => handleReject(p._id)}
// // // //               className="bg-red-600 text-white px-3 py-1 rounded"
// // // //             >
// // // //               Reject
// // // //             </button>

// // // //             <button
// // // //               onClick={() => fetchInvestments(p._id)}
// // // //               className="bg-blue-600 text-white px-3 py-1 rounded"
// // // //             >
// // // //               Investments
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       ))}

// // // //       {/* 💰 INVESTMENT MODAL */}
// // // //       {showInvestments && (
// // // //         <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
// // // //           <div className="bg-white text-black p-5 rounded w-[500px]">
// // // //             <h2 className="font-bold mb-3">Investments</h2>

// // // //             {investments.length > 0 ? (
// // // //               investments.map((i) => (
// // // //                 <p key={i._id}>
// // // //                   {i.investorId?.name} - ₹{i.amount}
// // // //                 </p>
// // // //               ))
// // // //             ) : (
// // // //               <p>No investments found</p>
// // // //             )}

// // // //             <button
// // // //               onClick={() => setShowInvestments(false)}
// // // //               className="mt-3 bg-black text-white px-3 py-1 rounded"
// // // //             >
// // // //               Close
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </AdminLayout>
// // // //   );
// // // // }
// // import { useEffect, useState } from "react";
// // import { useSearchParams } from "react-router-dom";
// // import API from "../services/api";
// // import AdminLayout from "../components/AdminLayout";

// // export default function Projects() {
// //   const [projects, setProjects] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [sort, setSort] = useState("");

// //   const [investments, setInvestments] = useState([]);
// //   const [showInvestments, setShowInvestments] = useState(false);

// //   const [params] = useSearchParams();

// //   useEffect(() => {
// //     fetchProjects();
// //     fetchCategories();
// //   }, [params]);

// //   const fetchProjects = async () => {
// //     const res = await API.get("/admin/projects");
// //     let data = res.data.data;

// //     const status = params.get("status");
// //     if (status) {
// //       data = data.filter((p) => p.status === status);
// //     }

// //     setProjects(data);
// //   };

// //   const fetchCategories = async () => {
// //     const res = await API.get("/categories");
// //     setCategories(res.data.data);
// //   };

// //   const handleApprove = async (id) => {
// //     await API.put(`/admin/projects/${id}/status`, {
// //       status: "ACTIVE",
// //     });
// //     alert("Approved ✅");
// //     fetchProjects();
// //   };

// //   const handleReject = async (id) => {
// //     await API.put(`/admin/projects/${id}/status`, {
// //       status: "FAILED",
// //     });
// //     alert("Rejected ❌");
// //     fetchProjects();
// //   };
// //   // ✅ Mark project as completed
// // const handleMarkCompleted = async (id) => {
// //   try {
// //     await API.put(`/admin/projects/${id}/status`, {
// //       status: "COMPLETED",
// //     });
// //     alert("Project marked as Completed ✅");
// //     fetchProjects();
// //   } catch (err) {
// //     alert(err.response?.data?.message || "Error");
// //   }
// // };

// //   const fetchInvestments = async (id) => {
// //     const res = await API.get(`/admin/investments/${id}`);
// //     setInvestments(res.data.data);
// //     setShowInvestments(true);
// //   };

// //   const filtered = projects
// //     .filter((p) =>
// //       p.title.toLowerCase().includes(search.toLowerCase())
// //     )
// //     .filter((p) =>
// //       category ? p.category === category : true
// //     )
// //     .sort((a, b) => {
// //       if (sort === "low") return a.targetAmount - b.targetAmount;
// //       if (sort === "high") return b.targetAmount - a.targetAmount;
// //       return 0;
// //     });

// //   return (
// //     <AdminLayout>
// //       <h1 className="text-2xl mb-4">Projects 📁</h1>

// //       {/* FILTERS */}
// //       <div className="flex flex-wrap gap-3 mb-6">

// //         <input
// //           placeholder="Search..."
// //           className="p-2 text-black rounded"
// //           onChange={(e) => setSearch(e.target.value)}
// //         />

// //         <select
// //           className="p-2 text-black rounded"
// //           onChange={(e) => setCategory(e.target.value)}
// //         >
// //           <option value="">All Categories</option>
// //           {categories.map((c) => (
// //             <option key={c._id}>{c.name}</option>
// //           ))}
// //         </select>

// //         <select
// //           className="p-2 text-black rounded"
// //           onChange={(e) => setSort(e.target.value)}
// //         >
// //           <option value="">Budget</option>
// //           <option value="low">Low → High</option>
// //           <option value="high">High → Low</option>
// //         </select>

// //       </div>

// //       {/* PROJECT LIST */}
// //       {filtered.map((p) => (
// //         <div key={p._id} className="bg-white text-black p-4 mb-3 rounded-xl">

// //           <h2 className="font-bold">Title:{p.title}</h2>
// //           <p>Description:{p.description}</p>
// //           <p> Category:{p.category}</p>
// //           <p>Status: {p.status}</p>
// //           <p>TargetAmount:{p.targetAmount}</p>
// //           <p>FundedAmount:{p.fundedAmount}</p>
// //           <p>Deadline:{p.deadline}</p>
// //           <p>Description:{p.description}</p>

// //           <div className="mt-2 space-x-2">
// //             <button
// //               onClick={() => handleApprove(p._id)}
// //               className="bg-green-500 text-white px-3 py-1 rounded"
// //             >
// //               Approve
// //             </button>

// //             <button
// //               onClick={() => handleReject(p._id)}
// //               className="bg-red-500 text-white px-3 py-1 rounded"
// //             >
// //               Reject
// //             </button>
// //             <button
// //     onClick={() => handleMarkCompleted(p._id)}
// //     className="bg-yellow-500 text-white px-3 py-1 rounded"
// //   >
// //     Completed
// //   </button>

// //             <button
// //               onClick={() => fetchInvestments(p._id)}
// //               className="bg-blue-500 text-white px-3 py-1 rounded"
// //             >
// //               Investments
// //             </button>
// //           </div>
// //         </div>
// //       ))}

// //       {/* INVESTMENT MODAL */}
// //       {showInvestments && (
// //         <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
// //           <div className="bg-white text-black p-5 rounded w-[400px]">

// //             <h2 className="text-lg font-bold mb-3">Investments</h2>

// //             {investments.map((i) => (
// //               <p key={i._id}>
// //                 {i.investorId?.name} - ₹{i.amount}
// //               </p>
// //             ))}

// //             <button
// //               onClick={() => setShowInvestments(false)}
// //               className="mt-4 bg-black text-white px-3 py-1"
// //             >
// //               Close
// //             </button>

// //           </div>
// //         </div>
// //       )}

// //     </AdminLayout>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import API from "../services/api";
// import AdminLayout from "../components/AdminLayout";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sort, setSort] = useState("");

//   const [investments, setInvestments] = useState([]);
//   const [showInvestments, setShowInvestments] = useState(false);

//   const [params] = useSearchParams();

//   useEffect(() => {
//     fetchProjects();
//     fetchCategories();
//   }, [params]);

//   const fetchProjects = async () => {
//     const res = await API.get("/admin/projects");
//     let data = res.data.data;

//     const status = params.get("status");
//     if (status) {
//       data = data.filter((p) => p.status === status);
//     }

//     setProjects(data);
//   };

//   const fetchCategories = async () => {
//     const res = await API.get("/categories");
//     setCategories(res.data.data);
//   };

//   const handleApprove = async (id) => {
//     await API.put(`/admin/projects/${id}/status`, {
//       status: "ACTIVE",
//     });
//     alert("Approved ✅");
//     fetchProjects();
//   };

//   const handleReject = async (id) => {
//     await API.put(`/admin/projects/${id}/status`, {
//       status: "FAILED",
//     });
//     alert("Rejected ❌");
//     fetchProjects();
//   };

//   const handleMarkCompleted = async (id) => {
//     try {
//       await API.put(`/admin/projects/${id}/status`, {
//         status: "COMPLETED",
//       });
//       alert("Project marked as Completed ✅");
//       fetchProjects();
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   const fetchInvestments = async (id) => {
//     const res = await API.get(`/admin/investments/${id}`);
//     setInvestments(res.data.data);
//     setShowInvestments(true);
//   };

//   const filtered = projects
//     .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
//     .filter((p) => (category ? p.category === category : true))
//     .sort((a, b) => {
//       if (sort === "low") return a.targetAmount - b.targetAmount;
//       if (sort === "high") return b.targetAmount - a.targetAmount;
//       return 0;
//     });

//   return (
//     <AdminLayout>
//       <h1 className="text-2xl mb-4">Projects 📁</h1>

//       {/* FILTERS */}
//       <div className="flex flex-wrap gap-3 mb-6">
//         <input
//           placeholder="Search..."
//           className="p-2 text-black rounded"
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="p-2 text-black rounded"
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           {categories.map((c) => (
//             <option key={c._id}>{c.name}</option>
//           ))}
//         </select>

//         <select
//           className="p-2 text-black rounded"
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="">Budget</option>
//           <option value="low">Low → High</option>
//           <option value="high">High → Low</option>
//         </select>
//       </div>

//       {/* PROJECT LIST */}
//       {filtered.map((p) => (
//         <div
//           key={p._id}
//           className="bg-white text-black p-4 mb-3 rounded-xl shadow"
//         >
//           <h2 className="font-bold">Title: {p.title}</h2>
//           <p>Description: {p.description}</p>
//           <p>Category: {p.category}</p>
//           <p>Status: {p.status}</p>

//           {/* ✅ NEW PHONE FIELD */}
//           <p>
//             <b>Phone:</b>{" "}
//             {p.phone || p.contactNumber || p.userId?.phone || "N/A"}
//           </p>

//           <p>
//             <b>Email:</b> {p.email || p.userId?.email || "N/A"}
//           </p>

//           <p>Target Amount: ₹{p.targetAmount}</p>
//           <p>Funded Amount: ₹{p.fundedAmount}</p>
//           <p>
//             Deadline: {p.deadline ? new Date(p.deadline).toDateString() : "N/A"}
//           </p>

//           <div className="mt-2 space-x-2">
//             <button
//               onClick={() => handleApprove(p._id)}
//               className="bg-green-500 text-white px-3 py-1 rounded"
//             >
//               Approve
//             </button>

//             <button
//               onClick={() => handleReject(p._id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Reject
//             </button>

//             <button
//               onClick={() => handleMarkCompleted(p._id)}
//               className="bg-yellow-500 text-white px-3 py-1 rounded"
//             >
//               Completed
//             </button>

//             <button
//               onClick={() => fetchInvestments(p._id)}
//               className="bg-blue-500 text-white px-3 py-1 rounded"
//             >
//               Investments
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* INVESTMENT MODAL */}
//       {showInvestments && (
//         <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
//           <div className="bg-white text-black p-5 rounded w-[400px]">
//             <h2 className="text-lg font-bold mb-3">Investments</h2>

//             {investments.length > 0 ? (
//               investments.map((i) => (
//                 <p key={i._id}>
//                   {i.investorId?.name} - ₹{i.amount}
//                 </p>
//               ))
//             ) : (
//               <p>No investments found</p>
//             )}

//             <button
//               onClick={() => setShowInvestments(false)}
//               className="mt-4 bg-black text-white px-3 py-1"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </AdminLayout>
//   );
// }
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const [investments, setInvestments] = useState([]);
  const [showInvestments, setShowInvestments] = useState(false);

  const [params] = useSearchParams();

  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, [params]);

  // ✅ Fetch Projects
  const fetchProjects = async () => {
    const res = await API.get("/admin/projects");
    let data = res.data.data;

    const status = params.get("status");
    if (status) {
      data = data.filter((p) => p.status === status);
    }

    setProjects(data);
  };

  // ✅ Fetch Categories
  const fetchCategories = async () => {
    const res = await API.get("/categories");
    setCategories(res.data.data);
  };

  // ✅ Approve
  const handleApprove = async (id) => {
    try {
      await API.put(`/admin/projects/${id}/status`, {
        status: "ACTIVE",
      });
      alert("Approved ✅");
      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  // ✅ Reject
  const handleReject = async (id) => {
    try {
      await API.put(`/admin/projects/${id}/status`, {
        status: "FAILED",
      });
      alert("Rejected ❌");
      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  // ✅ Completed
  const handleMarkCompleted = async (id) => {
    try {
      await API.put(`/admin/projects/${id}/status`, {
        status: "COMPLETED",
      });
      alert("Project marked as Completed ✅");
      fetchProjects();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  // ✅ Investments
  const fetchInvestments = async (id) => {
    const res = await API.get(`/admin/investments/${id}`);
    setInvestments(res.data.data);
    setShowInvestments(true);
  };

  // ✅ FILTER LOGIC
  const filtered = projects
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category ? p.category === category : true
    )
    .sort((a, b) => {
      if (sort === "low") return a.targetAmount - b.targetAmount;
      if (sort === "high") return b.targetAmount - a.targetAmount;
      return 0;
    });

  return (
    <AdminLayout>
      <h1 className="text-2xl mb-4">Projects 📁</h1>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 mb-6">
        <input
          placeholder="Search..."
          className="p-2 text-black rounded"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 text-black rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c._id}>{c.name}</option>
          ))}
        </select>

        <select
          className="p-2 text-black rounded"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Budget</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* PROJECT LIST */}
      {filtered.map((p) => (
        <div
          key={p._id}
          className="bg-white text-black p-4 mb-3 rounded-xl shadow"
        >
          <h2 className="font-bold">Title: {p.title}</h2>
          <p>Description: {p.description}</p>
          <p>Category: {p.category}</p>
          <p>Status: {p.status}</p>

          {/* ✅ PHONE */}
          <p>
            <b>Phone:</b>{" "}
            {p.phone || p.contactNumber || p.userId?.phone || "N/A"}
          </p>

          {/* ✅ EMAIL */}
          <p>
            <b>Email:</b>{" "}
            {p.email || p.userId?.email || "N/A"}
          </p>

          <p>Target Amount: ₹{p.targetAmount}</p>
          <p>Funded Amount: ₹{p.fundedAmount}</p>
          <p>
            Deadline:{" "}
            {p.deadline
              ? new Date(p.deadline).toDateString()
              : "N/A"}
          </p>

          {/* ✅ BUTTONS WITH DISABLE LOGIC */}
          <div className="mt-2 space-x-2">

            {/* APPROVE */}
            <button
              onClick={() => handleApprove(p._id)}
              disabled={p.status === "ACTIVE"}
              className={`px-3 py-1 rounded text-white ${
                p.status === "ACTIVE"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              Approve
            </button>

            {/* REJECT */}
            <button
              onClick={() => handleReject(p._id)}
              disabled={p.status === "FAILED"}
              className={`px-3 py-1 rounded text-white ${
                p.status === "FAILED"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              Reject
            </button>

            {/* COMPLETED */}
            <button
              onClick={() => handleMarkCompleted(p._id)}
              disabled={p.status === "COMPLETED"}
              className={`px-3 py-1 rounded text-white ${
                p.status === "COMPLETED"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              Completed
            </button>

            {/* INVESTMENTS */}
            <button
              onClick={() => fetchInvestments(p._id)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Investments
            </button>

          </div>
        </div>
      ))}

      {/* INVESTMENT MODAL */}
      {showInvestments && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-white text-black p-5 rounded w-[400px]">
            <h2 className="text-lg font-bold mb-3">
              Investments
            </h2>

            {investments.length > 0 ? (
              investments.map((i) => (
                <p key={i._id}>
                  {i.investorId?.name} - ₹{i.amount}
                </p>
              ))
            ) : (
              <p>No investments found</p>
            )}

            <button
              onClick={() => setShowInvestments(false)}
              className="mt-4 bg-black text-white px-3 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}