import { ResponseId, QuestionId, Response, AdditionalContentId } from "./types";

export const responses: Record<ResponseId, Response> = {
    [ResponseId.INTRO_BAD]: {
        response: 'Not the bestest thanks',
        followUpQuestionId: QuestionId.PRODUCT_SELECT,
        additonalContent: [AdditionalContentId.LINK_1],
    },
    [ResponseId.INTRO_GOOD]: {
        response: 'Good thanks',
        followUpQuestionId: QuestionId.PRODUCT_SELECT,
        additonalContent: [AdditionalContentId.VIDEO_1],
    },
    [ResponseId.PRODUCT_SELECT_0]: {
        response: 'I purchased the round bathtub',
        followUpQuestionId: QuestionId.FINAL,
    },
    [ResponseId.PRODUCT_SELECT_1]: {
        response: 'I purchased the square bathtub',
        followUpQuestionId: QuestionId.FINAL,
    },
    [ResponseId.PRODUCT_SELECT_2]: {
        response: 'I purchased the triangle bathtub',
        followUpQuestionId: QuestionId.FINAL,
    },
}