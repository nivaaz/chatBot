import { LinkPreview } from "@dhaiwat10/react-link-preview";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { additionalContent } from "../../data/additionalContent";
import { questions } from "../../data/questions";
import { responses } from "../../data/responses";
import { AdditionalContentId, QuestionId, ResponseId } from "../../data/types";
import YoutubeEmbed from "../YoutubeEmbed";
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
      convoRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const showQuestions = userQuestions.map((currentIndex, questionId) => {
    return currentIndex !== undefined ? (
      <QuestionComponent
        key={currentIndex + questionId}
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
      <div ref={convoRef}></div>
    </>
  );
};

const QuestionComponent = ({
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

  return (
    <>
       {currentQuestionData.question.map(q =>(<div className="bubble">{q}</div>))} 
      {showAddtionalContent && (
        <div className="bubble">
           <AdditionalContentComponent contentIds={currentQuestionData.additonalContent}/>
        </div>
      )}
      <div className="response-container">{theResponses} </div>
    </>
  );
};

const AdditionalContentComponent = ({
  contentIds,
}: {
  contentIds?: AdditionalContentId[];
}) => {
  const renderedContent =
    contentIds && contentIds?.length < 0 ? (
      <> </>
    ) : (
      contentIds?.map((id) => {
        const { alt, link, type } = additionalContent[id] ;
        if (type === "image") {
          return <img src={link} alt={alt} className="image"/>;
        } else if (type === "link") {
          return <LinkPreview url={link} height={"200px"}/>;
        } else if (type === "youtube") {
          return <YoutubeEmbed embedId="rokGy0huYEA"/>;
        }
        return <> </>;
      })
      
    );
  return <> {renderedContent}</>;
};

const ResponseComponent = ({
  id,
  onClick,
  currentResponseId,
}: {
  id: ResponseId;
  onClick: () => void;
  currentResponseId?: ResponseId;
}): ReactElement => {
  const {response, additonalContent} = responses[id];
  const styles = currentResponseId === id ? "selected s bubble" : "s bubble";
  return (
    <>
      <button className={styles} onClick={onClick}>
        {response}
        {additonalContent && <div className="addtionalContentResponse">
        <AdditionalContentComponent contentIds={additonalContent}/>     
      </div>}
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
