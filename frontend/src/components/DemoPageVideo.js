import React, {useState, useRef, useEffect} from "react";
import './DemoPageVideo.css';
import ReactPlayer from "react-player";
import axios from "axios";
import arrow from "../assets/arrow.png";
import send from "../assets/send.png";
import {
    Box,
    Flex,
    Text  
  } from "@chakra-ui/react";

export default function DemoPageVideo({lang, link, transc, notback}){
    const [vidTransc, setVidTransc] = useState(true);


    const [chatMessages, setChatMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [botResponse, setBotResponse] = useState("");
    const lastMessageRef = useRef(null);
    const[loading, setLoading]=useState(false);
    const[error, setError]=useState("");

    const handleSendMessage = async () => {
        setLoading(true);
        try{
        if (currentMessage.trim()) {
            setChatMessages(chatMessages => [
            ...chatMessages,
            { text: currentMessage, sender: "user" }
            ]);
            setCurrentMessage("");
        }
        //console.log(videoDetails.transcript);
        const message = await axios.post("http://127.0.0.1:5000/chatbot",{
            message: currentMessage,
            transcript: transc,
        });
        console.log("user message: ", message);
        if (message.status === 200) {
            const botResponse = message.data.response;
            console.log("bot response: ", botResponse);
            setChatMessages(chatMessages => [
            ...chatMessages,
            { text: botResponse, sender: "bot" }
            ]);
        }
        }catch(error){
        setError(
            "An error occurred with the message."
        );
        console.error("Error with sending message: ", error);
        } finally{
        setLoading(false);
        }
        
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
        // Prevent sending empty messages
        event.preventDefault(); // Prevent the default action of the enter key (new line)
        handleSendMessage();
        }
    };

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatMessages]);

    function han(){
        alert("hello world");
    }


    return(
        <div className="dpvHolder">
            <div className="vidNdTran">
                <div className="player-wrapper">
                    <ReactPlayer
                    url={link}
                    controls={true}
                    playing={false}
                    width="95%"
                    height="95%"
                    />
                </div>
                <div className="transcShower">
                    <div className="transcOrDesc">
                        <button className={vidTransc ? 'transcBut clicked' : 'transcBut'} onClick={()=>setVidTransc(true)} >Transcript</button>
                        <button className={!vidTransc ? 'vdesBut clicked' : 'vdesBut'} onClick={()=>setVidTransc(false)}>Video Description</button>
                    </div>
                    {vidTransc ? (<div className="transcHolder">
                        <p>{transc}</p>
                    </div>) : (<div className="descpHolder">
                        <p>Translation Language: {lang}</p>
                        <p>Youtube Video Link: <a href="https://www.youtube.com/watch?v=_lHSawdgXpI">https://www.youtube.com/watch?v=_lHSawdgXpI</a></p>
                    </div>)}
                </div>
            </div>
            <div className="chat">
                <div className="backButHolder">
                    <button className="backBut" onClick={()=> notback(false)}><img src={arrow} alt=""/><p>Back</p></button>
                </div>
                <div className="chatterHolder">
                    <div className="chatName">vidbot</div>
                    <div className="textHolder">
                    {chatMessages.map((msg, index) => (
                  <Flex
                    key={index}
                    justifyContent="flex-end" // Pushes the bubble container to the right
                    ref={
                      index === chatMessages.length - 1 ? lastMessageRef : null
                    }
                    flexDirection={msg.sender === "user" ? "row" : "row-reverse"}
                    w="full" 
                  >
                    <Box
                      bg={msg.sender === "user" ? "teal.200" : "teal.500"}
                      p={2}
                      borderRadius="lg"
                      maxWidth="fit-content" // Adjusts width to content
                      m={1}
                      //alignSelf="flex-end" // Ensures the bubble stays at the bottom right
                      alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
                    >
                      <Text fontSize="sm" textAlign="left">
                        {msg.text}
                      </Text>{" "}
                    </Box>
                  </Flex>
                ))}
                    </div>
                    <div className="textinputter">
                        <input className="textter" type="text" value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyPress={handleKeyPress}/>
                        <button onClick={han}>
                            <img src={send} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}