import { ReactElement, useState } from "react";
import { responses } from "../../data/responses";
import { ResponseId } from "../../data/types";
import React from "react";
import { AdditionalContentComponent } from "../AdditonalContent";
import { useFormState } from "../formStates";

export const ResponseComponent = ({
  id,
  onClick,
  currentResponseId,
}: {
  id: ResponseId;
  onClick: () => void;
  currentResponseId?: ResponseId;
}): ReactElement => {
  const formstate = useFormState();
  const response = responses[id]?.response ?? "";
  const additonalContent = responses[id].additonalContent;
  const styles = currentResponseId === id ? "selected s bubble" : "s bubble";

  const [inputAns, setInputAns] = useState<string | number>("");

  const submitOpenResponse = () => {
    console.log(id, inputAns);
    console.log(formstate.answers);
    formstate.setSingleAnswer(id, inputAns);
  };
  const handleNextClick = () => {
    submitOpenResponse();
    onClick();
  };
  switch (responses[id].responseType) {
    case "TEXT":
      return (
        <>
          <input
            type="text"
            id={responses[id].specialId}
            onChange={(e) => setInputAns(e.target.value)}
            placeholder={"enter text"}
          />
          <button className={styles} onClick={handleNextClick}>
            Next
            {additonalContent && (
                <AdditionalContentComponent contentIds={additonalContent} />
            )}
          </button>
        </>
      );

    case "NUMBER":
      return (
        <>
          <input 
            type="number" 
            id={responses[id].specialId}
            placeholder={"enter a number"}
            onChange={(e) => setInputAns(e.target.value)}
            />
          <button className={styles} onClick={handleNextClick}>
            Next
            {additonalContent && (
                <AdditionalContentComponent contentIds={additonalContent} />
            )}
          </button>
        </>
      );
      
    case "SINGLE_SELECT":
      return (
        <>
          <button className={styles} onClick={onClick}>
            {response}
            {additonalContent && (
                <AdditionalContentComponent contentIds={additonalContent} />
            )}
          </button>
        </>
      );
    default:
      return <> oops </>;
  }
};
