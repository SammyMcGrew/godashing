import firebase from "firebase";
import React, { Component } from 'react';
<<<<<<< HEAD
import ReactPlayer from 'react-player';
import ResponsivePlayer from '../../components/Videos/index';
import SignIn from '../../components/SignIn/index';
import { Table, Container, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { ZiggeoPlayer } from 'react-ziggeo';
=======
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
// import { useStore } from "react-redux";
import {ZiggeoPlayer} from 'react-ziggeo';
// import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';
>>>>>>> upstream/master



import './styles.scss';



class VideoGrid extends Component {
<<<<<<< HEAD

    constructor(props) {
        super(props);
        this.state = { vids: [] }
=======
    
    constructor (props) {
        super();
        this.state = ({

        })
        this.i =0;
>>>>>>> upstream/master
    }

    // componentDidMount = () => {
    //     this.context.Redux.getState(this.state)
    // }
    render() {
        return (
<<<<<<< HEAD
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
                    

                
=======
            <div> 
            <Container className = 'gridTest'>
                    
                    <Col>
                        <Row>
                        <ziggeorecorder
                            ziggeo-popup
                            ziggeo-theme="minimalist"
                            ziggeo-themecolor="blue"
                            // insert into tags user.email
                            tags={['test', 'test1']}
                            >
                        </ziggeorecorder>
                        </Row>
                    </Col>
                   
                   <ZiggeoPlayer
                   apiKey={'a293c346773385bae50fb960f2210d2d'}
                   video={'a741bfcb8dd370845ef2393ca614dc85'}
                   theme={'mminimalist'}
                   themecolor={'blue'}
                   skipinitial={false}
                   onPlaying={this.playing}
                   onPaused={this.paused}
                 />

            </Container>
>>>>>>> upstream/master
            </div>

        )

    }

}

export default VideoGrid;
