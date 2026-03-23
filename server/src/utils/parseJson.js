const parseJson = (text) => {
    if (!text || typeof text !== "string") {
      throw new Error("AI response is empty or not a string.");
    }
  
    try {
      return JSON.parse(text);
    } catch (error) {
      const match = text.match(/\{[\s\S]*\}/);
  
      if (!match) {
        throw new Error("No JSON object found in AI response.");
      }
  
      return JSON.parse(match[0]);
    }
  };
  
  module.exports = parseJson;