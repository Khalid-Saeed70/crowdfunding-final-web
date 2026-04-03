// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // const ProjectCard = ({ project }) => {
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const percent =
// // // // // // // //     (project.fundedAmount / project.targetAmount) * 100;

// // // // // // // //   return (
// // // // // // // //     <div className="border p-4 rounded shadow">
// // // // // // // //       <h2 className="text-xl font-bold">{project.title}</h2>
// // // // // // // //       <p>{project.description}</p>

// // // // // // // //       <div className="bg-gray-200 h-3 mt-2 rounded">
// // // // // // // //         <div
// // // // // // // //           className="bg-green-500 h-3 rounded"
// // // // // // // //           style={{ width: `${percent}%` }}
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       <p className="mt-2">
// // // // // // // //         ₹{project.fundedAmount} / ₹{project.targetAmount}
// // // // // // // //       </p>

// // // // // // // //       <button
// // // // // // // //         onClick={() => navigate(`/project/${project._id}`)}
// // // // // // // //         className="bg-blue-500 text-white px-3 py-1 mt-2"
// // // // // // // //       >
// // // // // // // //         View & Invest
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProjectCard;
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const ProjectCard = ({ project }) => {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const percent =
// // // // // // //     (project.fundedAmount / project.targetAmount) * 100;

// // // // // // //   return (
// // // // // // //     <div className="card">
// // // // // // //       <h2 className="text-lg font-bold mb-1">{project.title}</h2>
// // // // // // //       <p className="text-sm text-gray-600 mb-2">
// // // // // // //         {project.description}
// // // // // // //       </p>

// // // // // // //       {/* Progress */}
// // // // // // //       <div className="w-full bg-gray-200 h-2 rounded">
// // // // // // //         <div
// // // // // // //           className="bg-blue-600 h-2 rounded"
// // // // // // //           style={{ width: `${percent}%` }}
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       <p className="text-sm mt-2">
// // // // // // //         ₹{project.fundedAmount} raised of ₹{project.targetAmount}
// // // // // // //       </p>

// // // // // // //       <button
// // // // // // //         onClick={() => navigate(`/project/${project._id}`)}
// // // // // // //         className="btn btn-primary mt-3 w-full"
// // // // // // //       >
// // // // // // //         View & Invest
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProjectCard;
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const ProjectCard = ({ project }) => {
// // // // // //   const navigate = useNavigate();

// // // // // //   const percent =
// // // // // //     project.targetAmount > 0
// // // // // //       ? (project.fundedAmount / project.targetAmount) * 100
// // // // // //       : 0;

// // // // // //   return (
// // // // // //     <div className="card text-black">
// // // // // //       <h2 className="text-lg font-bold mb-1">{project.title}</h2>

// // // // // //       <p className="text-sm text-black mb-2">
// // // // // //         {project.description}
// // // // // //       </p>

// // // // // //       {/* Progress */}
// // // // // //       <div className="w-full bg-gray-200 h-2 rounded">
// // // // // //         <div
// // // // // //           className="bg-blue-600 h-2 rounded"
// // // // // //           style={{ width: `${percent}%` }}
// // // // // //         />
// // // // // //       </div>

// // // // // //       <p className="text-sm mt-2 text-black">
// // // // // //         ₹{project.fundedAmount} raised of ₹{project.targetAmount}
// // // // // //       </p>

// // // // // //       {/* 🔥 BUTTONS */}
// // // // // //       <div className="flex gap-2 mt-3">
        
// // // // // //         {/* VIEW BUTTON (Public) */}
// // // // // //         <button
// // // // // //           onClick={() => navigate(`/project/${project._id}`)}
// // // // // //           className="btn bg-gray-800 text-white w-full"
// // // // // //         >
// // // // // //           View
// // // // // //         </button>

// // // // // //         {/* INVEST BUTTON */}
// // // // // //         <button
// // // // // //           onClick={() => navigate(`/project/${project._id}`)}
// // // // // //           className="btn btn-primary w-full"
// // // // // //         >
// // // // // //           Invest
// // // // // //         </button>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProjectCard;
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const ProjectCard = ({ project }) => {
// // // // //   const navigate = useNavigate();

// // // // //   const percent =
// // // // //     project.targetAmount > 0
// // // // //       ? (project.fundedAmount / project.targetAmount) * 100
// // // // //       : 0;

// // // // //   return (
// // // // //     <div className="bg-white p-4 rounded-xl shadow-md text-black">
// // // // //       <h2 className="text-lg font-bold mb-1">{project.title}</h2>

// // // // //       <p className="text-sm mb-2">{project.description}</p>

// // // // //       {/* Progress */}
// // // // //       <div className="w-full bg-gray-200 h-2 rounded">
// // // // //         <div
// // // // //           className="bg-blue-600 h-2 rounded"
// // // // //           style={{ width: `${percent}%` }}
// // // // //         />
// // // // //       </div>

// // // // //       <p className="text-sm mt-2">
// // // // //         ₹{project.fundedAmount} raised of ₹{project.targetAmount}
// // // // //       </p>

// // // // //       {/* 🔥 BUTTONS */}
// // // // //       <div className="flex gap-2 mt-3">
        
// // // // //         {/* VIEW */}
// // // // //         <button
// // // // //           onClick={() =>
// // // // //             navigate(`/project/${project._id}?mode=view`)
// // // // //           }
// // // // //           className="bg-gray-800 text-white px-3 py-2 rounded w-full"
// // // // //         >
// // // // //           View
// // // // //         </button>

// // // // //         {/* INVEST */}
// // // // //         <button
// // // // //           onClick={() =>
// // // // //             navigate(`/project/${project._id}?mode=invest`)
// // // // //           }
// // // // //           className="bg-blue-600 text-white px-3 py-2 rounded w-full"
// // // // //         >
// // // // //           Invest
// // // // //         </button>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProjectCard;
// // // // import { useNavigate } from "react-router-dom";

// // // // const ProjectCard = ({ project }) => {
// // // //   const navigate = useNavigate();

// // // //   const percent =
// // // //     project.targetAmount > 0
// // // //       ? (project.fundedAmount / project.targetAmount) * 100
// // // //       : 0;

// // // //   return (
// // // //     <div className="bg-white p-4 rounded-xl shadow-md text-black">
// // // //       <h2 className="text-lg font-bold mb-1">{project.title}</h2>
// // // //       <p className="text-sm mb-2">{project.description}</p>

// // // //       {/* Progress */}
// // // //       <div className="w-full bg-gray-200 h-2 rounded">
// // // //         <div
// // // //           className="bg-blue-600 h-2 rounded"
// // // //           style={{ width: `${percent}%` }}
// // // //         />
// // // //       </div>

// // // //       <p className="text-sm mt-2">
// // // //         ₹{project.fundedAmount} raised of ₹{project.targetAmount}
// // // //       </p>

// // // //       {/* 🔥 BUTTONS */}
// // // //       <div className="flex gap-2 mt-3">
// // // //         {/* VIEW */}
// // // //         <button
// // // //           onClick={() => navigate(`/project/${project._id}?mode=view`)}
// // // //           className="bg-blue-600 text-white px-3 py-2 rounded w-full"
// // // //         >
// // // //           View
// // // //         </button>

// // // //         {/* INVEST */}
// // // //         <button
// // // //           onClick={() => navigate(`/project/${project._id}?mode=invest`)}
// // // //           className="bg-blue-600 text-white px-3 py-2 rounded w-full"
// // // //         >
// // // //           Invest
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProjectCard;
// // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // const ProjectCard = ({ project }) => {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();
  
// // // //   // Current mode from query string
// // // //   const params = new URLSearchParams(location.search);
// // // //   const mode = params.get("mode"); // "view" / "invest"

// // // //   const percent =
// // // //     project.targetAmount > 0
// // // //       ? (project.fundedAmount / project.targetAmount) * 100
// // // //       : 0;

// // // //   // Button classes
// // // //   const buttonBase = "px-3 py-2 rounded w-full text-white";
// // // //   const viewButtonClass =
// // // //     mode === "view" ? "bg-blue-700" : "bg-blue-600";
// // // //   const investButtonClass =
// // // //     mode === "invest" ? "bg-blue-700" : "bg-blue-600";

// // // //   return (
// // // //     <div className="bg-white p-4 rounded-xl shadow-md text-black">
// // // //       <h2 className="text-lg font-bold mb-1">{project.title}</h2>
// // // //       <p className="text-sm mb-2">{project.description}</p>

// // // //       {/* Progress */}
// // // //       <div className="w-full bg-gray-200 h-2 rounded">
// // // //         <div
// // // //           className="bg-blue-600 h-2 rounded"
// // // //           style={{ width: `${percent}%` }}
// // // //         />
// // // //       </div>

// // // //       <p className="text-sm mt-2">
// // // //         ₹{project.fundedAmount} raised of ₹{project.targetAmount}
// // // //       </p>

// // // //       {/* 🔥 BUTTONS */}
// // // //       <div className="flex gap-2 mt-3">
// // // //         {/* VIEW */}
// // // //         <button
// // // //           onClick={() => navigate(`/project/${project._id}?mode=view`)}
// // // //           className={`${buttonBase} ${viewButtonClass}`}
// // // //         >
// // // //           View
// // // //         </button>

// // // //         {/* INVEST */}
// // // //         <button
// // // //           onClick={() => navigate(`/project/${project._id}?mode=invest`)}
// // // //           className={`${buttonBase} ${investButtonClass}`}
// // // //         >
// // // //           Invest
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProjectCard;
// // // import { useNavigate, useLocation } from "react-router-dom";

// // // const ProjectCard = ({ project }) => {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // ✅ Get mode from query
// // //   const params = new URLSearchParams(location.search);
// // //   const mode = params.get("mode");

// // //   // ✅ Safe percent calculation
// // //   const percent =
// // //     project?.targetAmount > 0
// // //       ? Math.min(
// // //           100,
// // //           (project.fundedAmount / project.targetAmount) * 100
// // //         )
// // //       : 0;

// // //   // ✅ Button styles
// // //   const buttonBase =
// // //     "px-3 py-2 rounded w-full text-white transition";

// // //   const viewButtonClass =
// // //     mode === "view"
// // //       ? "bg-blue-700"
// // //       : "bg-blue-600 hover:bg-blue-700";

// // //   const investButtonClass =
// // //     mode === "invest"
// // //       ? "bg-green-700"
// // //       : "bg-green-600 hover:bg-green-700";

// // //   // ✅ Navigate handlers (clean)
// // //   const handleView = () => {
// // //     navigate(`/project/${project._id}?mode=view`);
// // //   };

// // //   const handleInvest = () => {
// // //     navigate(`/project/${project._id}?mode=invest`);
// // //   };

// // //   return (
// // //     <div className="bg-white p-4 rounded-xl shadow-md text-black">
// // //       <h2 className="text-lg font-bold mb-1">
// // //         {project.title}
// // //       </h2>

// // //       <p className="text-sm mb-2">
// // //         {project.description}
// // //       </p>

// // //       {/* ✅ Progress */}
// // //       <div className="w-full bg-gray-200 h-2 rounded">
// // //         <div
// // //           className="bg-blue-600 h-2 rounded transition-all"
// // //           style={{ width: `${percent}%` }}
// // //         />
// // //       </div>

// // //       <p className="text-sm mt-2">
// // //         ₹{project.fundedAmount} raised of ₹{project.targetAmount}
// // //       </p>

// // //       {/* 🔥 BUTTONS */}
// // //       <div className="flex gap-2 mt-3">
        
// // //         {/* VIEW */}
// // //         <button
// // //           onClick={handleView}
// // //           className={`${buttonBase} ${viewButtonClass}`}
// // //         >
// // //           View
// // //         </button>

// // //         {/* INVEST */}
// // //         <button
// // //           onClick={handleInvest}
// // //           className={`${buttonBase} ${investButtonClass}`}
// // //         >
// // //           Invest
// // //         </button>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProjectCard;
// // import { useNavigate, useLocation } from "react-router-dom";

// // const ProjectCard = ({ project }) => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // ✅ Get mode from query
// //   const params = new URLSearchParams(location.search);
// //   const mode = params.get("mode");

// //   // ✅ Safe percent calculation
// //   const percent =
// //     project?.targetAmount > 0
// //       ? Math.min(
// //           100,
// //           (project.fundedAmount / project.targetAmount) * 100
// //         )
// //       : 0;

// //   // ✅ Button styles
// //   const buttonBase =
// //     "px-3 py-2 rounded w-full text-white transition";

// //   const viewButtonClass =
// //     mode === "view"
// //       ? "bg-blue-700"
// //       : "bg-blue-600 hover:bg-blue-700";

// //   const investButtonClass =
// //     mode === "invest"
// //       ? "bg-green-700"
// //       : "bg-green-600 hover:bg-green-700";

// //   // ✅ Navigate handlers
// //   const handleView = () => {
// //     navigate(`/project/${project._id}?mode=view`);
// //   };

// //   const handleInvest = () => {
// //     navigate(`/project/${project._id}?mode=invest`);
// //   };

// //   return (
// //     <div className="bg-white p-4 rounded-xl shadow-md text-black">
      
// //       <h2 className="text-lg font-bold mb-1">
// //         {project.title}
// //       </h2>

// //       <p className="text-sm mb-2">
// //         {project.description}
// //       </p>

// //       {/* ✅ PHONE NUMBER */}
// //       <p className="text-sm mb-2">
// //         <b>Phone:</b> {project.phoneNumber || "N/A"}
// //       </p>

// //       {/* ✅ Progress */}
// //       <div className="w-full bg-gray-200 h-2 rounded">
// //         <div
// //           className="bg-blue-600 h-2 rounded transition-all"
// //           style={{ width: `${percent}%` }}
// //         />
// //       </div>

// //       <p className="text-sm mt-2">
// //         ₹{project.fundedAmount} raised of ₹{project.targetAmount}
// //       </p>

// //       {/* 🔥 BUTTONS */}
// //       <div className="flex gap-2 mt-3">
        
// //         {/* VIEW */}
// //         <button
// //           onClick={handleView}
// //           className={`${buttonBase} ${viewButtonClass}`}
// //         >
// //           View
// //         </button>

// //         {/* INVEST */}
// //         <button
// //           onClick={handleInvest}
// //           className={`${buttonBase} ${investButtonClass}`}
// //         >
// //           Invest
// //         </button>

// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectCard;
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const percent =
    project?.targetAmount > 0
      ? Math.min(
          100,
          (project.fundedAmount / project.targetAmount) * 100
        )
      : 0;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-black">
      <h2 className="text-lg font-bold mb-1">
        {project.title}
      </h2>

      <p className="text-sm mb-2">
        {project.description}
      </p>

      {/* Progress */}
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm mt-2">
        ₹{project.fundedAmount} / ₹{project.targetAmount}
      </p>

      {/* 🔥 ONLY BUTTONS */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={() =>
            navigate(`/project/${project._id}?mode=view`)
          }
          className="bg-blue-600 text-white px-3 py-2 rounded w-full"
        >
          View
        </button>

        <button
          onClick={() =>
            navigate(`/project/${project._id}?mode=invest`)
          }
          className="bg-green-600 text-white px-3 py-2 rounded w-full"
        >
          Invest
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
