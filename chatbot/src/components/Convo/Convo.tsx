import React, { ReactElement, useEffect, useRef, useState } from "react";
import { questions } from "../../data/questions";
import { responses } from "../../data/responses";
import { QuestionId, ResponseId } from "../../data/types";
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

  const convoRef = useRef<HTMLInputElement>(null);
  const executeScroll = () => {
    if (convoRef) {
      convoRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showQuestions = userQuestions.map((currentIndex, questionId) => {
    return currentIndex !== undefined ? (
      <QuestionComponent
        key={currentIndex + questionId}
        currentIndex={currentIndex}
        id={questionId}
        handleClick={handleOnClickResponse}
      />
    ) : (
      <></>
    );
  });

  return (
    <div ref={convoRef} className="convo-container">
      {showQuestions}
    </div>
  );
};

const QuestionComponent = ({
  currentIndex,
  id,
  handleClick,
}: {
  currentIndex: number;
  id: QuestionId;
  handleClick: (index: number, responseId: ResponseId) => void;
}): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useState(() => {
    setTimeout(() => {
      setIsLoading(false);
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
        onClick={() => handleClick(currentIndex, item)}
      />
    ));

  return (
    <>
      <div className="bubble"> {currentQuestionData.question} </div>
      <div className="response-container">{theResponses} </div>
    </>
  );
};

const ResponseComponent = ({
  id,
  onClick,
}: {
  id: ResponseId;
  onClick: () => void;
}): ReactElement => {
  const theResponse = responses[id];
  return (
    <>
      <button className="s bubble" onClick={onClick}>
        {theResponse.response}{" "}
      </button>
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
