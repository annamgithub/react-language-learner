import React, { Component } from 'react'
import '../Card/Card.css'
import { sentences } from '../Sentences'
import Button from 'react-bootstrap/Button';

// *** Variable Declarations ***
const allData = sentences
// Get random keys from object - https://stackoverflow.com/questions/53334851/loop-through-object-and-get-random-item-in-javascript
const keys = Object.keys(sentences);
const alreadyDisplayed = keys[Math.floor(Math.random() * keys.length)];
const currentQ = allData[alreadyDisplayed];
let correctAnswer = allData[alreadyDisplayed].conjugatedVerb
console.log("Correct Answer:", correctAnswer);
const choices = [allData[alreadyDisplayed].conjugatedVerb, allData[alreadyDisplayed].wrongAnswers[0], allData[alreadyDisplayed].wrongAnswers[1], allData[alreadyDisplayed].wrongAnswers[2]];

let shuffled = shuffle(choices)
const answerChoices = shuffled.map((choice, index) => ({
    label: choice,
    value: index,
}))

const infinitiveVerb = allData[alreadyDisplayed].infinitiveVerb

//How to shuffle using Fisher-Yates Shuffle: https://bost.ocks.org/mike/shuffle/
function shuffle(choices) {
    var m = choices.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = choices[m];
        choices[m] = choices[i];
        choices[i] = t;
    }
    return choices;
}
shuffle(choices)


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answeredCorrectly: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.currentQWithBlank()
    }

    handleClick(id) {
        console.log("You pressed", answerChoices[id].label)

        if (answerChoices[id].label !== correctAnswer) {
            this.setState({
                answeredCorrectly: 'false'
            })
            return console.log("You are wrong.")
        } else if (answerChoices[id].label === correctAnswer) {
            this.setState({
                answeredCorrectly: 'true'
            })
            return console.log("You are right.")
        }
    };

    refresh() {
        setTimeout(function () { this.location.reload() }, 0)
    }

    // *** Display Spanish Question Sentence with Blank ***
    currentQWithBlank() {
        let arr = currentQ.es.split(" ")
        let lengthArr = arr.length;
        let i = 0;

        for (i >= 0; i < lengthArr; i++) {
            if (arr[i].toLowerCase() === currentQ.conjugatedVerb) {
                let convertToStr = arr[i].toString()
                let replaceWithBlank = currentQ.es.replace(convertToStr, "______")
                return replaceWithBlank;
            }
        }
    }
    // *** End of Display of Spanish Question Sentence with Blank ***


    render() {

        if (this.state.answeredCorrectly === 'false') {
            return (
                <div className="card-container">
                    <div className="show-cards">

                        <h4 className="question-es">{this.currentQWithBlank()}</h4>
                        <p className="question-en">{currentQ.en}</p>
                        <div className="answer-space">
                            <h4 className="incorrect">Incorrect! The right answer is <i><u>{correctAnswer}</u></i>. <br></br><a href={`https://www.spanishdict.com/conjugate/${infinitiveVerb}`} target="_blank"><u style={{ color: "white" }}>Review here</u></a>.<br></br>
                            <Button
                                    className="next-button"
                                    onClick={this.refresh}
                                >
                                    Next Question
                        </Button>
                            </h4>
                        </div>

                        <div>
                            {answerChoices.map((_obj, id) => (
                                <Button
                                    key={Math.random()}
                                    id={id}
                                    className="choice-button"
                                    onClick={() => this.handleClick(id)}>{answerChoices[id].label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.answeredCorrectly === 'true') {
            return (<div className="card-container">
                <div className="show-cards">

                    <h4 className="question-es">{currentQ.es}</h4>
                    <p className="question-en">{currentQ.en}</p>
                    <div className="answer-space">
                        <h4 className="correct"><span>🌟</span> Correct! Muy bien! <br></br>
                            <Button
                                className="next-button"
                                onClick={this.refresh}
                            >
                                Next Question
                        </Button>
                        </h4>
                    </div>

                    <div>
                        {answerChoices.map((_obj, id) => (
                            <Button
                                key={Math.random()}
                                id={id}
                                className="choice-button"
                                onClick={() => this.handleClick(id)}>{answerChoices[id].label}
                            </Button>

                        ))}

                    </div>

                </div>
            </div>)
        } else {
            return (<div className="card-container">
                <div className="show-cards">

                    <h4 className="question-es">{this.currentQWithBlank()}</h4>
                    <p className="question-en">{currentQ.en}</p>
                    <div className="answer-space"></div>
                    <div>
                        {answerChoices.map((_obj, id) => (
                            <Button
                                key={Math.random()}
                                id={id}
                                className="choice-button"
                                onClick={() => this.handleClick(id)}>{answerChoices[id].label}
                            </Button>
                        ))}

                    </div>
                </div>
            </div>)
        }

    }
}

export default Card;


