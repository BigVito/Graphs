import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
 const canvasWidth = 700;
 const canvasHeight = 800;

/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    
    // Clear it
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    //Green Rectangul
    ///ctx.fillRect(0, 0, 100, 100);
  
    // LINES
    ctx.moveTo(350,50);
    ctx.lineTo(450,100);
    ctx.stroke();

    ctx.moveTo(350,50);
    ctx.lineTo(250,100);
    ctx.stroke();

    // CIRCLE
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(350, 50, 10, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();
  
    //TEXT inside of circle
    ctx.font = "10px Arial";
    ctx.strokeStyle = "black";
    ctx.strokeText("1", 347, 52)
    // !!! IMPLEMENT ME
  
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
  }
  
  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight}></canvas>;
  }
}


/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph}></GraphView>
      </div>
    );
  }
}

export default App;
