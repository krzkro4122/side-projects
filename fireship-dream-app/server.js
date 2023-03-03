import * as dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

import express from "express";
import cors from "cors";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname + "/dist")));

app.get("/", async (request, response) => {
  response.send(await readFile("./index.html", "utf-8"));
});

app.post("/dream", async (request, response) => {
  try {
    const prompt = request.body.prompt;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });

    const image = aiResponse.data.data[0].url;
    response.send({ image });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong!");
  }
});

const PORT = process.env.PORT || 5137;
app.listen(PORT, () =>
  console.log(`Started a server on http://localhost:${PORT}`)
);
