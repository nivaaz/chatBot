export enum QuestionId {
    "INTRO",
    "PRODUCT_SELECT",
    "FINAL",
}

export enum ResponseId {
    "INTRO_GOOD",
    "INTRO_BAD",
    "PRODUCT_SELECT_0",
    "PRODUCT_SELECT_1",
    "PRODUCT_SELECT_2",
}

export enum AdditionalContentId {
    "DOG_1",
    "DOG_2",
    "LINK_1",
    "YOUTUBE_1"
}

export type Question = {
    question: string[];
    responseOptions?: ResponseId[];
    additonalContent?: AdditionalContentId[];
}

export type Response = {
    response: string;
    followUpQuestionId: QuestionId;
    additonalContent?: AdditionalContentId[];
}

export type AdditionalContent = {
    type: 'image' | 'link' | 'youtube',
    link: string, // this would be the youtube embedded id for youtube
    alt: string,
}