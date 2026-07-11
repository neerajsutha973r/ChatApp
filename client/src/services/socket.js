import { io } from "socket.io-client";

const socket = io("https://chatapp-re2r.onrender.com");

export default socket;