// import { useEffect, useState } from "react";
// import API from "../services/api";

// const MyInvestments = () => {
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         const res = await API.get("/investments/my");
//         setInvestments(res.data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetch();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl mb-4">My Investments</h1>

//       {investments.map((inv) => (
//         <div key={inv._id} className="border p-3 mb-3">
//           <p>Project: {inv.projectId?.title}</p>
//           <p>Amount: ₹{inv.amount}</p>
//           <p>Status: {inv.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyInvestments;
import { useEffect, useState } from "react";
import API from "../services/api";

export default function MyInvestments() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.get("/investments/my");
        setInvestments(res.data.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Investments 💰</h1>
          <p className="text-blue-200">
            Track all your investments in one place
          </p>
        </div>

        {/* List */}
        <div className="space-y-4">
          {investments.length > 0 ? (
            investments.map((inv) => (
              <div
                key={inv._id}
                className="bg-white/95 text-black rounded-3xl shadow-xl p-5 hover:scale-[1.02] transition"
              >
                <h2 className="text-lg font-semibold mb-2">
                  {inv.projectId?.title || "Project Name"}
                </h2>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>💰 Amount: ₹{inv.amount}</span>
                  <span>
                    Status:{" "}
                    <span
                      className={`font-semibold ${
                        inv.status === "SUCCESS"
                          ? "text-green-600"
                          : inv.status === "PENDING"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-blue-200">No investments found</p>
          )}
        </div>
      </div>
    </div>
  );
}