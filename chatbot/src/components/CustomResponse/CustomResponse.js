import React from "react"
import './customResponse.css';

export const CustomResponse = (props) => {
    console.log(props.questionIndex, props.currentQuestion)
    if (props.currentQuestion != 0) {
        if (props.questionIndex < props.currentQuestion) {
            if (props.answers[props.questionIndex] == 0) {
                return <p className="bubble"> {props.customResponse}</p>
            }
        }
    }
    return <> </>
}