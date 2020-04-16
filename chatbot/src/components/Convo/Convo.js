import React from "react"
import { Question } from "../Question/Question";
import { Response } from "../Response/Response";

export class Convo extends React.Component {
    state = {
        currentQuestion: 0, 
        answers: []
    };
    render (){
        return (<>
        <h1> Convo Component</h1>
        <Question 
        />
        <Response
        />
        </>)
    }
}