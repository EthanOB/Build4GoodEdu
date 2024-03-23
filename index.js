const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "AIzaSyDfkbANyV5c33jgmrJnqoc3M1gPgplxKPM";

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

async function main() {
  const result = await client.generateMessage({
    model: MODEL_NAME, // Required. The model to use to generate the result.
    temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result.
    candidateCount: 1, // Optional. The number of candidate results to generate.
    prompt: {
      context: "Create a 2 Question Quiz about the following topic",
      messages: [{ content: "conservation of energy in physics" }],
    },
  });

  console.log(result[0].candidates[0].content);
}

main();
//AIzaSyDfkbANyV5c33jgmrJnqoc3M1gPgplxKPM