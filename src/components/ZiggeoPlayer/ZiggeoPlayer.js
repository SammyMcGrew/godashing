import React, { useState, useEffect, useRef } from 'react';
import withZiggeoApplication from "./withZiggeoApplication";
import {ZiggeoRecorder} from 'react-ziggeo';
import {ZiggeoPlayer} from 'react-ziggeo';
import {
    ziggeoPlayerAttributesPropTypes,
    ziggeoPlayerEmbeddingEventsPropTypes,
    ziggeoCommonEmbeddingEventsPropTypes,
    ziggeoPlayerApplicationOptions,
    reactCustomOptions
} from './constants';

var ziggeo_app = new ZiggeoApi.V2.Application({
    token:"a293c346773385bae50fb960f2210d2d",
    webrtc_streaming_if_necessary: true,
    webrtc_on_mobile: true,
    auth: true
  });
const element = document.getElementById('elementID');
const embedding = ZiggeoApi.V2.Player.findByElement(element);

return (
ziggeoApp.on("ready", function() {
    var ziggeoApp = new ZiggeoApi.V2.Player({
        element: document.getElementById("replace_me_v2_player"),
        attrs: {
            width: "",
            height: "",
            theme: "modern",
            themecolor: "purple",
            video: "_sample_video"
            }
        });
    ziggeoApp.activate();
    })
);

 export default withZiggeoApplication(ZiggeoPlayer);
 
