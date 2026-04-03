// // // // // import { useEffect, useState } from "react";
// // // // // import API from "../services/api";
// // // // // import ProjectCard from "../components/ProjectCard";

// // // // // const Home = () => {
// // // // //   const [projects, setProjects] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const fetchProjects = async () => {
// // // // //       try {
// // // // //         const res = await API.get("/projects");
// // // // //         setProjects(res.data.data); // IMPORTANT
// // // // //       } catch (err) {
// // // // //         console.log(err);
// // // // //       }
// // // // //     };

// // // // //     fetchProjects();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="p-4 grid grid-cols-3 gap-4">
// // // // //       {projects.map((project) => (
// // // // //         <ProjectCard key={project._id} project={project} />
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;
// // // // import { useEffect, useState } from "react";
// // // // import API from "../services/api";
// // // // import ProjectCard from "../components/ProjectCard";

// // // // const Home = () => {
// // // //   const [projects, setProjects] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchProjects = async () => {
// // // //       try {
// // // //         const res = await API.get("/projects");
// // // //         setProjects(res.data.data); // IMPORTANT
// // // //       } catch (err) {
// // // //         console.log(err);
// // // //       }
// // // //     };

// // // //     fetchProjects();
// // // //   }, []);

// // // //  return (
// // // //   <div className="p-6">
// // // //     <h1 className="text-2xl font-bold mb-4">
// // // //       Explore Projects 🚀
// // // //     </h1>

// // // //     <div className="grid md:grid-cols-3 gap-6">
// // // //       {projects.map((project) => (
// // // //         <ProjectCard key={project._id} project={project} />
// // // //       ))}
// // // //     </div>
// // // //   </div>
// // // // );
// // // // };

// // // // export default Home;
// // // import { useEffect, useState } from "react";
// // // import API from "../services/api";
// // // import ProjectCard from "../components/ProjectCard";

// // // export default function Home() {
// // //   const [projects, setProjects] = useState([]);

// // //   useEffect(() => {
// // //     const fetchProjects = async () => {
// // //       try {
// // //         const res = await API.get("/projects");
// // //         setProjects(res.data.data);
// // //       } catch (err) {
// // //         console.log(err);
// // //       }
// // //     };

// // //     fetchProjects();
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900">
// // //       <div className="max-w-7xl mx-auto px-6 py-10">
// // //         {/* Header */}
// // //         <div className="mb-8 text-white">
// // //           <h1 className="text-3xl font-bold">Explore Projects 🚀</h1>
// // //           <p className="text-blue-200 mt-1">
// // //             Discover and support innovative ideas
// // //           </p>
// // //         </div>

// // //         {/* Projects Grid */}
// // //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //           {projects.length > 0 ? (
// // //             projects.map((project) => (
// // //               <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300">
// // //                 <ProjectCard key={project._id} project={project} />
// // //               </div>
// // //             ))
// // //           ) : (
// // //             <p className="text-blue-200">No projects found</p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import API from "../services/api";
// // import ProjectCard from "../components/ProjectCard";

// // export default function Home() {
// //   const [projects, setProjects] = useState([]);

// //   useEffect(() => {
// //     const fetchProjects = async () => {
// //       try {
// //         const res = await API.get("/projects");
// //         setProjects(res.data.data || []);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };

// //     fetchProjects();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900">
// //       <div className="max-w-7xl mx-auto px-6 py-10">
        
// //         {/* Header */}
// //         <div className="mb-8 text-white">
// //           <h1 className="text-3xl font-bold">Explore Projects 🚀</h1>
// //           <p className="text-blue-200 mt-1">
// //             Discover and support innovative ideas
// //           </p>
// //         </div>

// //         {/* Projects Grid */}
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {projects.length > 0 ? (
// //             projects.map((project) => (
// //               <div
// //                 key={project._id} // ✅ FIXED (important)
// //                 className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-5 hover:scale-[1.03] transition duration-300"
// //               >
// //                 <ProjectCard project={project} />
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-blue-200">No projects found</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import API from "../services/api";
// import ProjectCard from "../components/ProjectCard";

// export default function Home() {
//   const [projects, setProjects] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sort, setSort] = useState("");

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await API.get("/projects");
//         setProjects(res.data.data || []);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // 🔥 FILTER LOGIC
//   const filteredProjects = projects
//     .filter((p) =>
//       p.title.toLowerCase().includes(search.toLowerCase())
//     )
//     .filter((p) =>
//       category ? p.category === category : true
//     )
//     .sort((a, b) => {
//       if (sort === "low") return a.targetAmount - b.targetAmount;
//       if (sort === "high") return b.targetAmount - a.targetAmount;
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900">
//       <div className="max-w-7xl mx-auto px-6 py-10 text-white">

//         <h1 className="text-3xl font-bold mb-6">Explore Projects 🚀</h1>

//         {/* 🔍 SEARCH + FILTER */}
//         <div className="flex flex-wrap gap-4 mb-6">
          
//           <input
//             placeholder="Search projects..."
//             className="p-2 rounded text-black"
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <select
//             className="p-2 rounded text-black"
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">All Categories</option>
//             <option>Tech</option>
//             <option>Health</option>
//             <option>Education</option>
//             <option>Business</option>
//             <option>Startup</option>
//           </select>

//           <select
//             className="p-2 rounded text-black"
//             onChange={(e) => setSort(e.target.value)}
//           >
//             <option value="">Sort By</option>
//             <option value="low">Low Budget</option>
//             <option value="high">High Budget</option>
//           </select>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {filteredProjects.map((project) => (
//             <ProjectCard key={project._id} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import API from "../services/api";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-10 text-white">

        <h1 className="text-3xl font-bold mb-6">
          Explore Projects 🚀
        </h1>

        {/* 🔍 SEARCH + FILTER */}
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            placeholder="Search projects..."
            className="p-2 rounded text-black"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="p-2 rounded text-black"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option>Tech</option>
            <option>Health</option>
            <option>Education</option>
            <option>Business</option>
            <option>Startup</option>
          </select>

          <select
            className="p-2 rounded text-black"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Low Budget</option>
            <option value="high">High Budget</option>
          </select>
        </div>

        {/* 🔥 TRUST / CONTACT BANNER */}
        <div className="bg-white text-black p-4 rounded-lg mb-6 shadow-md border-l-4 border-yellow-600">
          <p className="font-semibold">
            ⚠️ Want to verify the authenticity of any project?
          </p>
          <p className="text-sm mt-1">
            If you have any doubts or need more details regarding a project, 
            feel free to contact the admin directly at{" "}
            <b className="text-black">+91 9876543210</b>.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}