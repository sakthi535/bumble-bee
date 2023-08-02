import { useChat } from "../context/ChatProvider";

const useChatActions = () => {
    const { socket } = useChat();

    const joinRoom = (roomID) => {
        console.log(roomID)
        socket.emit('join-room', roomID);
    }

    const leaveRoom = (roomID) => {
        console.log(roomID)
        socket.emit('leave-room', roomID);
    }

    const sendMessage = (text, roomID, userName) => {
        if(! text) {
            return;
        }
        console.log(text)
        socket.emit('send-message', { text, roomID, userName });
    }

    return {
        joinRoom,
        sendMessage,
        leaveRoom
    }
};

export default useChatActions;