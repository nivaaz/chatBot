import { ReactElement, useState } from "react";
import { questions } from "../../data/questions";
import { QuestionId, ResponseId } from "../../data/types";
import { AdditionalContentComponent } from "../AdditonalContent";
import { ResponseComponent } from "../Response";
import React from "react";

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
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useState(() => {
      setTimeout(() => {
        setIsLoading(false);
        scrollToBottom()
      }, 3000);
    });
  
    if (isLoading) {
      return <Loading />;
    }
  
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
         {currentQuestionData.question.map(q =>(<div className="bubble">{q}</div>))} 
        {showAddtionalContent && (
          <div className="bubble">
             <AdditionalContentComponent contentIds={currentQuestionData.additonalContent}/>
          </div>
        )}
        
        <div className="response-container">
        {hasResponses && <p> Select a response. </p>}
        {theResponses} </div>
      </>
    );
  };
  
const Loading = (): ReactElement => (
    <div className="loading">
      <div className="dot1"></div>
      <div className="dot2"></div>
      <div className="dot3"></div>
    </div>
  );
  