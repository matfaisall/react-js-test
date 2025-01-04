import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// Route to fetch provinces
app.get("/api/province", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.rajaongkir.com/starter/province",
      {
        headers: {
          key: "d1f1d3f10b18cff0f07520dfd9b8b77d", // api anda
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching provinces:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/city", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.rajaongkir.com/starter/city",
      {
        headers: {
          key: "d1f1d3f10b18cff0f07520dfd9b8b77d", // api anda
        },
      },
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching cities:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
