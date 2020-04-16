import React from "react"

export const Response = (props) =>{
    if (props.questionIndex < props.currentQuestion ){
        return (props.responses.map((key, index)=>{
            return (<button 
            value={index} 
            name ={props.questionIndex}
            className = {(props.answers[props.questionIndex] == index)
            ? "selected"
            : ""}
            > 
            {key} </button>)
        }))
    } else if (props.questionIndex === props.currentQuestion){
        return (props.responses.map((key, index)=>{
           return  (<button 
            value={index} 
            name ={props.questionIndex}
            > 
            {key} </button>)
        }))
    }
    return (<> </>)
}