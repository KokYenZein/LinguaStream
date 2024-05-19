import React, { useState } from "react";
import {
  Box,
  useDisclosure,
  Spinner,
  Center,
  VStack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import CustomHamburgerIcon from "../components/CustomHamburgerIcon";
import HomeInputs from "../components/HomeInputs";
import HomeVideo from "../components/HomeVideo";
// import Chatbot from "../components/Chatbot";
import axios from "axios";
import cross from "../assets/cross.png";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [youtubeLink, setYoutubeLink] = useState("");
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState(null);
  const [showError, setShow] = useState(false);
  const [celebrityVoice, setCelebrityVoice] = useState(null);

  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S*?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleTranslate = async () => {
    setError(""); // Clear any previous errors
    if (!youtubeLink) {
      setError("Please enter a YouTube link.");
      setShow(true);
      return;
    }
    if (!language) {
      setError("Please select a language before translating.");
      setShow(true);
      return;
    }

    setLoading(true);
    try {
      const videoId = getYouTubeVideoId(youtubeLink);
      if (!videoId) {
        setError("Invalid YouTube link. Please check and try again.");
        setShow(true);
        setLoading(false);
        return;
      }
      const response = await axios.post("http://127.0.0.1:5000/translate", {
        youtube_link: youtubeLink,
        language: language,
        celebrity_voice: celebrityVoice,
      });
      console.log(response); // For testing in frontend

      if (response.status === 200) {
        const videoUrl = response.data.video_url;
        const title = response.data.youtube_title;
        const transcript = response.data.translated_transcript;

        setVideoDetails({
          videoUrl,
          title,
          language,
          transcript,
          celebrityVoice: language === "English" ? celebrityVoice : "",
        });
      } else {
        setError("Failed to translate. Please try again.");
        setShow(true);
      }
    } catch (error) {
      setError(
        "An error occurred while trying to translate. Please try again."
      );
      setShow(true);
      console.error("Error translating video:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setVideoDetails(null);
    setYoutubeLink("");
    setLanguage("");
    setCelebrityVoice("");
    setError(""); // Clear error on reset
  };

  return (
    <div className="demoroot">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomHamburgerIcon onOpen={onOpen} />
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      {loading ? (
        <Center height="100vh">
          {" "}
          {/* Adjust height as needed to center vertically in the view */}
          <VStack spacing={3}>
            {" "}
            {/* Vertical stack with spacing between items */}
            <Text fontSize="xl" color="white">
              Translating...
            </Text>{" "}
            {/* Text component for the label */}
            <Spinner
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal.500"
            />
          </VStack>
        </Center>
      ) : videoDetails ? (
        <HomeVideo
          ytLink={youtubeLink}
          videoDetails={videoDetails}
          handleReset={handleReset}
        />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <HomeInputs
            error={error}
            youtubeLink={youtubeLink}
            setYoutubeLink={setYoutubeLink}
            language={language}
            setLanguage={setLanguage}
            celebrityVoice={celebrityVoice}
            setCelebrityVoice={setCelebrityVoice}
            handleTranslate={handleTranslate}
          />
        </div>
      )}
    </div>
  );
}
