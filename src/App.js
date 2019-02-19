import React, { Component } from 'react';
import './App.css';
// import data from './data';
import Prism from 'prismjs';// eslint-disable-line no-unused-vars
import "./css/prism.css";
import { fromJS, getIn } from 'immutable';// eslint-disable-line no-unused-vars

class App extends Component {
  componentDidMount() {
 }
  render() {
    const data = [];
    for(let x=0; x<3; x++) {
      data.push([])
      for(let y=0; y<3; y++) {
        data[x].push({
          xPosition: x,
          yPosition: y,
          color: "green"
        })
      }
    }
    let coolGuyData = fromJS(data)
    console.log("data!!", coolGuyData.getIn([0,88,"color"]) === "green");






    return (
      <div className="App">
        <h1>immutablejs 101</h1>
        <h2>using fromJS() and getIn()...Immutable Maps for cleaner code</h2>
        <h3>getting a nested value from an object without checking if it exists..</h3>
        <p>One way to represent a grid is using a 2dimensional array of objects.<br/>
          The first dimension represents rows, columns are the second,
          and the objects are for a specific square to hold square state.</p>
      <pre>
        <code className="language-javascript">{`
        const gridSize = 5;
        const grid = [];
        for(let x=0; x<gridSize; x++) {
          grid.push([])
          for(let y=0; y<gridSize; y++) {
            grid[x].push({
              xPosition: x,
              yPosition: y,
              color: "green"
            })
          }
        }`}</code>
      </pre>

        <p>so we can now access specific squares with <code>grid[rowNumber][columnNumber].<br /> I was checking all of the surrounding grid squares and ran into this ugly piece of code...</code></p>
        <pre>
          <code className="language-javascript">{`
            if(grid[x] && //is there a row x?
              grid[x][y] && // is there a column y in row x?
              grid[x][y].color && // is there a color prop "green in column y in row x?"
              grid[x][y].color ==="green") /*why so much duplicated code?? */{
                //do something
            }
          `}
        </code>
      </pre>
      <p>So a question would be, "why didn't you just..."</p>
        <pre>
          <code className="language-javascript">{`
            if(grid[x][y].color === "green") {
              //do something
            }
          `}
        </code>
      </pre>
      <p>Now we have come to a problem with standard javascript objects. <br/>
      The above code snippet would return a typeError if I didn't check the verbose way I did 2 snippets above.<br/>
    I would rather have the compiler return an undefined value, as opposed to throwing an error.<br/>
  Immutable's Map Object gives us a work-a-round for this problem.
      </p>
      <p>add the immutable library to your project...</p>
      <code>npm install --save immutable</code><br/>
      <p>import functions (just 2 for now) from the lib at the top of your file</p>
      <code className="language-javascript">{`import { fromJS, getIn } from 'immutable';`}</code>
      <p>fromJS()... pass it a javascript object and you will now have an immutable Map.</p>
      <code className="language-javascript">{`
        const newBetterGrid = fromJS(grid);
            `}</code>
          <p> Now if i try to access a value that doesn't exist, I just get undefined values.The program still runs fine without throwing a typeError!</p>
            <code className="language-javascript">{`
              newBetterGrid.getIn([99, 88, "color"]) //doesn't throw a typeError!
                  `}</code>
                <p>that getIn() function takes an array of keys. I tried to access the "color" prop of the 99th row & 88th column square</p>
        <p>So instead of ...</p>
        <code className="language-javascript">{`grid[40][80].color`}</code>
        <p>...we needed...</p>
          <code className="language-javascript">{`grid.getIn([40, 80, "color"])`}</code>
        <p>and our data needed to be converted to an Immutable Map with our fromJS() func.</p>
          <code className="language-javascript">{`const newGrid = fromJS(grid)`}</code>
        <p>but now we can write much cleaner code.. My journey into ImmutableJS has begun</p>
{            // <code className="language-javascript">{``}</code>
}      </div>
    );
  }
}

export default App;
