import { Component } from "react";
import "./App.css";

const basicLetters = "asdfjkl;";
class App extends Component {
  state = {
    string: basicLetters,
    typedStr: "",
    entered: false,
  };

  onTyping = (event) => {
    console.log(event.target.value);
    console.log(event.code);
    if (event.key === "Enter") {
      this.setState({ entered: true });
    } else {
      this.setState({ typedStr: event.target.value });
    }
  };

  onRefreshing = () => {
    let newString = "";
    let strLen = Math.ceil(Math.random() * 20);
    for (let i = 0; i < strLen; i++) {
      let indexNum = Math.floor(Math.random() * basicLetters.length);
      newString += basicLetters[indexNum];
    }

    this.setState({ string: newString });
  };

  onRenderingHome = () => {
    const { string, typedStr } = this.state;

    return (
      <div className="innerCon">
        <h1 className="mainH">Learn Typing</h1>
        <p className="mainP">
          Type the given sentence in the text-box and press enter to see your
          Score and Accuracy.
        </p>
        <div className="sentCon">
          <h1 className="mainS">{string}</h1>
          <input
            type="text"
            className="inpEl"
            onChange={this.onTyping}
            value={typedStr}
            onKeyDown={this.onTyping}
          />
          <button
            type="button"
            className="changeBton"
            onClick={this.onRefreshing}
          >
            change sentence
          </button>
        </div>
      </div>
    );
  };

  onResetting = () => {
    let newString = "";
    let strLen = Math.ceil(Math.random() * 20);
    for (let i = 0; i < strLen; i++) {
      let indexNum = Math.floor(Math.random() * basicLetters.length);
      newString += basicLetters[indexNum];
    }

    this.setState({ string: newString, typedStr: "", entered: false });
  };

  onRenderScore = () => {
    const { string, typedStr } = this.state;
    let score = 0;
    for (let j = 0; j < typedStr.length; j++) {
      if (string[j] === typedStr[j]) {
        score += 1;
      }
    }
    let accuracy = Math.ceil((score / string.length) * 100);

    return (
      <div className="scoreCon">
        <h1 className="scoreH">
          Score: {score} / {string.length}
        </h1>
        <h1 className="accH">Accuracy: {accuracy}</h1>
        <button type="button" className="resetBton" onClick={this.onResetting}>
          Restart
        </button>
      </div>
    );
  };

  render() {
    const { entered } = this.state;
    return (
      <div className="mainCon">
        {entered ? this.onRenderScore() : this.onRenderingHome()}
      </div>
    );
  }
}

export default App;
