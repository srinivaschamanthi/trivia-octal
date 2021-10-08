
import React, { Component } from 'react'
import "./App.css"

export default class TriviaGame extends Component {
    state = {
        question: "",
        answer: "",
        result:"",
        userAnswer:"",
    }
    search = async() => {
        
        const api_call = await fetch(`https://jservice.io/api/random`);
        const data = await api_call.json();
        console.log(data);

        this.setState({
            question: data[0].question,
            answer: data[0].answer,
            result:""

        })

    }
    submit = () =>{
        let str = this.state.userAnswer.toLowerCase();
        let str1 = this.state.answer.toLowerCase();
        if (str1 === str){
            this.setState({
                result: "Correct Answer"
            }) 
        }else{
            this.setState({
                result: "Wrong Answer"
            }) 
        }
        this.setState({
            userAnswer:""
        })
    }
    onChangeAnswer = (e) => {
        this.setState({
            userAnswer: e.target.value
        })
    }


    render() {
        return (
            <div className="bg-container">
                <h1>Let's Play a Game</h1>
                <button onClick={this.search}>Get Random Question</button>

                <h4 className="question">{this.state.question} </h4>
                <input type="text" required placeholder="Enter your answer" value={this.state.userAnswer} onChange={this.onChangeAnswer}/>
                <br/>
                <button onClick={this.submit}>Submit</button>
                <h1>{this.state.result}</h1>

            </div>
        )
    }
}
