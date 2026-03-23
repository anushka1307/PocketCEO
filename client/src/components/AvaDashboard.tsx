import { useState } from "react";
import Ava from "../assets/Ava.png";
import { useAgentDashboard } from "../hooks/useAgentDashboard";

const STARTUP_ID = "69bf6ec45e83779d578d40e9";

const AvaDashboard = () => {
  const [input, setInput] = useState("");

  const { messages, dashboard, loading, sending, error, sendMessage } =
    useAgentDashboard(STARTUP_ID, "cmo");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = input.trim();

    if (!trimmed) return;

    await sendMessage(trimmed);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#0e0e12] text-white font-sans">
      <div className="flex">
        <aside className="w-60 bg-[#13131a] min-h-screen p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-10 text-purple-300">
              Pocket CEO
            </h1>

            <ul className="space-y-4 text-sm">
              <li className="font-semibold hover:text-purple-300 cursor-pointer">
                📊 Dashboard
              </li>
              <li className="hover:text-purple-300 cursor-pointer">
                ✅ Campaigns
              </li>
              <li className="hover:text-purple-300 cursor-pointer">
                📝 Content
              </li>
              <li className="hover:text-purple-300 cursor-pointer">
                📧 Messaging
              </li>
              <li className="hover:text-purple-300 cursor-pointer">
                🎯 Growth
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-3 mt-10">
            <img
              src={Ava}
              alt="Ava"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Ava</p>
              <p className="text-xs text-gray-400">
                Chief Marketing Officer
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 space-y-6">
          {loading ? (
            <div className="text-gray-300">Loading Ava dashboard...</div>
          ) : (
            <>
              {error && (
                <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="bg-[#15151c] p-6 rounded-2xl">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Marketing Summary
                  </h2>
                  <p className="text-sm text-gray-300 leading-7">
                    {dashboard?.summary ||
                      "No marketing summary yet. Ask Ava your first question."}
                  </p>
                </div>

                <div className="bg-[#15151c] p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                  <img
                    src={Ava}
                    alt="Ava"
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h2 className="text-xl font-semibold mb-2">Ava, your CMO</h2>
                  <p className="text-sm text-gray-300 max-w-sm leading-6">
                    I help with target audience, messaging, growth channels,
                    launch strategy, and traction experiments.
                  </p>
                </div>

                <div className="bg-[#15151c] p-6 rounded-2xl">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Growth Risks
                  </h2>

                  <ul className="list-disc list-inside space-y-3 text-sm text-gray-300">
                    {dashboard?.risks?.length ? (
                      dashboard.risks.map((risk, index) => (
                        <li key={index}>{risk}</li>
                      ))
                    ) : (
                      <li>No growth risks identified yet.</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-[#15151c] p-6 rounded-2xl">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Top Recommendations
                  </h2>

                  <ul className="list-disc list-inside space-y-4 text-sm text-gray-300">
                    {dashboard?.topRecommendations?.length ? (
                      dashboard.topRecommendations.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>No recommendations yet.</li>
                    )}
                  </ul>
                </div>

                <div className="bg-[#15151c] p-6 rounded-2xl">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Next Actions
                  </h2>

                  <ul className="space-y-4 text-sm text-gray-300">
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
                <div className="bg-[#15151c] p-6 rounded-2xl">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Chat with Ava
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask Ava something marketing-related... e.g. Who should Pocket CEO target first and what messaging should we use?"
                      className="w-full min-h-[140px] rounded-xl bg-[#101018] border border-purple-500/20 p-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <button
                      type="submit"
                      disabled={sending}
                      className="px-5 py-3 bg-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-500 transition disabled:opacity-60"
                    >
                      {sending ? "Thinking..." : "Send to Ava"}
                    </button>
                  </form>
                </div>

                <div className="bg-[#15151c] p-6 rounded-2xl">
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Conversation History
                  </h2>

                  <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
                    {messages.length ? (
                      messages.map((message) => (
                        <div
                          key={message._id}
                          className={`rounded-xl p-4 text-sm leading-7 ${
                            message.role === "user"
                              ? "bg-[#101018] border border-purple-500/20"
                              : "bg-[#1a1624]"
                          }`}
                        >
                          <p className="mb-2 text-xs uppercase tracking-wide text-purple-300">
                            {message.role === "user" ? "You" : "Ava"}
                          </p>
                          <p className="text-gray-200">{message.content}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">
                        No conversation yet. Ask Ava your first question.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-500 pt-4">
                Great marketing starts with sharp positioning and clear
                messaging.
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AvaDashboard;