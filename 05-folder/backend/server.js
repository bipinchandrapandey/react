import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Note from "./models/note.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to local MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/api/notes", async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

app.post("/api/notes", async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "Note text is required" });

  const newNote = new Note({ text });
  await newNote.save();
  res.json(newNote);
});

app.delete("/api/notes/:id", async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
