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
    renderConversation = () => {
        const conversation = convo.map((key, index)=>{
            return (<>
            <Question 
                question={key.question}
                questionIndex = {index}
                currentQuestion = {this.state.currentQuestion}
            />
            <Response
                responses = {key.responses}
                questionIndex = {index}
            />
            <CustomResponse
                questionIndex = {index}
                answersArray = {this.state.answers}
                customResponse = {key.customResponse}
            />
            </>)
        })
    return (<div className = "convo-container"> 
       {conversation}
     </div>)
    }
    render (){
        return (<>
        <h3> Convo Component</h3>
        {this.renderConversation()}
        </>)
    }
}