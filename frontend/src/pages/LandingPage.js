import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import "./LandingPage.css";
import avl from "../assets/avltrees.png";
import dennis from "../assets/ddennis.png";
import algo from "../assets/dijstras.png";
import git from "../assets/github.png";
import aa from "../assets/aa.JPG";
import wx from "../assets/wx.JPG";
import xh from "../assets/xh.JPG";
import yz from "../assets/yz.JPG";
import us from "../assets/us.JPG";

export default function LandingPage() {
  let navigate = useNavigate();

  return (
    <div className="rooter">
      <header>
        <h1 className="lp-title">linguastream</h1>
        <div className="lp-header-navs">
          <Link to="/demo">
            <p>Demo</p>
          </Link>
          <span>&#8901;</span>
          <a href="#founders">
            <p>Founders</p>
          </a>
        </div>
        <div className="lp-header-buttons">
          <Button
            backgroundColor={"#1A4D2E"}
            color={"white"}
            _hover={{ backgroundColor: "white", color: "#1A4D2E" }}
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
      <main className="lp-main">
        <div>
          <div>
            <h1 className="nafos">Not a fan of subtitles?</h1>
          </div>
          <div>
            <p className="lp-main-p-text">
              With linguastream, you can translate YouTube videos to your
              desired languages, removing the need for subtitles.
            </p>
          </div>
          <div>
            <Button
              borderRadius={"1em"}
              color={"#1A4D2E"}
              width={"8em"}
              onClick={() => navigate("/signup")}
              marginBlockStart={"2em"}
            >
              <Text>Get started</Text>
            </Button>
          </div>
        </div>
        <div>
          <img className="lp-top-i i1" src={dennis} alt="Logo" />
          <img className="lp-top-i i2" src={avl} alt="Logo" />
          <img className="lp-top-i i4" src={algo} alt="Logo" />
        </div>
      </main>
      <div id="founders" className="founders">
        <h1 className="mtm">Meet the minds behind it all....</h1>
        <div className="founders-list">
          <img className="uspic" src={us} alt="" />
        </div>
      </div>
      <footer>
        <p>
          <span>&#169;</span>{" "}
          <a
            className="footer-name"
            target="_blank"
            href="https://www.linkedin.com/in/yenzein/"
          >
            yz
          </a>
          ,{" "}
          <a
            className="footer-name"
            target="_blank"
            href="https://www.linkedin.com/in/xhwong/"
          >
            xh
          </a>
          ,{" "}
          <a
            className="footer-name"
            target="_blank"
            href="https://www.linkedin.com/in/jeremy-p-1833291ab/"
          >
            jp
          </a>{" "}
          and{" "}
          <a
            className="footer-name"
            target="_blank"
            href="https://www.linkedin.com/in/acarochu/"
          >
            aa
          </a>{" "}
          at hawkhacks 2024
        </p>
        <p>
          <a href="#"></a>
        </p>
      </footer>
    </div>
  );
}

/*want to add a sliding effect for the founders*/
