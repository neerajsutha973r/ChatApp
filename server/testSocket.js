import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

socket.on("connect", () => {
    console.log("Connected:", socket.id);
});

socket.on("receive_message", (message) => {
    console.log(message);
});