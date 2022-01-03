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
    [AdditionalContentId.VIDEO_1]: {
        type: 'video',
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        alt: 'link one'
    }
}