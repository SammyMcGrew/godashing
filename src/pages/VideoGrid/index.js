import firebase from "firebase";
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ResponsivePlayer from '../../components/Videos/index';
import SignIn from '../../components/SignIn/index';
import { Table, Container, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { ZiggeoPlayer } from 'react-ziggeo';



import './styles.scss';



class VideoGrid extends Component {

    constructor(props) {
        super(props);
        this.state = { vids: [] }
    }

    render() {
        return (
            <div className='gridTest'>
                

                    <ziggeorecorder
                        ziggeo-popup
                        ziggeo-theme="minimalist"
                        ziggeo-tags="{tag}"
                        ziggeo-themecolor="blue">
                    </ziggeorecorder>


                    <ZiggeoPlayer
                        apiKey={'a293c346773385bae50fb960f2210d2d'}
                        video={'a741bfcb8dd370845ef2393ca614dc85'}
                        theme={'mminimalist'}
                        themecolor={'blue'}
                        skipinitial={false}
                        onPlaying={this.playing}
                        onPaused={this.paused}
                        tags={['email', 'username']}
                    />
                    

                
            </div>

        )

    }

}

export default VideoGrid;
