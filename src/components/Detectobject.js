import React from 'react';
import * as ccossd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { Row, Col, Card } from 'react-materialize';
import './Detectobject.css';


class Detectobject extends React.Component{


    componentDidMount() {
        
    }



    render() {
        return (
          <div className="container">
            <center>
              <Row>
                <Col m={6} s={12}>
                  <Card
                    className="blue-grey darken-1"
                    textClassName="white-text"
                    title="Card title"
                    actions={[<a />, <a />]}
                  >
                    I am a very simple card.
                  </Card>
                </Col>
              </Row>
            </center>
          </div>
        );
    }
}


export default Detectobject;
