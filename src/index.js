import React from "react";
import ReactDOM from "react-dom";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import "./index.css";

class App extends React.Component {
  state = {width:window.innerWidth/1.5,height:window.innerHeigh/1.2}
  componentDidMount() {
    const video = document.getElementById("video");
    const webCamPromise = navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: this.state.width,
          height:this.state.height 
        }
      })
      .then(stream => {
        video.srcObject = stream;
        return new Promise((resolve, reject) => {
          video.onloadedmetadata = () => {
            video.play();
            resolve();
          };
        });
      });
    const modelPromise = cocoSsd.load();
    Promise.all([modelPromise, webCamPromise]).then(values => {
      this.detectFrame(video, values[0]);
    });
  }

  detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  renderPredictions = predictions => {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "20px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 20); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
  };

  render() {
    return (
      <div className="container">
              <div className="lds-roller"><div>
                </div><div>
                  </div><div>
                    </div><div>
                      </div><div>
                        </div><div>
                          </div><div>
                            </div><div>
                              </div></div>
              <video id="video" className="higher" width={this.state.width} height="720" />
              <canvas id="canvas" className="higher" width="1200" height="720" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
