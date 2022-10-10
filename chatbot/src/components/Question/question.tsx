import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { TYPING_ANIMATION_DURATION } from "../../constants";
import { Loading } from "../Loading/loading";

export const Question = (
  { questions, additionalContent }:
    { questions: string[], additionalContent: ReactNode }
): ReactElement => {
  const [showLoading, setShowLoading] = useState(true);
  const [showQuestions, setShowQuestions] = useState(['']);

  useEffect(() => {
    if (showQuestions.length - 1 === questions.length) {
      setShowLoading(false);
    } else {
      const x = setTimeout(() => {
        setShowQuestions([
          ...showQuestions,
          questions[showQuestions.length - 1],
        ]);
    }, questions[showQuestions.length - 1].split(' ').length*TYPING_ANIMATION_DURATION);

      return () => clearTimeout(x);
    }
  }, [showQuestions, questions]);

  const showAdditonalContent = additionalContent && (showQuestions.length - 1 === questions.length);
  return (
    <>
      {showQuestions.map((item) => (
        item && <div
          key={item}
          className="bubble">
          {item}
        </div>
      ))}
      {showAdditonalContent &&
        <div className="bubble" key={additionalContent?.toString() || 'none'}> {additionalContent} </div>
      }
      {showLoading && <Loading />}
    </>
  );
};
