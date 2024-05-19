import React, {useState} from "react";
import './DemoPageVideo.css';
import ReactPlayer from "react-player";

export default function DemoPageVideo({lang, link, transc}){
    const [vidTransc, setVidTransc] = useState(true);
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

            </div>
        </div>
    )
}