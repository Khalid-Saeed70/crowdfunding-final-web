// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function AdminCharts({ stats }) {
//   const data = [
//     { name: "Users", value: stats.totalUsers || 0 },
//     { name: "Projects", value: stats.totalProjects || 0 },
//     { name: "Active", value: stats.activeProjects || 0 },
//   ];

//   return (
//     <div className="bg-white p-5 rounded-xl shadow">
//       <h2 className="text-lg font-bold mb-4">Platform Analytics 📊</h2>

//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminCharts({ stats }) {
  const data = [
    { name: "Users", value: stats.totalUsers || 0 },
    { name: "Projects", value: stats.totalProjects || 0 },
    { name: "Active", value: stats.activeProjects || 0 },
  ];

  return (
    <div className="bg-white/95 text-black p-5 rounded-2xl shadow-lg">
      <h2 className="text-lg font-bold mb-4">Analytics 📊</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}