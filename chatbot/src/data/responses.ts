import { ResponseId, QuestionId, Response, AdditionalContentId } from "./types";

export const responses: Record<ResponseId, Response> = {
    [ResponseId.PHOTO]: {
        response: 'A Photo',
        followUpQuestionId: QuestionId.PRODUCT_PHOTO,
    },
    [ResponseId.VIDEO]: {
        response: 'A Video',
        followUpQuestionId: QuestionId.PRODUCT_VIDEO,
    },
    [ResponseId.VIDEO_PRODUCT_SQUARE]:{
        response: 'The square one',
        followUpQuestionId: QuestionId.VIDEO_PRODUCT_SQUARE,
    },
    [ResponseId.VIDEO_PRODUCT_ROUND]:{
        response: 'The round one',
        followUpQuestionId: QuestionId.VIDEO_PRODUCT_ROUND,
    },
    [ResponseId.PHOTO_PRODUCT_SQUARE]:{
        response: 'The square one',
        followUpQuestionId: QuestionId.PHOTO_PRODUCT_SQUARE,
    },
    [ResponseId.PHOTO_PRODUCT_ROUND]:{
        response: 'The round one',
        followUpQuestionId: QuestionId.PHOTO_PRODUCT_ROUND,
    },
    [ResponseId.THANKU]:{
        response: 'Thank you.',
        followUpQuestionId: QuestionId.END,
    }
}