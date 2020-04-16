import React from "react"
import { Question } from "../Question/Question";
import { Response } from "../Response/Response";
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
            />
            <Response
                responses = {key.responses}
                questionIndex = {index}
            />
            </>)
        })
    return (<div className = "convo-container"> 
       {conversation}
     </div>)
    }
    render (){
        return (<>
        <h1> Convo Component</h1>
        {this.renderConversation()}
        </>)
    }
}