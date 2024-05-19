import React from "react";
import './DemoPageInputs.css'
import link from "../assets/link.png";
import lang from "../assets/language.png";
import mic from "../assets/microphone.png";

export default function DemoPageInputs({
  language,
  setLanguage,
  setCelebrityVoice,
  moveToVideo,
}) {
  return (
    <>
    <div className="main-demopi">
        <h1 style={{fontSize: "3em"}}>See linguastream in Action</h1>
        <h2 style={{fontWeight: 500, marginBottom: "2em",  marginTop: "0.5em"}}>Use this demo to see linguastream in action before you make an account.</h2>
        <div className="youtubelinkholder">
            <div className="nameholder"><img src={link} alt=""/><p>Youtube Link</p></div>
            <p>https://www.youtube.com/watch?v=_lHSawdgXpI</p>
        </div>
        <div className="selectholder">
            <div className="nameholder"><img src={lang} alt=""/><p>Language</p></div>
            <select className="selector" onChange={(e) => setLanguage(e.target.value)}>
                <option value="SL">Select Language</option>
                <option value="E">English</option>
                <option value="C">Chinese</option>
                <option value="F">French</option>
            </select>
        </div>
        {language === "E" &&
            (<div className="selectholder">
                <div className="nameholder"><img src={mic} alt=""/><p>Voice</p></div>
                <select className="selector" onChange={(e) => setCelebrityVoice(e.target.value)}>
                    <option value="NCV">No Celebrity Voice</option>
                    <option value="BO">Barack Obama</option>
                    <option value="GR">Gordon Ramsay</option>
                </select>
            </div>)
        }
        <button onClick={moveToVideo} className="transB" style={{width: "10em", height: "3em", textAlign: "center", borderRadius: "0.7em", borderWidth: "0.3em", borderColor: "white", fontSize:"1.1em", fontWeight: 600}}>Translate</button>
    </div>
    
    </>
  );
}
