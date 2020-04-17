import React from "react"

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