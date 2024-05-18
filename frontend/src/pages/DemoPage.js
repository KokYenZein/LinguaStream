import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import "./DemoPage.css";
import DemoPageInputs from "../components/DemoPageInputs";

export default function DemoPage(){
    let navigate = useNavigate();

    return(
        <div className="demoroot">
            <header>
            <h1 className="lp-title">linguastream</h1>
            
            <div className="lp-header-buttons">
            <Button
            backgroundColor={"#1A4D2E"}
            color={"white"}
            _hover={{backgroundColor: "white", color: "#1A4D2E"}}
            borderRadius={"1em"}
            marginInlineEnd={"1em"}
            width={"7em"}
                onClick={() => navigate("/login")}
            >
                <Text>Login</Text>
            </Button>
            <Button
            borderRadius={"1em"}
            color={"#1A4D2E"}
            width={"7em"}
                onClick={() => navigate("/signup")}
            >
                <Text>Sign up</Text>
            </Button>
            </div>
            </header>
            <DemoPageInputs
                error={""}
                youtubeLink={""}
                setYoutubeLink={""}
                language={""}
                setLanguage={""}
                celebrityVoice={""}
                setCelebrityVoice={""}
                handleTranslate={""}
              />
        </div>
    )
}