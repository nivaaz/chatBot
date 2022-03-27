import { ReactElement, useState } from "react";
import { questions } from "../../data/questions";
import { QuestionId, ResponseId } from "../../data/types";
import { AdditionalContentComponent } from "../AdditonalContent";
import { ResponseComponent } from "../Response";
import React from "react";
import { Question } from "./question";

export const QuestionComponent = ({
    currentIndex,
    id,
    handleClick,
    responses,
    scrollToBottom
  }: {
    currentIndex: number;
    id: QuestionId;
    responses: ResponseId[];
    scrollToBottom: ()=> void;
    handleClick: (index: number, responseId: ResponseId) => void;
  }): ReactElement => {
    
      scrollToBottom()
    
    const currentQuestionData = questions[id];
  
    const theResponses =
      currentQuestionData.responseOptions &&
      currentQuestionData.responseOptions.map((item) => (
        <ResponseComponent
          id={item}
          key={item}
          currentResponseId={responses[currentIndex]}
          onClick={() => handleClick(currentIndex, item)}
        />
      ));
  
    const showAddtionalContent =
      currentQuestionData?.additonalContent &&
      currentQuestionData?.additonalContent?.length !== 0;
    const hasResponses = theResponses?.length ;
    return (
      <>
        <Question questions = {currentQuestionData.question} additionalContent = {
          showAddtionalContent && (
               <AdditionalContentComponent contentIds={currentQuestionData.additonalContent}/>
          )}/>
        
        
        <div className="response-container">
        {hasResponses && <p> Select a response. </p>}
        {theResponses} </div>
      </>
    );
  };
  
