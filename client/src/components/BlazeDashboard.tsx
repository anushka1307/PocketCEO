import { Link } from "react-router-dom";

const BlazeDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-600 text-white flex flex-col justify-between py-6 px-4 shadow-xl">
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide mb-10">Pocket CEO</h1>

          <nav className="space-y-4">
            <Link to="/blaze" className="block hover:text-yellow-300 font-medium">
              🧭 Dashboard
            </Link>
            <Link to="#" className="block hover:text-yellow-300 font-medium">
              ✅ Tasks
            </Link>
            <Link to="#" className="block hover:text-yellow-300 font-medium">
              📈 KPIs
            </Link>
            <Link to="#" className="block hover:text-yellow-300 font-medium">
              🤝 Team Sync
            </Link>
            <Link to="#" className="block hover:text-yellow-300 font-medium">
              🚀 Launch
            </Link>
          </nav>
        </div>

        <div className="text-sm mt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-orange-600 font-bold flex items-center justify-center">
              B
            </div>
            <div>
              <p className="font-bold">Blaze</p>
              <p className="text-xs">Executioner</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-8">
        <div>
          <h2 className="text-4xl font-extrabold mb-2">Welcome, Blaze 🔥</h2>
          <p className="text-orange-700 font-medium">
            Deadlines fear you. Motivation? Always maxed out.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Sprint Planner */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-4">Sprint Planner 🛠️</h3>
            <ul className="space-y-2">
              <li className="border p-3 rounded-md flex justify-between items-center">
                Build Persona Selector UI
                <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                  Done
                </button>
              </li>
              <li className="border p-3 rounded-md flex justify-between items-center">
                Connect routing to dashboards
                <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                  Done
                </button>
              </li>
              <li className="border p-3 rounded-md flex justify-between items-center">
                Review task feedback loop
                <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                  Done
                </button>
              </li>
            </ul>
          </div>

          {/* KPI Tracker */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-4">Performance Metrics 📊</h3>
            <div className="space-y-2">
              <p>Tasks Completed: <span className="font-semibold text-green-600">42</span></p>
              <p>On-Time Delivery Rate: <span className="font-semibold text-green-600">92%</span></p>
              <p>Burn Rate: <span className="font-semibold text-red-500">🔥 5%</span></p>
            </div>
          </div>

          {/* Team Sync */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-4">Team Sync 🤝</h3>
            <p className="text-gray-600">Next standup: <span className="font-semibold">Tomorrow 10 AM</span></p>
            <p className="text-gray-600 mt-2">Pending updates: 3 teammates</p>
          </div>

          {/* Launch Checklist */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-4">Launch Checklist 🚀</h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>QA Landing Page</li>
              <li>Schedule launch tweet</li>
              <li>Coordinate beta invites</li>
              <li>Post-launch survey ready</li>
            </ul>
          </div>

          {/* Productivity Quote */}
          <div className="col-span-full text-center text-orange-700 italic mt-4">
            "Move fast. Break nothing. Build everything."
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlazeDashboard;
