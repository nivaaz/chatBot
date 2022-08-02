import { ReactElement } from "react";
import { responses } from "../../data/responses";
import { ResponseId } from "../../data/types";
import { AdditionalContentComponent } from "../AdditonalContent";
import React from "react";


export const ResponseComponent = ({
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
  