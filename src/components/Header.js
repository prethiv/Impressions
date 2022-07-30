import { Col, Row } from "antd";
import React from "react";
import './styles/Header.css'
import logo from './Icons/hotmail.png'
import HomeIcon from './Icons/home.png'
import ChatIcon from './Icons/chat.png'
import SearchIcon from './Icons/search.png'
import ReactTooltip from 'react-tooltip';
function Header(){
    return (
        <Row>
            <Col xs={{span:10,offset:0}} sm={10} md={10} lg={8} xl={8} className="logo">
                <img src={logo} className="logoImage"/>
            </Col>
            <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            <label className="App-Name">Impressions</label>
            </Col>
            <Col xs={{span:14,offset:0}} sm={14} md={14} lg={8} xl={8}>
            <ReactTooltip />
                <img src={HomeIcon} className="homeIcon" data-tip="Home" />
                <img src={ChatIcon} className="homeIcon" data-tip="Chat"/>
                <img src={SearchIcon} className="homeIcon" data-tip="Search"/>
            </Col>
        </Row>
    );
}

export default Header;