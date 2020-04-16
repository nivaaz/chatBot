import React from "react"

export const CustomResponse = (props) =>{
    if (props.questionIndex < props.currentQuestion){
        if (props.answers[props.questionIndex] == 1){
            return <p> {props.customResponse}</p>
        }
    }
    return <> </>
}