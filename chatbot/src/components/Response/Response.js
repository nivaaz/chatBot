import React from "react"
import './response.css';

export const Response = (props) =>{
    if (props.questionIndex < props.currentQuestion ){
        const resp =  (props.responses.map((key, index)=>{
            return (
            <button 
            value={index} 
            name ={props.questionIndex}
            className = {(props.answers[props.questionIndex] === index)
                        ? "selected s bubble"
                        : "s bubble"}
            onClick = {props.handleResponseClick}
            key = {index}
            > 
            {key} 
            </button>)
        }))
        return <div className="response-container"> {resp} </div>
    } else if (props.questionIndex === props.currentQuestion){
        const resp = (props.responses.map((key, index)=>{
           return  (<button 
            className = "s bubble"
            value={index} 
            key = {index}
            name ={props.questionIndex}
            onClick = {props.handleResponseClick}
            > 
            {key} </button>)
        }))
        return <div className="response-container"> {resp} </div>

    }
    return (<> </>)
}