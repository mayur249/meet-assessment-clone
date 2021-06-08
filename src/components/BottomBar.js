import React, { useState } from "react";
import {
  CallEnd,
  ExpandLess,
  MicNone,
  MicOffOutlined,
  MoreVert,
  VideocamOffOutlined,
  VideocamOutlined,
} from "@material-ui/icons";
import "../css/bottom_bar.css";

const BottomBar = () => {

    const [audioOn, setAudioOn] = useState(false);
    const [videoOn, setVideoOn] = useState(false);

    
      const toogleVideoState = () => {
        setVideoOn(!videoOn);
      };
    
      const toogleAudioState = () => {
        setAudioOn(!audioOn);
      };
    
    return (
        <>
    
          <div className="controls">
            <div className="details_control" >
              <p>Meeting details</p>
              <ExpandLess />
            </div>
    
            <div className="video-audio_contorls">
              <div
                className={`control_btnContainer ${!audioOn && "red-bg"}`}
                onClick={toogleAudioState}
              >
                {audioOn ? (
                  <MicNone className="control-icon" />
                ) : (
                  <MicOffOutlined className="control-icon" />
                )}
              </div>
    
              <div className="control_btnContainer">
                <CallEnd className="control-icon end-meet" />
              </div>
    
              <div
                className={`control_btnContainer ${!videoOn && "red-bg"}`}
                onClick={toogleVideoState}
              >
                {videoOn ? (
                  <VideocamOutlined className="control-icon" />
                ) : (
                  <VideocamOffOutlined className="control-icon" />
                )}
              </div>
            </div>
    
            <MoreVert className="more-icon" />
          </div>
        </>
      );
};

export default BottomBar;
