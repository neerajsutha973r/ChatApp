const initializeSocket = (io) => {

  io.on("connection", (socket) => {

    console.log(`User Connected : ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`User Disconnected : ${socket.id}`);
    });

  });

};

export default initializeSocket;