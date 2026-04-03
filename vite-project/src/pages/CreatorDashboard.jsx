// // // // // // import { useEffect, useState } from "react";
// // // // // // import API from "../services/api";
// // // // // // import { Link } from "react-router-dom";

// // // // // // const CreatorDashboard = () => {
// // // // // //   const [projects, setProjects] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchMyProjects = async () => {
// // // // // //       try {
// // // // // //         const res = await API.get("/projects/my/projects");
// // // // // //         setProjects(res.data.data);
// // // // // //       } catch (err) {
// // // // // //         console.log(err);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchMyProjects();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <h1 className="text-2xl mb-4">My Projects</h1>

// // // // // //       <Link
// // // // // //         to="/create"
// // // // // //         className="bg-blue-500 text-white px-4 py-2"
// // // // // //       >
// // // // // //         + Create New Project
// // // // // //       </Link>

// // // // // //       <div className="mt-4">
// // // // // //         {projects.map((p) => (
// // // // // //           <div key={p._id} className="border p-3 mb-3">
// // // // // //             <h2 className="font-bold">{p.title}</h2>
// // // // // //             <p>Status: {p.status}</p>
// // // // // //             <p>₹{p.fundedAmount} / ₹{p.targetAmount}</p>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CreatorDashboard;
// // // // // import { useEffect, useState } from "react";
// // // // // import API from "../services/api";
// // // // // import { Link } from "react-router-dom";

// // // // // export default function CreatorDashboard() {
// // // // //   const [projects, setProjects] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const fetchMyProjects = async () => {
// // // // //       try {
// // // // //         const res = await API.get("/projects/my/projects");
// // // // //         setProjects(res.data.data || []);
// // // // //       } catch (err) {
// // // // //         console.log(err);
// // // // //       }
// // // // //     };

// // // // //     fetchMyProjects();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// // // // //       <div className="max-w-7xl mx-auto px-6 py-10">

// // // // //         {/* Header */}
// // // // //         <div className="flex justify-between items-center mb-8">
// // // // //           <div>
// // // // //             <h1 className="text-3xl font-bold">Creator Dashboard 🎯</h1>
// // // // //             <p className="text-blue-200">
// // // // //               Manage your projects and track performance
// // // // //             </p>
// // // // //           </div>

// // // // //           <Link
// // // // //             to="/create"
// // // // //             className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition shadow-lg"
// // // // //           >
// // // // //             + Create Project
// // // // //           </Link>
// // // // //         </div>

// // // // //         {/* Projects */}
// // // // //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // // //           {projects.length > 0 ? (
// // // // //             projects.map((p) => {
// // // // //               const raised = p.fundedAmount || 0;
// // // // //               const goal = p.targetAmount || 1;
// // // // //               const progress = Math.min((raised / goal) * 100, 100);

// // // // //               return (
// // // // //                 <div
// // // // //                   key={p._id}
// // // // //                   className="bg-white/95 text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
// // // // //                 >
// // // // //                   <h2 className="text-lg font-semibold mb-1">
// // // // //                     {p.title}
// // // // //                   </h2>

// // // // //                   <p className="text-sm text-gray-600 mb-2">
// // // // //                     Status:{" "}
// // // // //                     <span
// // // // //                       className={`font-semibold ${
// // // // //                         p.status === "ACTIVE"
// // // // //                           ? "text-green-600"
// // // // //                           : p.status === "PENDING"
// // // // //                           ? "text-yellow-600"
// // // // //                           : "text-red-600"
// // // // //                       }`}
// // // // //                     >
// // // // //                       {p.status}
// // // // //                     </span>
// // // // //                   </p>

// // // // //                   {/* Progress */}
// // // // //                   <div className="mb-2">
// // // // //                     <div className="w-full bg-gray-200 rounded-full h-2">
// // // // //                       <div
// // // // //                         className="bg-blue-600 h-2 rounded-full"
// // // // //                         style={{ width: `${progress}%` }}
// // // // //                       ></div>
// // // // //                     </div>
// // // // //                     <div className="flex justify-between text-xs mt-1 text-gray-600">
// // // // //                       <span>₹{raised}</span>
// // // // //                       <span>{Math.round(progress)}%</span>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <p className="text-sm text-gray-500 mb-3">
// // // // //                     Goal: ₹{goal}
// // // // //                   </p>

// // // // //                   {/* Actions */}
// // // // //                   <div className="flex justify-between">
// // // // //                     <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
// // // // //                       View
// // // // //                     </button>

// // // // //                     <button className="text-sm bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition">
// // // // //                       Edit
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               );
// // // // //             })
// // // // //           ) : (
// // // // //             <p className="text-blue-200">No projects created yet</p>
// // // // //           )}
// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useEffect, useState } from "react";
// // // // import API from "../services/api";
// // // // import { useNavigate, Link } from "react-router-dom";

// // // // export default function CreatorDashboard() {
// // // //   const [projects, setProjects] = useState([]);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     const fetchMyProjects = async () => {
// // // //       try {
// // // //         const res = await API.get("/projects/my/projects");
// // // //         setProjects(res.data.data || []);
// // // //       } catch (err) {
// // // //         console.log(err);
// // // //       }
// // // //     };

// // // //     fetchMyProjects();
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// // // //       <div className="max-w-7xl mx-auto px-6 py-10">

// // // //         {/* Header */}
// // // //         <div className="flex justify-between items-center mb-8">
// // // //           <div>
// // // //             <h1 className="text-3xl font-bold">Creator Dashboard 🎯</h1>
// // // //             <p className="text-blue-200">
// // // //               Manage your projects and track performance
// // // //             </p>
// // // //           </div>

// // // //           <Link
// // // //             to="/create"
// // // //             className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition shadow-lg"
// // // //           >
// // // //             + Create Project
// // // //           </Link>
// // // //         </div>

// // // //         {/* Projects */}
// // // //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // //           {projects.length > 0 ? (
// // // //             projects.map((p) => {
// // // //               const raised = p.fundedAmount || 0;
// // // //               const goal = p.targetAmount || 1;
// // // //               const progress = Math.min((raised / goal) * 100, 100);

// // // //               return (
// // // //                 <div
// // // //                   key={p._id}
// // // //                   className="bg-white/95 text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
// // // //                 >
// // // //                   <h2 className="text-lg font-semibold mb-1">{p.title}</h2>

// // // //                   <p className="text-sm text-gray-600 mb-2">
// // // //                     Status:{" "}
// // // //                     <span
// // // //                       className={`font-semibold ${
// // // //                         p.status === "ACTIVE"
// // // //                           ? "text-green-600"
// // // //                           : p.status === "PENDING"
// // // //                           ? "text-yellow-600"
// // // //                           : "text-red-600"
// // // //                       }`}
// // // //                     >
// // // //                       {p.status}
// // // //                     </span>
// // // //                   </p>

// // // //                   {/* Progress */}
// // // //                   <div className="mb-2">
// // // //                     <div className="w-full bg-gray-200 rounded-full h-2">
// // // //                       <div
// // // //                         className="bg-blue-600 h-2 rounded-full"
// // // //                         style={{ width: `${progress}%` }}
// // // //                       ></div>
// // // //                     </div>
// // // //                     <div className="flex justify-between text-xs mt-1 text-gray-600">
// // // //                       <span>₹{raised}</span>
// // // //                       <span>{Math.round(progress)}%</span>
// // // //                     </div>
// // // //                   </div>

// // // //                   <p className="text-sm text-gray-500 mb-3">Goal: ₹{goal}</p>

// // // //                   {/* Actions */}
// // // //                   <div className="flex justify-between">
// // // //                     {/* VIEW */}
// // // //                     <button
// // // //                       onClick={() =>
// // // //                         navigate(`/project/${p._id}?mode=view`)
// // // //                       }
// // // //                       className="text-sm bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition"
// // // //                     >
// // // //                       View
// // // //                     </button>

// // // //                     {/* EDIT */}
// // // //                     <button
// // // //                       onClick={() =>
// // // //                         navigate(`/project/${p._id}?mode=edit`)
// // // //                       }
// // // //                       className="text-sm bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition"
// // // //                     >
// // // //                       Edit
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })
// // // //           ) : (
// // // //             <p className="text-blue-200">No projects created yet</p>
// // // //           )}
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useEffect, useState } from "react";
// // // import API from "../services/api";

// // // export default function CreatorDashboard() {
// // //   const [projects, setProjects] = useState([]);
// // //   const [activeProject, setActiveProject] = useState(null); // view/edit selected project
// // //   const [mode, setMode] = useState("view"); // view / edit
// // //   const [form, setForm] = useState({});

// // //   useEffect(() => {
// // //     const fetchMyProjects = async () => {
// // //       try {
// // //         const res = await API.get("/projects/my/projects");
// // //         setProjects(res.data.data || []);
// // //       } catch (err) {
// // //         console.log(err);
// // //       }
// // //     };

// // //     fetchMyProjects();
// // //   }, []);

// // //   const openProject = (project, modeType) => {
// // //     setActiveProject(project);
// // //     setForm(project); // initialize edit form
// // //     setMode(modeType);
// // //   };

// // //   const handleSave = async () => {
// // //     try {
// // //       await API.put(`/projects/${activeProject._id}`, form);
// // //       alert("Project updated successfully!");
// // //       // update locally
// // //       setProjects(projects.map(p => p._id === activeProject._id ? form : p));
// // //       setActiveProject(null);
// // //       setMode("view");
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Error");
// // //     }
// // //   };

// // //   const closeModal = () => {
// // //     setActiveProject(null);
// // //     setMode("view");
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white p-6">

// // //       <h1 className="text-3xl font-bold mb-6">Creator Dashboard 🎯</h1>

// // //       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //         {projects.length > 0 ? (
// // //           projects.map((p) => {
// // //             const raised = p.fundedAmount || 0;
// // //             const goal = p.targetAmount || 1;
// // //             const progress = Math.min((raised / goal) * 100, 100);

// // //             return (
// // //               <div
// // //                 key={p._id}
// // //                 className="bg-white/95 text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
// // //               >
// // //                 <h2 className="text-lg font-semibold mb-1">{p.title}</h2>

// // //                 <p className="text-sm text-gray-600 mb-2">
// // //                   Status:{" "}
// // //                   <span
// // //                     className={`font-semibold ${
// // //                       p.status === "ACTIVE"
// // //                         ? "text-green-600"
// // //                         : p.status === "PENDING"
// // //                         ? "text-yellow-600"
// // //                         : "text-red-600"
// // //                     }`}
// // //                   >
// // //                     {p.status}
// // //                   </span>
// // //                 </p>

// // //                 {/* Progress */}
// // //                 <div className="mb-2">
// // //                   <div className="w-full bg-gray-200 rounded-full h-2">
// // //                     <div
// // //                       className="bg-blue-600 h-2 rounded-full"
// // //                       style={{ width: `${progress}%` }}
// // //                     ></div>
// // //                   </div>
// // //                   <div className="flex justify-between text-xs mt-1 text-gray-600">
// // //                     <span>₹{raised}</span>
// // //                     <span>{Math.round(progress)}%</span>
// // //                   </div>
// // //                 </div>

// // //                 <p className="text-sm text-gray-500 mb-3">Goal: ₹{goal}</p>

// // //                 {/* Actions */}
// // //                 <div className="flex justify-between">
// // //                   <button
// // //                     onClick={() => openProject(p, "view")}
// // //                     className="text-sm bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition"
// // //                   >
// // //                     View
// // //                   </button>

// // //                   <button
// // //                     onClick={() => openProject(p, "edit")}
// // //                     className="text-sm bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition"
// // //                   >
// // //                     Edit
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })
// // //         ) : (
// // //           <p className="text-blue-200">No projects created yet</p>
// // //         )}
// // //       </div>

// // //       {/* Modal for View/Edit */}
// // //       {activeProject && (
// // //         <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
// // //           <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-2xl relative text-black">
            
// // //             <button
// // //               onClick={closeModal}
// // //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
// // //             >
// // //               ✕
// // //             </button>

// // //             {mode === "view" && (
// // //               <>
// // //                 <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
// // //                 <p className="mb-2">{activeProject.description}</p>
// // //                 <p><b>Target:</b> ₹{activeProject.targetAmount}</p>
// // //                 <p><b>Status:</b> {activeProject.status}</p>
// // //                 <p><b>Deadline:</b> {new Date(activeProject.deadline).toDateString()}</p>
// // //               </>
// // //             )}

// // //             {mode === "edit" && (
// // //               <>
// // //                 <input
// // //                   type="text"
// // //                   value={form.title || ""}
// // //                   onChange={(e) => setForm({ ...form, title: e.target.value })}
// // //                   className="border p-2 rounded w-full mb-2"
// // //                 />
// // //                 <textarea
// // //                   value={form.description || ""}
// // //                   onChange={(e) => setForm({ ...form, description: e.target.value })}
// // //                   className="border p-2 rounded w-full mb-2"
// // //                 />
// // //                 <input
// // //                   type="number"
// // //                   value={form.targetAmount || 0}
// // //                   onChange={(e) => setForm({ ...form, targetAmount: Number(e.target.value) })}
// // //                   className="border p-2 rounded w-full mb-2"
// // //                 />
// // //                 <input
// // //                   type="date"
// // //                   value={form.deadline ? new Date(form.deadline).toISOString().split("T")[0] : ""}
// // //                   onChange={(e) => setForm({ ...form, deadline: e.target.value })}
// // //                   className="border p-2 rounded w-full mb-2"
// // //                 />
// // //                 <button
// // //                   onClick={handleSave}
// // //                   className="bg-green-600 text-white px-4 py-2 rounded mt-2"
// // //                 >
// // //                   Save Changes
// // //                 </button>
// // //               </>
// // //             )}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import API from "../services/api";

// // export default function CreatorDashboard() {
// //   const [projects, setProjects] = useState([]);
// //   const [activeProject, setActiveProject] = useState(null); // view/edit selected project
// //   const [mode, setMode] = useState("view"); // view / edit
// //   const [form, setForm] = useState({});

// //   useEffect(() => {
// //     const fetchMyProjects = async () => {
// //       try {
// //         const res = await API.get("/projects/my/projects");
// //         setProjects(res.data.data || []);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     fetchMyProjects();
// //   }, []);

// //   const openProject = (project, modeType) => {
// //     setActiveProject(project);
// //     setForm(project); // initialize edit form
// //     setMode(modeType);
// //   };

// //   const handleSave = async () => {
// //     try {
// //       await API.put(`/projects/${activeProject._id}`, form);
// //       alert("Project updated successfully!");
// //       setProjects(projects.map(p => p._id === activeProject._id ? form : p));
// //       setActiveProject(null);
// //       setMode("view");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error");
// //     }
// //   };

// //   const closeModal = () => {
// //     setActiveProject(null);
// //     setMode("view");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white p-6">
// //       <h1 className="text-3xl font-bold mb-6">Creator Dashboard 🎯</h1>

// //       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {projects.length > 0 ? (
// //           projects.map((p) => {
// //             const raised = p.fundedAmount || 0;
// //             const goal = p.targetAmount || 1;
// //             const progress = Math.min((raised / goal) * 100, 100);

// //             return (
// //               <div
// //                 key={p._id}
// //                 className="bg-white/95 text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
// //               >
// //                 <h2 className="text-lg font-semibold mb-1">{p.title}</h2>

// //                 <p className="text-sm text-gray-600 mb-2">
// //                   Status:{" "}
// //                   <span
// //                     className={`font-semibold ${
// //                       p.status === "ACTIVE"
// //                         ? "text-green-600"
// //                         : p.status === "PENDING"
// //                         ? "text-yellow-600"
// //                         : "text-red-600"
// //                     }`}
// //                   >
// //                     {p.status}
// //                   </span>
// //                 </p>

// //                 {/* Progress */}
// //                 <div className="mb-2">
// //                   <div className="w-full bg-gray-200 rounded-full h-2">
// //                     <div
// //                       className="bg-blue-600 h-2 rounded-full"
// //                       style={{ width: `${progress}%` }}
// //                     ></div>
// //                   </div>
// //                   <div className="flex justify-between text-xs mt-1 text-gray-600">
// //                     <span>₹{raised}</span>
// //                     <span>{Math.round(progress)}%</span>
// //                   </div>
// //                 </div>

// //                 <p className="text-sm text-gray-500 mb-3">Goal: ₹{goal}</p>

// //                 {/* Actions */}
// //                 <div className="flex justify-between">
// //                   {/* VIEW */}
// //                   <button
// //                     onClick={() => openProject(p, "view")}
// //                     className="text-sm bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition"
// //                   >
// //                     View
// //                   </button>

// //                   {/* EDIT */}
// //                   <button
// //                     onClick={() => openProject(p, "edit")}
// //                     className="text-sm bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition"
// //                   >
// //                     Edit
// //                   </button>
// //                 </div>
// //               </div>
// //             );
// //           })
// //         ) : (
// //           <p className="text-blue-200">No projects created yet</p>
// //         )}
// //       </div>

// //       {/* Modal for View/Edit */}
// //       {activeProject && (
// //         <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
// //           <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 rounded-2xl shadow-lg p-6 w-full max-w-2xl relative text-white">

// //             <button
// //               onClick={closeModal}
// //               className="absolute top-4 right-4 text-white font-bold"
// //             >
// //               ✕
// //             </button>

// //             {mode === "view" && (
// //               <div className="space-y-2">
// //                 <h2 className="text-2xl font-bold">{activeProject.title}</h2>
// //                 <p><b>Description:</b> {activeProject.description}</p>
// //                 <p><b>Category:</b> {activeProject.category}</p>
// //                 <p><b>Status:</b> {activeProject.status}</p>
// //                 <p><b>Target Amount:</b> ₹{activeProject.targetAmount}</p>
// //                 <p><b>Funded Amount:</b> ₹{activeProject.fundedAmount}</p>
// //                 <p><b>Deadline:</b> {new Date(activeProject.deadline).toDateString()}</p>
// //               </div>
// //             )}

// //             {mode === "edit" && (
// //               <div className="space-y-2">
// //                 <input
// //                   type="text"
// //                   value={form.title || ""}
// //                   onChange={(e) => setForm({ ...form, title: e.target.value })}
// //                   className="border p-2 rounded w-full text-black"
// //                   placeholder="Title"
// //                 />
// //                 <textarea
// //                   value={form.description || ""}
// //                   onChange={(e) => setForm({ ...form, description: e.target.value })}
// //                   className="border p-2 rounded w-full text-black"
// //                   placeholder="Description"
// //                 />
// //                 <input
// //                   type="text"
// //                   value={form.category || ""}
// //                   onChange={(e) => setForm({ ...form, category: e.target.value })}
// //                   className="border p-2 rounded w-full text-black"
// //                   placeholder="Category"
// //                 />
                
// //                 <input
// //                   type="number"
// //                   value={form.targetAmount || 0}
// //                   onChange={(e) => setForm({ ...form, targetAmount: Number(e.target.value) })}
// //                   className="border p-2 rounded w-full text-black"
// //                   placeholder="Target Amount"
// //                 />
                
// //                 <input
// //                   type="date"
// //                   value={form.deadline ? new Date(form.deadline).toISOString().split("T")[0] : ""}
// //                   onChange={(e) => setForm({ ...form, deadline: e.target.value })}
// //                   className="border p-2 rounded w-full text-black"
// //                   placeholder="Deadline"
// //                 />
// //                 <button
// //                   onClick={handleSave}
// //                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2"
// //                 >
// //                   Save Changes
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function CreatorDashboard() {
//   const [projects, setProjects] = useState([]);
//   const [activeProject, setActiveProject] = useState(null); // view/edit selected project
//   const [mode, setMode] = useState("view"); // view / edit
//   const [form, setForm] = useState({});
//   const [categories, setCategories] = useState([]); // for dropdown

//   useEffect(() => {
//     const fetchMyProjects = async () => {
//       try {
//         const res = await API.get("/projects/my/projects");
//         setProjects(res.data.data || []);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const res = await API.get("/categories"); // fetch categories
//         setCategories(res.data.data || []);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchMyProjects();
//     fetchCategories();
//   }, []);

//   const openProject = (project, modeType) => {
//     setActiveProject(project);
//     setForm(project); // initialize edit form
//     setMode(modeType);
//   };

//   const handleSave = async () => {
//     try {
//       await API.put(`/projects/${activeProject._id}`, form);
//       alert("Project updated successfully!");
//       setProjects(projects.map(p => p._id === activeProject._id ? form : p));
//       setActiveProject(null);
//       setMode("view");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   const closeModal = () => {
//     setActiveProject(null);
//     setMode("view");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Creator Dashboard 🎯</h1>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projects.length > 0 ? (
//           projects.map((p) => {
//             const raised = p.fundedAmount || 0;
//             const goal = p.targetAmount || 1;
//             const progress = Math.min((raised / goal) * 100, 100);

//             return (
//               <div
//                 key={p._id}
//                 className="bg-white/95 text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
//               >
//                 <h2 className="text-lg font-semibold mb-1">{p.title}</h2>

//                 <p className="text-sm text-gray-600 mb-2">
//                   Status:{" "}
//                   <span
//                     className={`font-semibold ${
//                       p.status === "ACTIVE"
//                         ? "text-green-600"
//                         : p.status === "PENDING"
//                         ? "text-yellow-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {p.status}
//                   </span>
//                 </p>

//                 <div className="mb-2">
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div
//                       className="bg-blue-600 h-2 rounded-full"
//                       style={{ width: `${progress}%` }}
//                     ></div>
//                   </div>
//                   <div className="flex justify-between text-xs mt-1 text-gray-600">
//                     <span>₹{raised}</span>
//                     <span>{Math.round(progress)}%</span>
//                   </div>
//                 </div>

//                 <p className="text-sm text-gray-500 mb-3">Goal: ₹{goal}</p>
//                 <p><b>Phone:</b> {activeProject.phoneNumber}</p>

//                 <div className="flex justify-between">
//                   <button
//                     onClick={() => openProject(p, "view")}
//                     className="text-sm bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition"
//                   >
//                     View
//                   </button>

//                   <button
//                     onClick={() => openProject(p, "edit")}
//                     className="text-sm bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-3 py-1 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition"
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-blue-200">No projects created yet</p>
//         )}
//       </div>

//       {activeProject && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
//           <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 rounded-2xl shadow-lg p-6 w-full max-w-2xl relative text-white">

//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white font-bold"
//             >
//               ✕
//             </button>

//             {mode === "view" && (
//               <div className="space-y-2">
//                 <h2 className="text-2xl font-bold">{activeProject.title}</h2>
//                 <p><b>Description:</b> {activeProject.description}</p>
//                 <p><b>Category:</b> {activeProject.category}</p>
//                 <p><b>Status:</b> {activeProject.status}</p>
//                 <p><b>Target Amount:</b> ₹{activeProject.targetAmount}</p>
//                 <p><b>Funded Amount:</b> ₹{activeProject.fundedAmount}</p>
//                 <p><b>Deadline:</b> {new Date(activeProject.deadline).toDateString()}</p>
//                 <input
//   value={form.phoneNumber || ""}
//   onChange={(e)=>setForm({...form,phoneNumber:e.target.value})}
// />
//               </div>
//             )}

//             {mode === "edit" && (
//               <div className="space-y-2">
//                 <input
//                   type="text"
//                   value={form.title || ""}
//                   onChange={(e) => setForm({ ...form, title: e.target.value })}
//                   className="border p-2 rounded w-full text-black"
//                   placeholder="Title"
//                 />

//                 <textarea
//                   value={form.description || ""}
//                   onChange={(e) => setForm({ ...form, description: e.target.value })}
//                   className="border p-2 rounded w-full text-black"
//                   placeholder="Description"
//                 />

//                 {/* Category Dropdown */}
//                 <select
//                   value={form.category || ""}
//                   onChange={(e) => setForm({ ...form, category: e.target.value })}
//                   className="border p-2 rounded w-full text-black"
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((c) => (
//                     <option key={c._id} value={c.name}>
//                       {c.name}
//                     </option>
//                   ))}
//                 </select>

               

//                 <input
//                   type="number"
//                   value={form.targetAmount || 0}
//                   onChange={(e) => setForm({ ...form, targetAmount: Number(e.target.value) })}
//                   className="border p-2 rounded w-full text-black"
//                   placeholder="Target Amount"
//                 />

               

//                 <input
//                   type="date"
//                   value={form.deadline ? new Date(form.deadline).toISOString().split("T")[0] : ""}
//                   onChange={(e) => setForm({ ...form, deadline: e.target.value })}
//                   className="border p-2 rounded w-full text-black"
//                   placeholder="Deadline"
//                 />

//                 <button
//                   onClick={handleSave}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function CreatorDashboard() {
//   const [projects, setProjects] = useState([]);
//   const [activeProject, setActiveProject] = useState(null);
//   const [mode, setMode] = useState("view");
//   const [form, setForm] = useState({});
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchMyProjects = async () => {
//       try {
//         const res = await API.get("/projects/my/projects");
//         setProjects(res.data.data || []);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const res = await API.get("/categories");
//         setCategories(res.data.data || []);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchMyProjects();
//     fetchCategories();
//   }, []);

//   const openProject = (project, modeType) => {
//     setActiveProject(project);
//     setForm(project);
//     setMode(modeType);
//   };

//   const closeModal = () => {
//     setActiveProject(null);
//     setMode("view");
//   };

//   const handleSave = async () => {
//     try {
//       const res = await API.put(`/projects/${activeProject._id}`, form);

//       alert("Project updated successfully!");

//       setProjects(
//         projects.map((p) =>
//           p._id === activeProject._id ? res.data.data : p
//         )
//       );

//       setActiveProject(null);
//       setMode("view");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Creator Dashboard 🎯</h1>

//       {/* PROJECT CARDS */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {projects.length > 0 ? (
//           projects.map((p) => {
//             const raised = p.fundedAmount || 0;
//             const goal = p.targetAmount || 1;
//             const progress = Math.min((raised / goal) * 100, 100);

//             return (
//               <div
//                 key={p._id}
//                 className="bg-white text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition"
//               >
//                 <h2 className="text-lg font-semibold">{p.title}</h2>

//                 <p className="text-sm text-gray-600">
//                   Status:
//                   <span className="ml-1 font-semibold">
//                     {p.status}
//                   </span>
//                 </p>

//                 {/* Progress */}
//                 <div className="mt-2">
//                   <div className="w-full bg-gray-200 h-2 rounded">
//                     <div
//                       className="bg-blue-600 h-2 rounded"
//                       style={{ width: `${progress}%` }}
//                     ></div>
//                   </div>

//                   <div className="flex justify-between text-xs mt-1">
//                     <span>₹{raised}</span>
//                     <span>{Math.round(progress)}%</span>
//                   </div>
//                 </div>

//                 <p className="text-sm mt-2">Goal: ₹{goal}</p>

//                 {/* ✅ FIXED PHONE */}
//                 <p className="text-sm">
//                   <b>Phone:</b> {p.phoneNumber || "N/A"}
//                 </p>

//                 <div className="flex justify-between mt-3">
//                   <button
//                     onClick={() => openProject(p, "view")}
//                     className="bg-blue-600 text-white px-3 py-1 rounded"
//                   >
//                     View
//                   </button>

//                   <button
//                     onClick={() => openProject(p, "edit")}
//                     className="bg-indigo-600 text-white px-3 py-1 rounded"
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p>No projects found</p>
//         )}
//       </div>

//       {/* MODAL */}
//       {activeProject && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
//           <div className="bg-white text-black p-6 rounded-xl w-full max-w-xl relative">

//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-xl"
//             >
//               ✕
//             </button>

//             {/* VIEW MODE */}
//             {mode === "view" && (
//               <>
//                 <h2 className="text-xl font-bold">
//                   {activeProject.title}
//                 </h2>

//                 <p>{activeProject.description}</p>
//                 <p>Category: {activeProject.category}</p>
//                 <p>Status: {activeProject.status}</p>
//                 <p>Target: ₹{activeProject.targetAmount}</p>
//                 <p>Funded: ₹{activeProject.fundedAmount}</p>
//                 <p>
//                   Deadline:{" "}
//                   {new Date(activeProject.deadline).toDateString()}
//                 </p>

//                 {/* ✅ SAFE PHONE */}
//                 <p>
//                   Phone: {activeProject?.phoneNumber || "N/A"}
//                 </p>
//               </>
//             )}

//             {/* EDIT MODE */}
//             {mode === "edit" && (
//               <>
//                 <input
//                   value={form.title || ""}
//                   onChange={(e) =>
//                     setForm({ ...form, title: e.target.value })
//                   }
//                   className="border p-2 w-full mb-2"
//                   placeholder="Title"
//                 />

//                 <textarea
//                   value={form.description || ""}
//                   onChange={(e) =>
//                     setForm({ ...form, description: e.target.value })
//                   }
//                   className="border p-2 w-full mb-2"
//                   placeholder="Description"
//                 />

//                 <select
//                   value={form.category || ""}
//                   onChange={(e) =>
//                     setForm({ ...form, category: e.target.value })
//                   }
//                   className="border p-2 w-full mb-2"
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((c) => (
//                     <option key={c._id} value={c.name}>
//                       {c.name}
//                     </option>
//                   ))}
//                 </select>

//                 <input
//                   type="number"
//                   value={form.targetAmount || ""}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       targetAmount: Number(e.target.value),
//                     })
//                   }
//                   className="border p-2 w-full mb-2"
//                   placeholder="Target Amount"
//                 />

//                 <input
//                   type="date"
//                   value={
//                     form.deadline
//                       ? new Date(form.deadline)
//                           .toISOString()
//                           .split("T")[0]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     setForm({ ...form, deadline: e.target.value })
//                   }
//                   className="border p-2 w-full mb-2"
//                 />

//                 {/* ✅ PHONE INPUT */}
//                 <input
//                   type="text"
//                   value={form.phoneNumber || ""}
//                   onChange={(e) =>
//                     setForm({
//                       ...form,
//                       phoneNumber: e.target.value,
//                     })
//                   }
//                   className="border p-2 w-full mb-2"
//                   placeholder="Phone Number"
//                 />

//                 <button
//                   onClick={handleSave}
//                   className="bg-green-600 text-white px-4 py-2"
//                 >
//                   Save
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import API from "../services/api";

export default function CreatorDashboard() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [mode, setMode] = useState("view");
  const [form, setForm] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchMyProjects();
    fetchCategories();
  }, []);

  const fetchMyProjects = async () => {
    try {
      const res = await API.get("/projects/my/projects");
      setProjects(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await API.get("/categories");
      setCategories(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ OPEN PROJECT (ONLY VIEW / EDIT — NO CREATE)
  const openProject = (project, modeType) => {
    setActiveProject(project);
    setMode(modeType);

    // 🔥 Clean form (only editable fields)
    setForm({
      title: project.title || "",
      description: project.description || "",
      category: project.category || "",
      targetAmount: project.targetAmount || "",
      deadline: project.deadline || "",
      phoneNumber: project.phoneNumber || "",
       email: project.email || "",
    });
  };

  const closeModal = () => {
    setActiveProject(null);
    setMode("view");
  };

  const handleSave = async () => {
    try {
      const res = await API.put(
        `/projects/${activeProject._id}`,
        form
      );

      alert("✅ Project updated successfully!");

      setProjects(
        projects.map((p) =>
          p._id === activeProject._id ? res.data.data : p
        )
      );

      closeModal();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Creator Dashboard 🎯
      </h1>

      {/* PROJECT CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((p) => {
            const raised = p.fundedAmount || 0;
            const goal = p.targetAmount || 1;
            const progress = Math.min(
              (raised / goal) * 100,
              100
            );

            return (
              <div
                key={p._id}
                className="bg-white text-black rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition"
              >
                <h2 className="text-lg font-semibold">
                  {p.title}
                </h2>

                <p className="text-sm text-gray-600">
                  Status:
                  <span className="ml-1 font-semibold">
                    {p.status}
                  </span>
                </p>

                {/* Progress */}
                <div className="mt-2">
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="bg-blue-600 h-2 rounded"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs mt-1">
                    <span>₹{raised}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                </div>

                <p className="text-sm mt-2">
                  Goal: ₹{goal}
                </p>

                {/* PHONE */}
                <p className="text-sm">
                  <b>Phone:</b>{" "}
                  {p.phoneNumber || "N/A"}
                </p>
                 <p className="text-sm">
                  <b>Email:</b>{" "}
                  {p.email || "N/A"}
                </p>

                <div className="flex justify-between mt-3">
                  <button
                    onClick={() => openProject(p, "view")}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>

                  <button
                    onClick={() => openProject(p, "edit")}
                    className="bg-indigo-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No projects found</p>
        )}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-xl w-full max-w-xl relative">

            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

            {/* VIEW MODE */}
            {mode === "view" && (
              <>
                <h2 className="text-xl font-bold">
                  {activeProject.title}
                </h2>

                <p>{activeProject.description}</p>
                <p>Category: {activeProject.category}</p>
                <p>Status: {activeProject.status}</p>
                <p>Target: ₹{activeProject.targetAmount}</p>
                <p>Funded: ₹{activeProject.fundedAmount}</p>
                <p>
                  Deadline:{" "}
                  {new Date(
                    activeProject.deadline
                  ).toDateString()}
                </p>

                <p>
                  Phone:{" "}
                  {activeProject.phoneNumber || "N/A"}
                </p>
                  <p>
                  email:{" "}
                  {activeProject.email || "N/A"}
                </p>
              </>
            )}

            {/* EDIT MODE */}
            {mode === "edit" && (
              <>
                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                    })
                  }
                  className="border p-2 w-full mb-2"
                  placeholder="Title"
                />

                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value,
                    })
                  }
                  className="border p-2 w-full mb-2"
                  placeholder="Description"
                />

                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  className="border p-2 w-full mb-2"
                >
                  <option value="">
                    Select Category
                  </option>
                  {categories.map((c) => (
                    <option key={c._id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  value={form.targetAmount}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      targetAmount: Number(
                        e.target.value
                      ),
                    })
                  }
                  className="border p-2 w-full mb-2"
                  placeholder="Target Amount"
                />

                <input
                  type="date"
                  value={
                    form.deadline
                      ? new Date(form.deadline)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      deadline: e.target.value,
                    })
                  }
                  className="border p-2 w-full mb-2"
                />

                <input
                  type="text"
                  value={form.phoneNumber}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="border p-2 w-full mb-2"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="border p-2 w-full mb-2"
                  placeholder="Email"
                />

                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}