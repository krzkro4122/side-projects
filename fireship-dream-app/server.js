import * as dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/dream", async (request, response) => {
  const prompt = request.body.prompt;

  const aiResponse = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });

  const image = aiResponse.data.data[0].url;
  response.send({ image });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Started a server on http://localhost:${PORT}`)
);
