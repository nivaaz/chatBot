import React, { ReactElement, useState } from "react"
import { questions } from "../../data/questions";
import { responses } from "../../data/responses";
import { QuestionId, ResponseId } from "../../data/types";
import "./convo.css";

export const Convo = (): ReactElement =>{
    const [userQuestions, setuserQuestions] = useState<(QuestionId | undefined)[]>([QuestionId.INTRO]);
    const [userResponses, setuserResponses] = useState<ResponseId[]>([]);
    console.log({userResponses})

    const handleOnClickResponse = (index: number, responseId: ResponseId):void => {
        // set selected response
        const newUserResponses = [...userResponses];
        newUserResponses[index] = responseId
        setuserResponses(newUserResponses)
        // get follow up question
        const newUserQuestions = [...userQuestions]
        const nextQuestionId = responses[responseId].followUpQuestionId
        newUserQuestions[index+1] = nextQuestionId ?? undefined;
        setuserQuestions(newUserQuestions)
    }

    const showQuestions = userQuestions.map((questionIndex, questionId)=>{
        return questionIndex !== undefined ?
         <QuestionComponent 
         key={questionIndex+questionId}
         questionIndex={questionIndex} 
         id={questionId} 
         handleClick={handleOnClickResponse} />
         : <></>
    })



return (<>
        {showQuestions}
    </>)
}

const QuestionComponent = ({questionIndex, id, handleClick} : {questionIndex:number, id: QuestionId, handleClick: (index: number, responseId: ResponseId)=>void;}): ReactElement =>{
    const theQuestion = questions[id];
    const theResponses = theQuestion.responseOptions && theQuestion.responseOptions.map(
        (item)=>
        (<ResponseComponent 
            id={item} 
            key={item}
            onClick={()=>handleClick(questionIndex, item)}/>))

    return (
        <>
        <div> Question </div>
        {theResponses}
        </>
    )
}


const ResponseComponent = ({id, onClick} : {id: ResponseId, onClick: ()=>void;}): ReactElement =>{
    const theResponse = responses[id];
    
    return (
        <>
        <button onClick={onClick}> {theResponse.response} </button>
        </>
    )
}