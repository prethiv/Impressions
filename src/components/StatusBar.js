import React from "react";
import './styles/Feed.css'
import { faker } from '@faker-js/faker';
import statusData from './statusData.json';
import {Row,Col} from 'antd'
function StatusBar(){


    return (

        <Row >
            <Col xs={{ span: 0, offset: 0 }} sm={8} md={8} lg={8} xl={8} className="logo">
                {/* <img src={logo} className="logoImage"/> */}
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} className="post">
            <div className="row" id="statusBar">
            {statusData.map((statusdata)=>{
                return (
                <div>
                    <img src={faker.image.avatar()} className="statusImage" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <br/>
                    <label className="statusName">{faker.name.firstName()}</label>
                </div>
                )
            })}
        </div>
            </Col>
            <Col xs={{ span: 0, offset: 0 }} sm={8} md={8} lg={8} xl={8}>

            </Col>
        </Row>
        
    );
    

   
}

export default StatusBar;