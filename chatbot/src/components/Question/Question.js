import React from "react"

export const Question = (props) =>{
    if (props.questionIndex <= props.currentQuestion){
        return <p> {props.question}</p>
    }
    return <> </>
}