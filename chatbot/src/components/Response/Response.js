import React from "react"

export const Response = (props) =>{
    // console.log(props.questionIndex, props.currentQuestion)
    if (props.questionIndex < props.currentQuestion ){
        return (props.responses.map((key, index)=>{
            return (<button 
            value={index} 
            name ={props.questionIndex}
            className = {(props.answers[props.questionIndex] === index)
            ? "selected"
            : ""}
            onClick = {props.handleResponseClick}
            key = {index}
            > 
            {key} </button>)
        }))
    } else if (props.questionIndex === props.currentQuestion){
        return (props.responses.map((key, index)=>{
           return  (<button 
            value={index} 
            key = {index}
            name ={props.questionIndex}
            onClick = {props.handleResponseClick}
            > 
            {key} </button>)
        }))
    }
    return (<> </>)
}