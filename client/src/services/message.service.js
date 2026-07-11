import api from "./api";

const MessageService = {
  async getMessages() {
    const response = await api.get("/messages");
    return response.data;
  },

  async sendMessage(messageData) {
    const response = await api.post("/messages", messageData);
    return response.data;
  },
};

export default MessageService;