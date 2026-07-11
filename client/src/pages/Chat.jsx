import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import MessageService from "../services/message.service.js";
import socket from "../services/socket.js";
import Navbar from "../components/Navbar.jsx";
import Message from "../components/Message.jsx";
import MessageInput from "../components/MessageInput.jsx";
import { useRef } from "react";
import "./Chat.css";

function Chat() {
  const { user } = useContext(AuthContext);

  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    fetchMessages();
  }, []);
  
  useEffect(() => {
  socket.on("receive_message", (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  });

  return () => {
    socket.off("receive_message");
  };
}, []);

  useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await MessageService.getMessages();

      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendMessage = async (message) => {
  try {
    await MessageService.sendMessage({
      userId: user.id,
      message,
    });
  } catch (error) {
    console.log(error);
  }
};

  return (
  <div className="chat-page">
    <Navbar />

    <div className="chat-container">
      {messages.length === 0 ? (
        <div className="empty-chat">
          <h2>💬 No messages yet</h2>
          <p>Start the conversation!</p>
        </div>
      ) : (
        <>
          {messages.map((msg) => (
            <Message
              key={msg.id}
              message={msg}
              currentUser={user}
            />
          ))}
          <div ref={bottomRef}></div>
        </>
      )}
    </div>

    <MessageInput onSend={handleSendMessage} />
  </div>
);
}

export default Chat;