import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaVideo, FaEye, FaSuitcase, FaCamera } from "react-icons/fa";
import Ava from "../assets/Ava.png";

const trendData = [
  { name: "Jan", trend: 25 },
  { name: "Feb", trend: 50 },
  { name: "Mar", trend: 65 },
  { name: "Apr", trend: 80 },
  { name: "May", trend: 75 },
  { name: "Jun", trend: 90 },
  { name: "Jul", trend: 85 },
  { name: "Sep", trend: 100 },
];

const AvaDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0e0e12] text-white font-sans">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-60 bg-[#13131a] min-h-screen p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-10">Pocket CEO</h1>
            <ul className="space-y-4">
              <li className="font-semibold">📊 Dashboard</li>
              <li>✅ Tasks</li>
              <li>📝 Content</li>
              <li>📧 Email</li>
              <li>🎯 Goals</li>
            </ul>
          </div>
          <div className="flex items-center space-x-3 mt-10">
            <img src={Ava} alt="Ava" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-semibold">Ava</p>
              <p className="text-xs text-gray-400">Visionary</p>
            </div>
          </div>
        </aside>

        {/* Main Dashboard */}
        <main className="flex-1 p-8 grid grid-cols-3 gap-6">
          {/* Workspace */}
          <div className="bg-[#15151c] p-6 rounded-2xl col-span-1">
            <h2 className="text-lg font-semibold mb-4">Workspace</h2>
            <ul className="text-sm space-y-2 text-purple-300">
              <li>• Refine product vision deck</li>
              <li>• Brainstorm TikTok campaign <span className="font-bold">ideas</span></li>
              <li>• Hire a top-tier GTM strategist</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-purple-600 rounded-lg text-sm font-semibold">+ Create</button>
          </div>

          {/* Insight */}
          <div className="bg-[#15151c] p-6 rounded-2xl col-span-1 flex flex-col justify-between items-center text-center">
            <img src= {Ava} alt="Ava" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-sm text-gray-300">Let’s disrupt the industry and turn some heads ✨</p>
          </div>

          {/* Campaign Planner */}
          <div className="bg-[#15151c] p-6 rounded-2xl col-span-1">
            <h2 className="text-lg font-semibold mb-4">Campaign Planner</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaVideo className="text-sm" />
                <div className="w-full h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <FaEye className="text-sm" />
                <div className="w-4/5 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <FaSuitcase className="text-sm" />
                <div className="w-3/4 h-2 bg-gradient-to-r from-purple-400 to-blue-300 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2">
                <FaCamera className="text-sm" />
                <div className="w-2/3 h-2 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Quarterly Chart */}
          <div className="bg-[#15151c] p-6 rounded-2xl col-span-2">
            <h2 className="text-lg font-semibold mb-4">Quarterly Performance</h2>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <XAxis dataKey="name" stroke="#999" fontSize={12} />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="trend" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-[#15151c] p-6 rounded-2xl col-span-1 text-center flex flex-col justify-center">
            <h2 className="text-lg font-semibold mb-2">Analytics</h2>
            <p className="text-3xl font-bold">230K</p>
            <p className="text-sm text-gray-400 mb-4">Monthly visits</p>
            <p className="text-2xl font-bold">5.4%</p>
            <p className="text-sm text-gray-400">Conversion rate</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AvaDashboard;
