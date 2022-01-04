import { LinkPreview } from "@dhaiwat10/react-link-preview";
import { ReactElement } from "react";
import { additionalContent } from "../../data/additionalContent";
import { AdditionalContentId } from "../../data/types";

export const AdditionalContentComponent = ({
    contentIds,
  }: {
    contentIds?: AdditionalContentId[];
  }): ReactElement => {
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
    return <> {renderedContent} </>;
  };
  