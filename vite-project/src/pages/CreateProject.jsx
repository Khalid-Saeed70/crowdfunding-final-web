// // // // // // // // // import { useState } from "react";
// // // // // // // // // import API from "../services/api";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // const CreateProject = () => {
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const [form, setForm] = useState({
// // // // // // // // //     title: "",
// // // // // // // // //     description: "",
// // // // // // // // //     category: "",
// // // // // // // // //     targetAmount: "",
// // // // // // // // //     deadline: "",
// // // // // // // // //   });

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();

// // // // // // // // //     try {
// // // // // // // // //       await API.post("/projects", form);
// // // // // // // // //       alert("Project Created (Draft)");
// // // // // // // // //       navigate("/creator");
// // // // // // // // //     } catch (err) {
// // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex justify-center mt-10">
// // // // // // // // //       <form onSubmit={handleSubmit} className="border p-6 w-96">
// // // // // // // // //         <h2 className="text-xl mb-4">Create Project</h2>

// // // // // // // // //         <input className="border p-2 w-full mb-3" placeholder="Title"
// // // // // // // // //           onChange={(e)=>setForm({...form,title:e.target.value})}/>

// // // // // // // // //         <textarea className="border p-2 w-full mb-3" placeholder="Description"
// // // // // // // // //           onChange={(e)=>setForm({...form,description:e.target.value})}/>

// // // // // // // // //         <input className="border p-2 w-full mb-3" placeholder="Category"
// // // // // // // // //           onChange={(e)=>setForm({...form,category:e.target.value})}/>

// // // // // // // // //         <input type="number" className="border p-2 w-full mb-3" placeholder="Target Amount"
// // // // // // // // //           onChange={(e)=>setForm({...form,targetAmount:e.target.value})}/>

// // // // // // // // //         <input type="date" className="border p-2 w-full mb-3"
// // // // // // // // //           onChange={(e)=>setForm({...form,deadline:e.target.value})}/>

// // // // // // // // //         <button className="bg-green-500 text-white w-full p-2">
// // // // // // // // //           Create
// // // // // // // // //         </button>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default CreateProject;
// // // // // // // // import { useState } from "react";
// // // // // // // // import API from "../services/api";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // export default function CreateProject() {
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const [form, setForm] = useState({
// // // // // // // //     title: "",
// // // // // // // //     description: "",
// // // // // // // //     category: "",
// // // // // // // //     targetAmount: "",
// // // // // // // //     deadline: "",
// // // // // // // //   });

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     try {
// // // // // // // //       await API.post("/projects", form);
// // // // // // // //       alert("Project Created (Draft)");
// // // // // // // //       navigate("/creator");
// // // // // // // //     } catch (err) {
// // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      
// // // // // // // //       <div className="bg-white/95 text-black backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        
// // // // // // // //         {/* Heading */}
// // // // // // // //         <div className="text-center mb-6">
// // // // // // // //           <h1 className="text-2xl font-bold">Create Project 🚀</h1>
// // // // // // // //           <p className="text-gray-500 text-sm">
// // // // // // // //             Turn your idea into reality by raising funds
// // // // // // // //           </p>
// // // // // // // //         </div>

// // // // // // // //         {/* Form */}
// // // // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
          
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Project Title"
// // // // // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             onChange={(e) =>
// // // // // // // //               setForm({ ...form, title: e.target.value })
// // // // // // // //             }
// // // // // // // //             required
// // // // // // // //           />

// // // // // // // //           <textarea
// // // // // // // //             placeholder="Project Description"
// // // // // // // //             rows="3"
// // // // // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             onChange={(e) =>
// // // // // // // //               setForm({ ...form, description: e.target.value })
// // // // // // // //             }
// // // // // // // //             required
// // // // // // // //           ></textarea>

// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Category (Tech, Health, etc.)"
// // // // // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             onChange={(e) =>
// // // // // // // //               setForm({ ...form, category: e.target.value })
// // // // // // // //             }
// // // // // // // //           />

// // // // // // // //           <input
// // // // // // // //             type="number"
// // // // // // // //             placeholder="Target Amount (₹)"
// // // // // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             onChange={(e) =>
// // // // // // // //               setForm({ ...form, targetAmount: e.target.value })
// // // // // // // //             }
// // // // // // // //             required
// // // // // // // //           />

// // // // // // // //           <input
// // // // // // // //             type="date"
// // // // // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // //             onChange={(e) =>
// // // // // // // //               setForm({ ...form, deadline: e.target.value })
// // // // // // // //             }
// // // // // // // //             required
// // // // // // // //           />

// // // // // // // //           <button
// // // // // // // //             type="submit"
// // // // // // // //             className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition font-semibold shadow-lg"
// // // // // // // //           >
// // // // // // // //             Create Project
// // // // // // // //           </button>
// // // // // // // //         </form>

// // // // // // // //         {/* Footer Tip */}
// // // // // // // //         <p className="text-xs text-gray-500 mt-4 text-center">
// // // // // // // //           Tip: Add a clear title and description to attract more investors 💡
// // // // // // // //         </p>

// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // import { useState, useEffect } from "react";
// // // // // import API from "../services/api";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // export default function CreateProject() {
// // // // //   const navigate = useNavigate();

// // // // //   const [form, setForm] = useState({
// // // // //     title: "",
// // // // //     description: "",
// // // // //     category: "",
// // // // //     targetAmount: "",
// // // // //     deadline: "",
     
// // // // //   });

// // // // //   const [categories, setCategories] = useState([]);

// // // // //   // 🔥 Fetch categories from backend
// // // // //   useEffect(() => {
// // // // //     const fetchCategories = async () => {
// // // // //       try {
// // // // //         const res = await API.get("/categories"); // make sure route exists
// // // // //         setCategories(res.data.data);
// // // // //       } catch (err) {
// // // // //         console.log(err);
// // // // //       }
// // // // //     };

// // // // //     fetchCategories();
// // // // //   }, []);

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     try {
// // // // //       await API.post("/projects", form);
// // // // //       alert("Project Created (Draft)");
// // // // //       navigate("/creator");
// // // // //     } catch (err) {
// // // // //       alert(err.response?.data?.message || "Error");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      
// // // // //       <div className="bg-white/95 text-black backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        
// // // // //         {/* Heading */}
// // // // //         <div className="text-center mb-6">
// // // // //           <h1 className="text-2xl font-bold">Create Project 🚀</h1>
// // // // //           <p className="text-gray-500 text-sm">
// // // // //             Turn your idea into reality by raising funds
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Form */}
// // // // //         <form onSubmit={handleSubmit} className="space-y-4">
          
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Project Title"
// // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             onChange={(e) =>
// // // // //               setForm({ ...form, title: e.target.value })
// // // // //             }
// // // // //             required
// // // // //           />

// // // // //           <textarea
// // // // //             placeholder="Project Description"
// // // // //             rows="3"
// // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             onChange={(e) =>
// // // // //               setForm({ ...form, description: e.target.value })
// // // // //             }
// // // // //             required
// // // // //           ></textarea>

// // // // //           {/* 🔥 CATEGORY DROPDOWN */}
// // // // //           <select
// // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             value={form.category}
// // // // //             onChange={(e) =>
// // // // //               setForm({ ...form, category: e.target.value })
// // // // //             }
// // // // //             required
// // // // //           >
// // // // //             <option value="">Select Category</option>
// // // // //             {categories.map((cat) => (
// // // // //               <option key={cat._id} value={cat.name}>
// // // // //                 {cat.name}
// // // // //               </option>
// // // // //             ))}
// // // // //           </select>

// // // // //           <input
// // // // //             type="number"
// // // // //             placeholder="Target Amount (₹)"
// // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             onChange={(e) =>
// // // // //               setForm({ ...form, targetAmount: e.target.value })
// // // // //             }
// // // // //             required
// // // // //           />

// // // // //           <input
// // // // //             type="date"
// // // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // // //             onChange={(e) =>
// // // // //               setForm({ ...form, deadline: e.target.value })
// // // // //             }
// // // // //             required
// // // // //           />
         

// // // // //           <button
// // // // //             type="submit"
// // // // //             className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition font-semibold shadow-lg"
// // // // //           >
// // // // //             Create Project
// // // // //           </button>
// // // // //         </form>

// // // // //         <p className="text-xs text-gray-500 mt-4 text-center">
// // // // //           Tip: Choose correct category to attract right investors 💡
// // // // //         </p>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { useState, useEffect } from "react";
// // // // import API from "../services/api";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function CreateProject() {
// // // //   const navigate = useNavigate();

// // // //   const [form, setForm] = useState({
// // // //     title: "",
// // // //     description: "",
// // // //     category: "",
// // // //     targetAmount: "",
// // // //     deadline: "",
// // // //     image: null, // 🖼️
// // // //     video: null, // 🎥
// // // //   });

// // // //   const [categories, setCategories] = useState([]);

// // // //   // Fetch categories
// // // //   useEffect(() => {
// // // //     const fetchCategories = async () => {
// // // //       try {
// // // //         const res = await API.get("/categories");
// // // //         setCategories(res.data.data);
// // // //       } catch (err) {
// // // //         console.log(err);
// // // //       }
// // // //     };
// // // //     fetchCategories();
// // // //   }, []);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       // Use FormData for file upload
// // // //       const formData = new FormData();
// // // //       formData.append("title", form.title);
// // // //       formData.append("description", form.description);
// // // //       formData.append("category", form.category);
// // // //       formData.append("targetAmount", form.targetAmount);
// // // //       formData.append("deadline", form.deadline);
// // // //       if (form.image) formData.append("image", form.image);
// // // //       if (form.video) formData.append("video", form.video);

// // // //       await API.post("/projects", formData, {
// // // //         headers: { "Content-Type": "multipart/form-data" },
// // // //       });

// // // //       alert("Project Created (Draft)");
// // // //       navigate("/creator");
// // // //     } catch (err) {
// // // //       alert(err.response?.data?.message || "Error");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// // // //       <div className="bg-white/95 text-black backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-lg">
// // // //         <div className="text-center mb-6">
// // // //           <h1 className="text-2xl font-bold">Create Project 🚀</h1>
// // // //           <p className="text-gray-500 text-sm">Turn your idea into reality by raising funds</p>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit} className="space-y-4">

// // // //           <input
// // // //             type="text"
// // // //             placeholder="Project Title"
// // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // //             onChange={(e) => setForm({ ...form, title: e.target.value })}
// // // //             required
// // // //           />

// // // //           <textarea
// // // //             placeholder="Project Description"
// // // //             rows="3"
// // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // //             onChange={(e) => setForm({ ...form, description: e.target.value })}
// // // //             required
// // // //           ></textarea>

// // // //           {/* CATEGORY */}
// // // //           <select
// // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // //             value={form.category}
// // // //             onChange={(e) => setForm({ ...form, category: e.target.value })}
// // // //             required
// // // //           >
// // // //             <option value="">Select Category</option>
// // // //             {categories.map((cat) => (
// // // //               <option key={cat._id} value={cat.name}>{cat.name}</option>
// // // //             ))}
// // // //           </select>

// // // //           <input
// // // //             type="number"
// // // //             placeholder="Target Amount (₹)"
// // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // //             onChange={(e) => setForm({ ...form, targetAmount: e.target.value })}
// // // //             required
// // // //           />

// // // //           <input
// // // //             type="date"
// // // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // // //             onChange={(e) => setForm({ ...form, deadline: e.target.value })}
// // // //             required
// // // //           />

// // // //           {/* IMAGE UPLOAD */}
// // // //           <label className="block text-sm font-medium">Upload Image</label>
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
// // // //             className="w-full p-2 rounded-xl bg-gray-100"
// // // //           />

// // // //           {/* VIDEO UPLOAD */}
// // // //           <label className="block text-sm font-medium">Upload Video</label>
// // // //           <input
// // // //             type="file"
// // // //             accept="video/*"
// // // //             onChange={(e) => setForm({ ...form, video: e.target.files[0] })}
// // // //             className="w-full p-2 rounded-xl bg-gray-100"
// // // //           />

// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition font-semibold shadow-lg"
// // // //           >
// // // //             Create Project
// // // //           </button>
// // // //         </form>

// // // //         <p className="text-xs text-gray-500 mt-4 text-center">
// // // //           Tip: Choose correct category to attract right investors 💡
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState, useEffect } from "react";
// // // import API from "../services/api";
// // // import { useNavigate } from "react-router-dom";

// // // export default function CreateProject() {
// // //   const navigate = useNavigate();

// // //   const [form, setForm] = useState({
// // //     title: "",
// // //     description: "",
// // //     category: "",
// // //     targetAmount: "",
// // //     deadline: "",
// // //   });

// // //   const [categories, setCategories] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   // ✅ Fetch categories
// // //   useEffect(() => {
// // //     const fetchCategories = async () => {
// // //       try {
// // //         const res = await API.get("/categories");
// // //         setCategories(res.data.data || []);
// // //       } catch (err) {
// // //         console.log(err);
// // //       }
// // //     };

// // //     fetchCategories();
// // //   }, []);

// // //   // ✅ Handle submit (FINAL FIX)
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     // 🔥 Validation
// // //     if (
// // //       !form.title ||
// // //       !form.description ||
// // //       !form.category ||
// // //       !form.targetAmount ||
// // //       !form.deadline
// // //     ) {
// // //       alert("All fields are required");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);

// // //       await API.post("/projects", {
// // //         title: form.title,
// // //         description: form.description,
// // //         category: form.category,
// // //         targetAmount: Number(form.targetAmount),
// // //         deadline: form.deadline,
// // //       });

// // //       alert("✅ Project Created Successfully 🚀");
// // //       navigate("/creator");
// // //     } catch (err) {
// // //       console.log(err);
// // //       alert(err.response?.data?.message || "Error creating project");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
// // //       <div className="bg-white/95 text-black shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        
// // //         {/* Heading */}
// // //         <div className="text-center mb-6">
// // //           <h1 className="text-2xl font-bold">Create Project 🚀</h1>
// // //           <p className="text-gray-500 text-sm">
// // //             Turn your idea into reality by raising funds
// // //           </p>
// // //         </div>

// // //         {/* Form */}
// // //         <form onSubmit={handleSubmit} className="space-y-4">

// // //           {/* Title */}
// // //           <input
// // //             type="text"
// // //             placeholder="Project Title"
// // //             value={form.title}
// // //             onChange={(e) =>
// // //               setForm({ ...form, title: e.target.value })
// // //             }
// // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // //           />

// // //           {/* Description */}
// // //           <textarea
// // //             placeholder="Project Description"
// // //             rows="3"
// // //             value={form.description}
// // //             onChange={(e) =>
// // //               setForm({ ...form, description: e.target.value })
// // //             }
// // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // //           />

// // //           {/* Category */}
// // //           <select
// // //             value={form.category}
// // //             onChange={(e) =>
// // //               setForm({ ...form, category: e.target.value })
// // //             }
// // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // //           >
// // //             <option value="">Select Category</option>
// // //             {categories.map((cat) => (
// // //               <option key={cat._id} value={cat.name}>
// // //                 {cat.name}
// // //               </option>
// // //             ))}
// // //           </select>

// // //           {/* Target Amount */}
// // //           <input
// // //             type="number"
// // //             placeholder="Target Amount (₹)"
// // //             value={form.targetAmount}
// // //             onChange={(e) =>
// // //               setForm({ ...form, targetAmount: e.target.value })
// // //             }
// // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // //           />

// // //           {/* Deadline */}
// // //           <input
// // //             type="date"
// // //             value={form.deadline}
// // //             onChange={(e) =>
// // //               setForm({ ...form, deadline: e.target.value })
// // //             }
// // //             className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
// // //           />

// // //           {/* Submit Button */}
// // //           <button
// // //             type="submit"
// // //             disabled={loading}
// // //             className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition font-semibold shadow-lg"
// // //           >
// // //             {loading ? "Creating..." : "Create Project"}
// // //           </button>
// // //         </form>

// // //         {/* Footer */}
// // //         <p className="text-xs text-gray-500 mt-4 text-center">
// // //           Tip: Choose correct category to attract investors 💡
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useState, useEffect } from "react";
// // import API from "../services/api";
// // import { useNavigate } from "react-router-dom";

// // export default function CreateProject() {
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     title: "",
// //     description: "",
// //     category: "",
// //     targetAmount: "",
// //     deadline: "",
// //     phoneNumber: "",
// //   });

// //   const [categories, setCategories] = useState([]);

// //   useEffect(() => {
// //     API.get("/categories").then((res) =>
// //       setCategories(res.data.data)
// //     );
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await API.post("/projects", {
// //         ...form,
// //         targetAmount: Number(form.targetAmount),
// //       });

// //       alert("Project Created 🚀");
// //       navigate("/creator");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-3 p-6">
// //       <input placeholder="Title"
// //         onChange={(e)=>setForm({...form,title:e.target.value})} />

// //       <textarea placeholder="Description"
// //         onChange={(e)=>setForm({...form,description:e.target.value})} />

// //       <select onChange={(e)=>setForm({...form,category:e.target.value})}>
// //         <option>Select</option>
// //         {categories.map(c=><option key={c._id}>{c.name}</option>)}
// //       </select>

// //       <input type="number" placeholder="Target"
// //         onChange={(e)=>setForm({...form,targetAmount:e.target.value})} />

// //       <input type="date"
// //         onChange={(e)=>setForm({...form,deadline:e.target.value})} />

// //       {/* ✅ PHONE */}
// //       <input placeholder="Phone Number"
// //         onChange={(e)=>setForm({...form,phoneNumber:e.target.value})} />

// //       <button>Create</button>
// //     </form>
// //   );
// // }
// import { useState, useEffect } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// export default function CreateProject() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     category: "",
//     targetAmount: "",
//     deadline: "",
//     phoneNumber: "",
//   });

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     API.get("/categories").then((res) =>
//       setCategories(res.data.data || [])
//     );
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/projects", {
//         ...form,
//         targetAmount: Number(form.targetAmount),
//       });

//       alert("Project Created 🚀");
//       navigate("/creator");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-3 p-6">

//       <input
//         placeholder="Title"
//         value={form.title}
//         onChange={(e)=>setForm({...form,title:e.target.value})}
//       />

//       <textarea
//         placeholder="Description"
//         value={form.description}
//         onChange={(e)=>setForm({...form,description:e.target.value})}
//       />

//       <select
//         value={form.category}
//         onChange={(e)=>setForm({...form,category:e.target.value})}
//       >
//         <option value="">Select</option>
//         {categories.map(c => (
//           <option key={c._id} value={c.name}>{c.name}</option>
//         ))}
//       </select>

//       <input
//         type="number"
//         placeholder="Target"
//         value={form.targetAmount}
//         onChange={(e)=>setForm({...form,targetAmount:e.target.value})}
//       />

//       <input
//         type="date"
//         value={form.deadline}
//         onChange={(e)=>setForm({...form,deadline:e.target.value})}
//       />

//       {/* ✅ PHONE FIELD FIXED */}
//       <input
//         placeholder="Phone Number"
//         value={form.phoneNumber}
//         onChange={(e)=>setForm({...form,phoneNumber:e.target.value})}
//       />

//       <button type="submit">Create</button>
//     </form>
//   );
// }
import { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    targetAmount: "",
    deadline: "",
    phoneNumber: "", // ✅ added
    email:"",
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await API.get("/categories");
        setCategories(res.data.data || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.description ||
      !form.category ||
      !form.targetAmount ||
      !form.deadline ||
      !form.phoneNumber||
      !form.email
    ) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      await API.post("/projects", {
        ...form,
        targetAmount: Number(form.targetAmount),
      });

      alert("✅ Project Created Successfully 🚀");
      navigate("/creator");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      
      <div className="bg-white/95 text-black backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-lg">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Create Project 🚀</h1>
          <p className="text-gray-500 text-sm">
            Turn your idea into reality by raising funds
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <input
            type="text"
            placeholder="Project Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Description */}
          <textarea
            placeholder="Project Description"
            rows="3"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Category */}
          <select
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Target */}
          <input
            type="number"
            placeholder="Target Amount (₹)"
            value={form.targetAmount}
            onChange={(e) =>
              setForm({ ...form, targetAmount: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Deadline */}
          <input
            type="date"
            value={form.deadline}
            onChange={(e) =>
              setForm({ ...form, deadline: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* ✅ PHONE FIELD */}
          <input
            type="text"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm({ ...form, phoneNumber: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />
           <input
            type="text"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition font-semibold shadow-lg"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          Tip: Add clear details & phone number to gain trust 💡
        </p>
      </div>
    </div>
  );
}