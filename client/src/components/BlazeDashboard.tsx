import { useState } from "react";
import Blaze from "../assets/blaze.png";
import { useAgentDashboard } from "../hooks/useAgentDashboard";

const STARTUP_ID = "69bf6ec45e83779d578d40e9";

const BlazeDashboard = () => {
  const [input, setInput] = useState("");

  const { messages, dashboard, loading, sending, error, sendMessage } =
    useAgentDashboard(STARTUP_ID, "cfo");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = input.trim();

    if (!trimmed) return;

    await sendMessage(trimmed);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans">
      <div className="flex">
        <aside className="w-60 min-h-screen bg-[#151922] p-6 flex flex-col justify-between border-r border-[#232a38]">
          <div>
            <h1 className="text-2xl font-bold mb-10 text-amber-400">
              Pocket CEO
            </h1>

            <ul className="space-y-4 text-sm">
              <li className="font-semibold hover:text-amber-300 cursor-pointer">
                📊 Dashboard
              </li>
              <li className="hover:text-amber-300 cursor-pointer">
                💰 Pricing
              </li>
              <li className="hover:text-amber-300 cursor-pointer">
                📉 Risks
              </li>
              <li className="hover:text-amber-300 cursor-pointer">
                🧾 Budget
              </li>
              <li className="hover:text-amber-300 cursor-pointer">
                🏦 Runway
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-3 mt-10">
            <img
              src={Blaze}
              alt="Blaze"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Blaze</p>
              <p className="text-xs text-slate-400">
                Chief Financial Officer
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 space-y-6">
          {loading ? (
            <div className="text-slate-300">Loading Blaze dashboard...</div>
          ) : (
            <>
              {error && (
                <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="bg-[#1b2130] p-6 rounded-2xl border border-[#2a3345] shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 text-amber-300">
                    Financial Summary
                  </h2>
                  <p className="text-sm text-slate-300 leading-7">
                    {dashboard?.summary ||
                      "No financial summary yet. Ask Blaze your first question."}
                  </p>
                </div>

                <div className="bg-[#1b2130] p-6 rounded-2xl border border-[#2a3345] shadow-lg flex flex-col justify-center items-center text-center">
                  <img
                    src={Blaze}
                    alt="Blaze"
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    Blaze, your CFO
                  </h2>
                  <p className="text-sm text-slate-300 max-w-sm leading-6">
                    I help with pricing, business viability, runway thinking,
                    cost discipline, and financial risks.
                  </p>
                </div>

                <div className="bg-[#1b2130] p-6 rounded-2xl border border-[#2a3345] shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 text-amber-300">
                    Financial Risks
                  </h2>

                  <ul className="list-disc list-inside space-y-3 text-sm text-slate-300">
                    {dashboard?.risks?.length ? (
                      dashboard.risks.map((risk, index) => (
                        <li key={index}>{risk}</li>
                      ))
                    ) : (
                      <li>No financial risks identified yet.</li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-[#1b2130] p-6 rounded-2xl border border-[#2a3345] shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 text-amber-300">
                    Pricing Recommendations
                  </h2>

                  <ul className="list-disc list-inside space-y-4 text-sm text-slate-300">
                    {dashboard?.topRecommendations?.length ? (
                      dashboard.topRecommendations.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>No pricing recommendations yet.</li>
                    )}
                  </ul>
                </div>

                <div className="bg-[#1b2130] p-6 rounded-2xl border border-[#2a3345] shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 text-amber-300">
                    Next Actions
                  </h2>

                  <ul className="space-y-4 text-sm text-slate-300">
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
                <div className="bg-[#1b2130] p-6 rounded-2xl border border-[#2a3345] shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 text-amber-300">
                    Chat with Blaze
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask Blaze something financial... e.g. How should Pocket CEO think about pricing at the MVP stage?"
                      className="w-full min-h-[140px] rounded-xl bg-[#111723] border border-amber-500/20 p-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />

                    <button
                      type="submit"
                      disabled={sending}
                      className="px-5 py-3 bg-amber-500 text-black rounded-lg text-sm font-semibold hover:bg-amber-400 transition disabled:opacity-60"
                    >
                      {sending ? "Thinking..." : "Send to Blaze"}
                    </button>
                  </form>
                </div>

                <div className="bg-[#1b2130] p-6 rounded-2xl border border-[#2a3345] shadow-lg">
                  <h2 className="text-xl font-semibold mb-4 text-amber-300">
                    Conversation History
                  </h2>

                  <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
                    {messages.length ? (
                      messages.map((message) => (
                        <div
                          key={message._id}
                          className={`rounded-xl p-4 text-sm leading-7 ${
                            message.role === "user"
                              ? "bg-[#111723] border border-amber-500/20"
                              : "bg-[#202838]"
                          }`}
                        >
                          <p className="mb-2 text-xs uppercase tracking-wide text-amber-300">
                            {message.role === "user" ? "You" : "Blaze"}
                          </p>
                          <p className="text-slate-200">{message.content}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-400">
                        No conversation yet. Ask Blaze your first question.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-slate-400 pt-4 italic">
                Good startups survive on pricing discipline, runway awareness,
                and smart financial choices.
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default BlazeDashboard;