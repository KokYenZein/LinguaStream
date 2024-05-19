import React from "react";
import { SlideFade, Alert, AlertIcon } from "@chakra-ui/react";
import { LinkIcon, CheckIcon, StarIcon } from "@chakra-ui/icons";
import { LiaLanguageSolid } from "react-icons/lia";
import link from "../assets/link.png";
import lang from "../assets/language.png";
import mic from "../assets/microphone.png";
import "./HomeInputs.css";

export default function HomeInputs({
  error,
  youtubeLink,
  setYoutubeLink,
  language,
  setLanguage,
  celebrityVoice,
  setCelebrityVoice,
  handleTranslate,
}) {
  return (
    <div className="main-demopi">
      {error && (
        <Alert status="error" mb="4">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <h1 style={{ fontSize: "3em" }}>
        Insert YouTube Link To Translate Audio
      </h1>
      <h2 style={{ fontWeight: 500, marginBottom: "2em", marginTop: "0.5em" }}>
        Insert the link to the youtube video you want translated as well as the
        languge you want the translation in.
      </h2>
      <div className="youtubelinkholder">
        <div className="nameholder">
          <img src={link} alt="" />
          <p>Youtube Link</p>
        </div>
        <div>
          <input
            type="text"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            placeholder="enter link....."
            style={{ width: "290%", outline: "none" }}
          />
        </div>
      </div>
      <div className="selectholder">
        <div className="nameholder">
          <img src={lang} alt="" />
          <p>Language</p>
        </div>
        <select
          value={language}
          className="selector"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="SL">Select Language</option>
          <option value="English">English</option>
          <option value="Chinese">Chinese</option>
          <option value="French">French</option>
        </select>
      </div>
      {language === "English" && (
        <SlideFade
          in={language === "English" || language !== "English"}
          offsetY="20px"
        >
          <div className="selectholder">
            <div className="nameholder">
              <img src={mic} alt="" />
              <p>Voice</p>
            </div>
            <select
              className="selector"
              value={celebrityVoice}
              onChange={(e) => setCelebrityVoice(e.target.value)}
            >
              <option value="NCV">No Celebrity Voice</option>
              <option value="Obama">Barack Obama</option>
              <option value="Gordon Ramsay">Gordon Ramsay</option>
            </select>
          </div>
        </SlideFade>
      )}
      <button
        onClick={handleTranslate}
        className="transB"
        style={{
          width: "10em",
          height: "3em",
          textAlign: "center",
          borderRadius: "0.7em",
          borderWidth: "0.3em",
          borderColor: "white",
          fontSize: "1.1em",
          fontWeight: 600,
        }}
      >
        Translate
      </button>
    </div>
  );
}
