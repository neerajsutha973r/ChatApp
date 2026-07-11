let io;
export const setIO = (socketIo) => {
  io = socketIo;
};
export const getIO = () => io;