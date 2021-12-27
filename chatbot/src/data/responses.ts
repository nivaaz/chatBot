import { ResponseId, QuestionId, Response } from "./types";

export const responses: Record<ResponseId, Response> = {
    [ResponseId.INTRO_BAD]: {
        response: 'Not the bestest thanks',
        followUpQuestionId: QuestionId.PRODUCT_SELECT,
    },
    [ResponseId.INTRO_GOOD]: {
        response: 'Good thanks',
        followUpQuestionId: QuestionId.PRODUCT_SELECT,
    },
    [ResponseId.PRODUCT_SELECT_0]: {
        response: 'Nice, product 0 is a great purchase! (And my personal favourite!) here is how to use i.',
        followUpQuestionId: QuestionId.FINAL,
    },
    [ResponseId.PRODUCT_SELECT_1]: {
        response: 'Nice, product 1 is a great purchase! (And my personal favourite!) here is how to use i.',
        followUpQuestionId: QuestionId.FINAL,
    },
    [ResponseId.PRODUCT_SELECT_2]: {
        response: 'Nice, product 2 is a great purchase! (And my personal favourite!) here is how to use i. ',
        followUpQuestionId: QuestionId.FINAL,
    },
}