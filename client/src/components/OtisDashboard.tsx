import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const OtisDashboard = () => {
  const data = {
    labels: ["Jan", "Mar", "Apr", "May", "Jun", "Sep"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 10000, 15000, 22000, 35000, 42000],
        fill: false,
        borderColor: "#33FFC9",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#cbd5e1",
        },
      },
      x: {
        ticks: {
          color: "#cbd5e1",
        },
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-[#0f1f1e] text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-[#132624] p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-teal-300">Pocket CEO</h2>
          <ul className="space-y-6 text-sm">
            <li className="hover:text-teal-200 cursor-pointer">📊 Dashboard</li>
            <li className="hover:text-teal-200 cursor-pointer">💼 Strategy</li>
            <li className="hover:text-teal-200 cursor-pointer">📁 Reports</li>
            <li className="hover:text-teal-200 cursor-pointer">📈 Metrics</li>
            <li className="hover:text-teal-200 cursor-pointer">🧾 Logs</li>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="Otis Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">Otis</p>
            <p className="text-xs text-gray-400">Strategist</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Financial Overview */}
          <div className="bg-[#173634] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Financial Overview</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Monitor cash flow runway</li>
              <li>Evaluate latest spend ROI</li>
              <li>Burn rate analysis</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-[#1f4c47] text-sm rounded-xl hover:bg-[#236d65] transition">
              + Report
            </button>
          </div>

          {/* Otis Avatar */}
          <div className="bg-[#173634] p-6 rounded-2xl shadow flex flex-col items-center justify-center text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              alt="Otis"
              className="w-24 h-24 mb-4"
            />
            <p className="text-gray-300 text-sm">
              Let’s dig into the data<br />and make wise moves🧠
            </p>
          </div>

          {/* KPI Tracker Placeholder */}
          <div className="bg-[#173634] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">KPI Tracker</h3>
            <div className="text-gray-400 text-sm">Coming soon...</div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="bg-[#173634] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Revenue Metrics</h3>
            <Line data={data} options={options} />
          </div>

          {/* Launch Checklist */}
          <div className="bg-[#173634] p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Launch Checklist</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>✅ Set launch date</li>
              <li>✅ Test core features</li>
              <li>✅ Prepare FAQ doc</li>
            </ul>
          </div>
        </div>

        {/* Footer Motto */}
        <div className="text-center text-sm text-gray-400 mt-10">
          Patience and planning lead to prosperity.
        </div>
      </main>
    </div>
  );
};

export default OtisDashboard;
