import React from "react"
import './response.css';

export const Response = (props) =>{
    const renderBubble = (_value, _name,_key, isSelected)=>{
      return (
            <button 
            value={_value} 
            name ={_name}
            className = {isSelected
                ? "selected s bubble"
                : "s bubble"}
            onClick = {props.handleResponseClick}
            key = {_key}
            > 
            {_key} 
            </button>)
    }
    if (props.questionIndex < props.currentQuestion ){
        const resp =  (props.responses.map((key, index)=>{
            const isSelected = (props.answers[props.questionIndex] === index);
            return renderBubble(index,props.questionIndex,key, isSelected);
        }))
        return <div className="response-container"> {resp} </div>
    } else if (props.questionIndex === props.currentQuestion){
        const resp = (props.responses.map((key, index)=>{
           return  renderBubble(index,props.questionIndex,key, false);
        }))
        return <div className="response-container"> {resp} </div>
    }
    return (<> </>)
}