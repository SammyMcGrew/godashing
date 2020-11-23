import firebase from "firebase";
import React, { Component } from 'react';
import {Table, Container, Grid, Row, Col, Image, Button} from 'react-bootstrap';
// import { useStore } from "react-redux";
import {ZiggeoPlayer} from 'react-ziggeo';
// import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';



import './styles.scss';



class VideoGrid extends Component {
    
    constructor (props) {
        super();
        this.state = ({

        })
        this.i =0;
    }

    // componentDidMount = () => {
    //     this.context.Redux.getState(this.state)
    // }
    render() {
        return (
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
            </div>
    
        )
        
    }
     
}

export default VideoGrid;
