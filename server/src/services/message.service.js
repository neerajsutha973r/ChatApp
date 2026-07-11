import MessageModel from "../models/message.model.js";
import UserModel from "../models/user.model.js";

const MessageService = {
  async sendMessage(userId, message) {
    if (!userId) {
      throw new Error("User ID is required.");
    }

    if (!message || !message.trim()) {
      throw new Error("Message is required.");
    }

    const user = await UserModel.findUserById(userId);

    if (!user) {
      throw new Error("User not found.");
    }

    return await MessageModel.createMessage(userId, message.trim());
  },

  async getMessages() {
    return await MessageModel.getAllMessages();
  },
};

export default MessageService;