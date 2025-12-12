const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors(app.use(
  cors({
    origin: "https://netflix-login-page-phi.vercel.app", // your frontend URL
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
}));

const PORT = 5000;

// Demo credentials
const DEMO_EMAIL = "demo@gmail.com";
const DEMO_PASSWORD = "123456";

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    return res.json({ success: true, message: "Login successful" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.get("/", (req, res) => {
  res.send("Backend running…");
});

app.listen(PORT, () => {
  console.log(`Server running`);
});






