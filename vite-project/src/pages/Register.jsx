// // import { useState } from "react";
// // import API from "../services/api";
// // import { useNavigate } from "react-router-dom";

// // const Register = () => {
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "INVESTOR",
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await API.post("/auth/register", form);
// //       alert("Registered Successfully");
// //       navigate("/login");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center mt-10">
// //       <form onSubmit={handleSubmit} className="border p-6 w-80">
// //         <h2 className="text-xl mb-4">Register</h2>

// //         <input
// //           className="border p-2 w-full mb-3"
// //           placeholder="Name"
// //           onChange={(e) =>
// //             setForm({ ...form, name: e.target.value })
// //           }
// //         />

// //         <input
// //           className="border p-2 w-full mb-3"
// //           placeholder="Email"
// //           onChange={(e) =>
// //             setForm({ ...form, email: e.target.value })
// //           }
// //         />

// //         <input
// //           type="password"
// //           className="border p-2 w-full mb-3"
// //           placeholder="Password"
// //           onChange={(e) =>
// //             setForm({ ...form, password: e.target.value })
// //           }
// //         />

// //         {/* 🔥 Role Selection */}
// //         <select
// //           className="border p-2 w-full mb-3"
// //           onChange={(e) =>
// //             setForm({ ...form, role: e.target.value })
// //           }
// //         >
// //           <option value="INVESTOR">Investor</option>
// //           <option value="CREATOR">Creator</option>
// //         </select>

// //         <button className="bg-green-500 text-white w-full p-2">
// //           Register
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;
// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate, Link } from "react-router-dom";
// import { Mail, Lock, User } from "lucide-react";

// const Register = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "INVESTOR",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       await API.post("/auth/register", form);
//       alert("Registered Successfully");
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-indigo-900">

//       <div className="bg-white rounded-3xl shadow-xl p-8 w-[350px]">

//         <div className="text-center mb-6">
//           <div className="text-2xl font-bold">CrowdFund</div>
//           <p className="text-gray-500 text-sm">
//             Create your account
//           </p>
//         </div>

//         <form onSubmit={handleSubmit}>

//           {/* Name */}
//           <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
//             <User size={18} />
//             <input
//               placeholder="Name"
//               className="bg-transparent p-2 w-full outline-none"
//               onChange={(e) =>
//                 setForm({ ...form, name: e.target.value })
//               }
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
//             <Mail size={18} />
//             <input
//               placeholder="Email"
//               className="bg-transparent p-2 w-full outline-none"
//               onChange={(e) =>
//                 setForm({ ...form, email: e.target.value })
//               }
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
//             <Lock size={18} />
//             <input
//               type="password"
//               placeholder="Password"
//               className="bg-transparent p-2 w-full outline-none"
//               onChange={(e) =>
//                 setForm({ ...form, password: e.target.value })
//               }
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
//             <Lock size={18} />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="bg-transparent p-2 w-full outline-none"
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   confirmPassword: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Role */}
//           <select
//             className="w-full p-2 mb-4 rounded bg-gray-100"
//             onChange={(e) =>
//               setForm({ ...form, role: e.target.value })
//             }
//           >
//             <option value="INVESTOR">Investor</option>
//             <option value="CREATOR">Creator</option>
//           </select>

//           <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg">
//             Register
//           </button>

//         </form>

//         <p className="text-center text-sm mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 font-semibold">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Register;
import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "INVESTOR",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post("/auth/register", form);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-indigo-900">

      <div className="bg-white rounded-3xl shadow-xl p-8 w-[350px]">

        {/* SAME IMAGE ADDED HERE */}
        <div className="text-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            className="w-20 mx-auto mb-3"
          />
          <div className="text-2xl font-bold">CrowdFund</div>
          <p className="text-gray-500 text-sm">
            Create your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
            <User size={18} />
            <input
              placeholder="Name"
              className="bg-transparent p-2 w-full outline-none"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
            <Mail size={18} />
            <input
              placeholder="Email"
              className="bg-transparent p-2 w-full outline-none"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent p-2 w-full outline-none"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3 flex items-center bg-gray-100 px-3 rounded-lg">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-transparent p-2 w-full outline-none"
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          {/* Role */}
          <select
            className="w-full p-2 mb-4 rounded bg-gray-100"
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="INVESTOR">Investor</option>
            <option value="CREATOR">Creator</option>
          </select>

          {/* REGISTER BUTTON (GREEN SAME AS BEFORE) */}
          <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2 rounded-lg">
            Register
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;