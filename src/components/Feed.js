import { Col, Row } from "antd";
import React from "react";
import './styles/Feed.css'
import threeDots from './Icons/dots-three-vertical.png'
import { faker } from '@faker-js/faker';
import { Image } from "antd";
import likeIcon from './Icons/like.png'
import Comment from "./Icons/comment.png";
function Feed(props) {
    return (

        <Row >
            <Col xs={{ span: 0, offset: 0 }} sm={8} md={8} lg={8} xl={8} className="logo">
                {/* <img src={logo} className="logoImage"/> */}
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} className="post">
                <br />
                <label className="feedPost">{props.data.username}</label>
                <br />
                <label className="feedDate" >{props.data.datePosted}</label>
                <img src={threeDots} id="threeDots" />
                <br />
                <Image
                    width='100%'
                    src={faker.image.city()}
                />
                <img src={likeIcon} id="likeIcon" />
                <img src={Comment} id="likeIcon" />
                <label className="feedPost">{faker.lorem.paragraph()}</label>
            </Col>
            <Col xs={{ span: 0, offset: 0 }} sm={8} md={8} lg={8} xl={8}>

            </Col>
        </Row>

    );
}

export default Feed;