import { ReactElement, useEffect, useState } from "react";
import { questions } from "../../data/questions";
import { QuestionId, ResponseId } from "../../data/types";
import { AdditionalContentComponent } from "../AdditonalContent";
import { ResponseComponent } from "../Response";
import React from "react";
import { Question } from "./question";
import { responses as fixedResponses } from "../../data/responses";
export const QuestionComponent = ({
  currentIndex,
  id,
  handleClick,
  responses,
  scrollToBottom,
}: {
  currentIndex: number;
  id: QuestionId;
  responses: ResponseId[];
  scrollToBottom: () => void;
  handleClick: (index: number, responseId: ResponseId) => void;
}): ReactElement => {
  const currentQuestionData = questions[id];
  const [showResponse, setShowResponse] = useState(false);

  useEffect(()=>{
    scrollToBottom();
    setTimeout(() => {
      setShowResponse(true);
    }, 1500 * currentQuestionData.question.length);
  }, [currentQuestionData, scrollToBottom]);
  
  const theResponses =
    currentQuestionData.responseOptions &&
    currentQuestionData.responseOptions.map((item) => {
      const currId = responses[currentIndex];
      const curr = fixedResponses[currId];
      return (        
        <ResponseComponent
          id={item}
          key={item}
          currentResponseId={responses[currentIndex]}
          onClick={() => handleClick(currentIndex, item)}
        />
      );
    });

  const showAddtionalContent =
    currentQuestionData?.additonalContent &&
    currentQuestionData?.additonalContent?.length !== 0;


  return (
    <>
      <Question
        questions={currentQuestionData.question}
        additionalContent={
          showAddtionalContent && (
            <AdditionalContentComponent
              contentIds={currentQuestionData.additonalContent}
            />
          )
        }
      />

      <div className="response-container">
      {theResponses?.length && showResponse && <> 
        {theResponses}
      </>
      }
      </div>
    </>
  );
};
