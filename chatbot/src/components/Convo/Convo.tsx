import React, { ReactElement, useEffect, useRef, useState } from "react";
import { responses } from "../../data/responses";
import { QuestionId, ResponseId } from "../../data/types";
import { QuestionComponent } from "../Question";
import "./convo.css";

export const Convo = (): ReactElement => {
  const [userQuestions, setuserQuestions] = useState<
    (QuestionId | undefined)[]
  >([QuestionId.INTRO]);
  const [userResponses, setuserResponses] = useState<ResponseId[]>([]);

  useEffect(() => {
    executeScroll();
  }, [userResponses]);

  const handleOnClickResponse = (
    index: number,
    responseId: ResponseId
  ): void => {
    // set selected response
      const newUserResponses = [...userResponses];
      newUserResponses[index] = responseId;
      setuserResponses(newUserResponses);
      // get follow up question
      const newUserQuestions = [...userQuestions];
      const nextQuestionId = responses[responseId].followUpQuestionId;
      newUserQuestions[index + 1] = nextQuestionId ?? undefined;
      setuserQuestions(newUserQuestions);  
  };

  const convoEndRef = useRef<HTMLInputElement>(null);
  const executeScroll = () => {
    if (convoEndRef) {
      convoEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const showQuestions = userQuestions.map((questionId, currentIndex) => {
    const theKey =  currentIndex + 'question';
    return questionId !== undefined ? (
      <QuestionComponent
        key={theKey }
        currentIndex={currentIndex}
        id={questionId}
        scrollToBottom={executeScroll}
        handleClick={handleOnClickResponse}
        responses={userResponses}
      />
    ) : (
      <></>
    );
  });

  return (
    <>
      <div className="convo-container">{showQuestions}</div>
      <div ref={convoEndRef}></div>
    </>
  );
};

