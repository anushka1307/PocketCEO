import { useState } from "react";
import Otis from "../assets/otis.png";
import { useAgentDashboard } from "../hooks/useAgentDashboard";

const STARTUP_ID = "69bf6ec45e83779d578d40e9";

const OtisDashboard = () => {
  const [input, setInput] = useState("");

  const { messages, dashboard, loading, sending, error, sendMessage } =
    useAgentDashboard(STARTUP_ID, "cso");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = input.trim();

    if (!trimmed) return;

    await sendMessage(trimmed);
    setInput("");
  };

  return (
    <div className="flex min-h-screen bg-[#0f1f1e] text-white">
      <aside className="w-60 bg-[#132624] p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-teal-300">Pocket CEO</h2>
          <ul className="space-y-6 text-sm">
            <li className="hover:text-teal-200 cursor-pointer">
              📊 Dashboard
            </li>
            <li className="hover:text-teal-200 cursor-pointer">💼 Strategy</li>
            <li className="hover:text-teal-200 cursor-pointer">📂 Reports</li>
            <li className="hover:text-teal-200 cursor-pointer">📈 Metrics</li>
            <li className="hover:text-teal-200 cursor-pointer">🧾 Logs</li>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <img
            src={Otis}
            alt="Otis Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">Otis</p>
            <p className="text-xs text-gray-400">Chief Strategy Officer</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-10 space-y-6">
        {loading ? (
          <div className="text-gray-300">Loading Otis dashboard...</div>
        ) : (
          <>
            {error && (
              <div className="rounded-xl bg-red-500/10 border border-red-400/20 p-4 text-sm text-red-200">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="bg-[#173634] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Strategic Summary</h3>
                <p className="text-sm text-gray-300 leading-7">
                  {dashboard?.summary ||
                    "No strategic summary yet. Ask Otis your first question."}
                </p>
              </div>

              <div className="bg-[#173634] p-6 rounded-2xl shadow flex flex-col items-center justify-center text-center">
                <img
                  src={Otis}
                  alt="Otis"
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">Otis, your CSO</h3>
                <p className="text-sm text-gray-300 max-w-sm leading-6">
                  I help with positioning, startup focus, prioritization,
                  validation strategy, and strategic risks.
                </p>
              </div>

              <div className="bg-[#173634] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Strategic Risks</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                  {dashboard?.risks?.length ? (
                    dashboard.risks.map((risk, index) => (
                      <li key={index}>{risk}</li>
                    ))
                  ) : (
                    <li>No strategic risks identified yet.</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-[#173634] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">
                  Top Recommendations
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-3">
                  {dashboard?.topRecommendations?.length ? (
                    dashboard.topRecommendations.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>No recommendations yet.</li>
                  )}
                </ul>
              </div>

              <div className="bg-[#173634] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Next Actions</h3>
                <ul className="text-sm text-gray-300 space-y-3">
                  {dashboard?.nextActions?.length ? (
                    dashboard.nextActions.map((action, index) => (
                      <li key={index}>✅ {action}</li>
                    ))
                  ) : (
                    <li>✅ No next actions yet.</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="bg-[#173634] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">Chat with Otis</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Otis something strategic... e.g. How should I position Pocket CEO for solo founders?"
                    className="w-full min-h-[120px] rounded-xl bg-[#102826] border border-[#23524d] p-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className="px-5 py-3 bg-[#1f4c47] text-sm rounded-xl hover:bg-[#236d65] transition disabled:opacity-60"
                  >
                    {sending ? "Thinking..." : "Send to Otis"}
                  </button>
                </form>
              </div>

              <div className="bg-[#173634] p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold mb-4">
                  Conversation History
                </h3>

                <div className="space-y-4 max-h-[340px] overflow-y-auto pr-2">
                  {messages.length ? (
                    messages.map((message) => (
                      <div
                        key={message._id}
                        className={`rounded-xl p-4 text-sm leading-6 ${
                          message.role === "user"
                            ? "bg-[#102826] border border-[#23524d]"
                            : "bg-[#1a3a37]"
                        }`}
                      >
                        <p className="mb-2 text-xs uppercase tracking-wide text-teal-300">
                          {message.role === "user" ? "You" : "Otis"}
                        </p>
                        <p className="text-gray-200">{message.content}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">
                      No conversation yet. Ask Otis your first question.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10">
              Strategic clarity creates better startups.
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default OtisDashboard;