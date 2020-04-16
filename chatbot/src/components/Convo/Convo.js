import React from "react"
import { Question } from "../Question/Question";
import { Response } from "../Response/Response";
import { CustomResponse } from "../CustomResponse/CustomResponse";
import convo from '../../data/convo.json';

export class Convo extends React.Component {
    state = {
        currentQuestion: 0, 
        answers: []
    };
    onClickResponse = (e)=>{

        console.log(e.target.value, "value")
        console.log(e.target.name, "name")
        const questionIndex = Number(e.target.name);
        const answerResult = Number(e.target.value);
        let ans = this.state.answers;
        ans[questionIndex] = answerResult;

        this.setState({
            currentQuestion: questionIndex+1,
            answers:ans}, 
            console.log(
                "state",
                this.state.answers,
                this.state.currentQuestion));
    }
    renderConversation = () => {
        const conversation = convo.map((key, index)=>{
            return (<div key = {key}>
            <Question 
                question={key.question}
                questionIndex = {index}
                currentQuestion = {this.state.currentQuestion}
            />
            <Response
                responses = {key.responses}
                currentQuestion = {this.state.currentQuestion}
                answers = {this.state.answers}
                questionIndex = {index}
                handleResponseClick = {this.onClickResponse}
            />
            <CustomResponse
                questionIndex = {index}
                currentQuestion = {this.state.currentQuestion}
                answers = {this.state.answers}
                customResponse = {key.customResponse}
            />
            </div>)
        })
    return (<div className = "convo-container">{conversation}</div>)
    }
    render (){
        return (<>
        <h3> Convo Component</h3>
        {this.renderConversation()}
        </>)
    }
}