import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import {setIO} from "./src/socket/io.js";
import userRoutes from "./src/routes/user.route.js";
import messageRoutes from "./src/routes/message.route.js";
import initializeSocket from "./src/socket/socket.js";

dotenv.config();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://chat-app-psi-six-nv31n1qfj8.vercel.app",
    credentials: true,
  },
});

setIO(io);
initializeSocket(io);

const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: "https://chat-app-psi-six-nv31n1qfj8.vercel.app",
  credentials: true,
}));

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server Running",
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});