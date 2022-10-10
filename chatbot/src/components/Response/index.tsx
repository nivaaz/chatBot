import { ReactElement, useState } from "react";
import { responses } from "../../data/responses";
import { ResponseId } from "../../data/types";
import React from "react";
import { AdditionalContentComponent } from "../AdditonalContent";
import { useFormState } from "../formStates";
import "./response.css"

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
    // console.log(id, inputAns);
    // console.log(formstate.answers);
    formstate.setSingleAnswer(id, inputAns);
  };
  const handleNextClick = (e: any) => {
    e.preventDefault()
    submitOpenResponse();
    onClick();
  };

  switch (responses[id].responseType) {
    case "TEXT":
      return (
        <form onSubmit={handleNextClick}>
          <label className="inputLabel">
            <p> Type a response </p>
            <input
              type="text"
              id={responses[id].specialId}
              onChange={(e) => {
                setInputAns(e.target.value);

              }}
              placeholder={"Enter text"}
            />
          </label>
          <button
            type="submit"
            className={styles} onClick={handleNextClick}>
            Next
            {additonalContent && (
              <AdditionalContentComponent contentIds={additonalContent} />
            )}
          </button>
        </form>
      );

    case "NUMBER":
      return (
        <form onSubmit={handleNextClick}>
          <label className="inputLabel">
            <p> Type a response </p>
            <input
              type="number"
              id={responses[id].specialId}
              placeholder={"Enter a number"}
              onChange={(e) => setInputAns(e.target.value)}
            />
          </label>
          <button type="submit" className={styles} onClick={handleNextClick}>
            Next
            {additonalContent && (
              <AdditionalContentComponent contentIds={additonalContent} />
            )}
          </button>
        </form>
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
