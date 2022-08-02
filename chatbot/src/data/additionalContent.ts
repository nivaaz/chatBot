import {AdditionalContent, AdditionalContentId} from "./types"

export const additionalContent: Record<AdditionalContentId, AdditionalContent>= {
    [AdditionalContentId.DOG_1]: {
        type: 'image',
        link: "https://placedog.net/500",
        alt: 'dog image 1'
    },
    [AdditionalContentId.DOG_2]: {
        type: 'image',
        link: "https://placedog.net/500",
        alt: 'dog image 1'
    },
    [AdditionalContentId.LINK_1]: {
        type: 'link',
        link: "https://www.npmjs.com/package/@dhaiwat10/react-link-preview",
        alt: 'link one'
    },
    [AdditionalContentId.YOUTUBE_1]: {
        type: 'youtube',
        link: "rokGy0huYEA",
        alt: 'link one'
    }
}