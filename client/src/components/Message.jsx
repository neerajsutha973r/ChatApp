import "./Message.css";
function Message({ message, currentUser }) {
  const own = message.user_id === currentUser.id;

  return (
    <div className={own ? "message-row own" : "message-row"}>
      <div className={own ? "my-message" : "other-message"}>
        <span className="username">{message.username}</span>

        <p>{message.message}</p>

        <small>
          {new Date(message.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </small>
      </div>
    </div>
  );
}

export default Message;