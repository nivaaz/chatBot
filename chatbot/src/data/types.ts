
export enum QuestionId {
    "INTRO_0",
    "INTRO_1",
    "INTRO_2",
    "INTRO",
    "PRODUCT_VIDEO",
    "PRODUCT_PHOTO",
    "VIDEO_PRODUCT_SQUARE",
    "VIDEO_PRODUCT_ROUND",
    "PHOTO_PRODUCT_ROUND", 
    "PHOTO_PRODUCT_SQUARE",
    "END"
}

export enum ResponseId {
    "NAME",
    'WEIGHT', 
    'HEIGHT',
    "PHOTO",
    "VIDEO",
    "VIDEO_PRODUCT_SQUARE",
    "VIDEO_PRODUCT_ROUND",
    "PHOTO_PRODUCT_SQUARE",
    "PHOTO_PRODUCT_ROUND",
    "THANKU"
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

export type Response = TextResponse | NumberResponse | SingleSelectResponse;

export type AdditionalContent = {
    type: 'image' | 'link' | 'youtube',
    link: string, // this would be the youtube embedded id for youtube
    alt: string,
}

type TextResponse = {
    responseType:  'TEXT';
    response : string;
    specialId ?: string;
    followUpQuestionId: QuestionId;
    additonalContent?: AdditionalContentId[];
}
type NumberResponse = {
    responseType:  'NUMBER';
    response : string;
    specialId ?: string;
    followUpQuestionId: QuestionId;
    additonalContent?: AdditionalContentId[];
}
type SingleSelectResponse = {
    responseType:  'SINGLE_SELECT';
    response : string;
    specialId ?: string;
    followUpQuestionId: QuestionId;
    additonalContent?: AdditionalContentId[];
}