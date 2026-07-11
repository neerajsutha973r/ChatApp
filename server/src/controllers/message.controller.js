import MessageService from "../services/message.service.js";
import { getIO } from "../socket/io.js";

const MessageController = {
  async sendMessage(req, res) {
    try {
      const { userId, message } = req.body;

      const newMessage = await MessageService.sendMessage(
        userId,
        message
      );

      // Broadcast to all connected clients
      getIO().emit("receive_message", newMessage);

      res.status(201).json({
        success: true,
        message: "Message sent successfully.",
        data: newMessage,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  async getMessages(req, res) {
    try {
      const messages = await MessageService.getMessages();

      res.status(200).json({
        success: true,
        data: messages,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

export default MessageController;