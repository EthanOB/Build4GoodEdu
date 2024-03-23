const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "AIzaSyDfkbANyV5c33jgmrJnqoc3M1gPgplxKPM";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

async function generateQuestions(num, topic, type, notes) {
  const result = await client.generateMessage({
    model: MODEL_NAME, 
    temperature: 0.5, 
    candidateCount: 1,
    prompt: {
      context: notes,
      messages: [{ content: "Generate "+ num + " " + type + " questions about " + topic + "from the notes and answer key" }],
    },
  });

  console.log(result[0].candidates[0].content);
}

generateQuestions(3, "Conservation of Energy", "multiple choice", "The law of conservation of energy states that energy cannot be created or destroyed, but it can change forms. For example, chemical energy can be converted to kinetic energy in the explosion of a stick of dynamite. The total amount of energy in an isolated system remains constant over time. This principle is known as the conservation of energy.");
//AIzaSyDfkbANyV5c33jgmrJnqoc3M1gPgplxKPM