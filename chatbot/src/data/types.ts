export enum QuestionId {
    "INTRO",
    "PRODUCT_SELECT",
    "FINAL",
    'LOADING',
}

export enum ResponseId {
    "INTRO_GOOD",
    "INTRO_BAD",
    "PRODUCT_SELECT_0",
    "PRODUCT_SELECT_1",
    "PRODUCT_SELECT_2",
}

export type Question =  {
    question: string;
    responseOptions?: ResponseId[];
}

export type Response =  {
    response: string;
    followUpQuestionId: QuestionId;
}