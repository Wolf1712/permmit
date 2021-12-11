import React from 'react'
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Card } from "antd";

import { Alert } from "antd";


const { Meta } = Card;

const PermissionCard = ({ name, message, caption, id,status}) => {
  console.log(status);
    return (
        <>
        {
            (status==='null')?
            <div className="App">
      <div id="creator" className="block featureBlock bgGray">
        <div className="container-fluid">
          
          <div className="cards" style={{margin:"20px"}}>
            <Row gutter={[16, 16]} style={{margin : "0 -180% 0 0"}}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
             <Card hoverable>
                  <Alert
                    message="pending"
                    description={message}
                    type="warning"
                    showIcon
                  />
                  <hr />
                  <Meta title={name} />
                </Card>
                 </Col>
                 </Row>
          </div>
        </div>
      </div>
    </div>: (status==='false')?<div className="App">
      <div id="creator" className="block featureBlock bgGray">
        <div className="container-fluid">
          
          <div className="cards" style={{margin:"20px"}}>
            <Row gutter={[16, 16]} style={{margin : "0 -180% 0 0"}}>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
             <Card hoverable>
                  <Alert
                    message="Declined"
                    description={message}
                    type="error"
                    showIcon
                  />
                  <hr />
                  <Meta title={name} />
                </Card>
                 </Col>
                 </Row>
          </div>
        </div>
      </div>
    </div>: <div className="App">
      <div id="creator" className="block featureBlock bgGray">
        <div className="container-fluid">
          
          <div className="cards" style={{margin:"20px"}}>
            <Row gutter={[16, 16]} style={{margin : "0 -180% 0 0"}} >
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
             <Card hoverable>
                  <Alert
                    message="Accepted"
                    description={message}
                    type="success"
                    showIcon
                  />
                  <hr />
                  <Meta title={name} />
                </Card>
                 </Col>
                 </Row>
          </div>
        </div>
      </div>
    </div>
      
        }  
         </>  
    )
}

export default PermissionCard
