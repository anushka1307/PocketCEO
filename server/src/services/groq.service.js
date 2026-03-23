const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const createChatCompletion = async (messages) => {
  const completion = await groq.chat.completions.create({
    model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
    messages,
    temperature: 0.3,
  });

  return completion.choices[0]?.message?.content || "";
};

module.exports = {
  createChatCompletion,
};