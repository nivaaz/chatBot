import React from "react"

export const Question = (props) =>{
    if (props.questionIndex <= props.currentQuestion){
        return <p className = "bubble" key={props.questionIndex}> {props.question}</p>
    }
    return <> </>
}