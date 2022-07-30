import React from 'react';
import { Row,Col } from 'antd';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import { faker } from '@faker-js/faker';
import StatusBar from './components/StatusBar';
const App = () => {
  let post=[];
  for(let i=0;i<10;i++){
    post.push({
      username:faker.name.firstName(),
      datePosted:"29-07-2022"
    })
  }
  return (<div className="App">
    <Header/>
    <StatusBar/>
    <br/>
    {post.map(p=>{
      return <div><Feed data={p} /><br/></div>
    })}
    <Feed data={{username:"Prethiv",datePosted:"29-07-2022"}} />
    {/* <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10} className="Hello">
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4} className="Hello1">
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10} className="Hello2">
      Col
    </Col>
  </Row> */}
  </div>);
};

export default App;