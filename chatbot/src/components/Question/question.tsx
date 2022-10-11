import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { TYPING_ANIMATION_DURATION } from "../../constants";
import { useFormState } from "../formStates";
import { Loading } from "../Loading/loading";

export const Question = (
  { questions, additionalContent }:
    { questions: string[], additionalContent: ReactNode }
): ReactElement => {
  const [showLoading, setShowLoading] = useState(true);
  const [showQuestions, setShowQuestions] = useState(['']);
  const { answers } = useFormState();
  const [formAnswers, setFormAnswers] = useState<any>(answers);

  useEffect(() => {
    if (showQuestions.length - 1 === questions.length) {
      setShowLoading(false);
    } else {
      const x = setTimeout(() => {
        setShowQuestions([
          ...showQuestions,
          questions[showQuestions.length - 1],
        ]);
      }, questions[showQuestions.length - 1].split(' ').length * TYPING_ANIMATION_DURATION);

      return () => clearTimeout(x);
    }


  }, [showQuestions, questions]);

  const showAdditonalContent = additionalContent && (showQuestions.length - 1 === questions.length);

  const transformQuestion = (question: string) => {
    // sample question = 'What a nice name, [ID]' where ID is the ResponseId
    const res = question.replace(/(^.*\[|\].*$)/g, '');
    if (res) {
      const val = formAnswers?.[res]
      return question.replace(`[${res}]`,val );
    }
    return question
  }
  return (
    <>
      {showQuestions.map((item) => (
        item && <div
          key={item}
          className="bubble">
          {transformQuestion(item)}
        </div>
      ))}
      {showAdditonalContent &&
        <div className="bubble" key={additionalContent?.toString() || 'none'}> {additionalContent} </div>
      }
      {showLoading && <Loading />}
    </>
  );
};
