import { ResponseId, QuestionId, Response } from "./types";

export const responses: Record<ResponseId, Response> = {
    [ResponseId.NAME]: {
        response: 'enter ur name',
        responseType:  'TEXT',
        specialId : 'NAME',
        followUpQuestionId: QuestionId.INTRO_1,
    },
    [ResponseId.WEIGHT]: {
        response: 'what is your weight',
        responseType:  'NUMBER',
        specialId : 'WEIGHT',
        followUpQuestionId: QuestionId.INTRO_2,
    },
    [ResponseId.HEIGHT]: {
        response: 'what is your height',
        responseType:  'NUMBER',
        specialId : 'HEIGHT',
        followUpQuestionId: QuestionId.PRODUCT_PHOTO,
    },
    [ResponseId.PHOTO]: {
        response: 'A Photo',
        responseType:  'SINGLE_SELECT',
        followUpQuestionId: QuestionId.PRODUCT_PHOTO,
    },
    [ResponseId.VIDEO]: {
        response: 'A Video',
        responseType:  'SINGLE_SELECT',
        followUpQuestionId: QuestionId.PRODUCT_VIDEO,
    },
    [ResponseId.VIDEO_PRODUCT_SQUARE]:{
        response: 'The square one',
        responseType:  'SINGLE_SELECT',
        followUpQuestionId: QuestionId.VIDEO_PRODUCT_SQUARE,
    },
    [ResponseId.VIDEO_PRODUCT_ROUND]:{
        response: 'The round one',
        responseType:  'SINGLE_SELECT',
        followUpQuestionId: QuestionId.VIDEO_PRODUCT_ROUND,
    },
    [ResponseId.PHOTO_PRODUCT_SQUARE]:{
        response: 'The square one',
        responseType:  'SINGLE_SELECT',
        followUpQuestionId: QuestionId.PHOTO_PRODUCT_SQUARE,
    },
    [ResponseId.PHOTO_PRODUCT_ROUND]:{
        response: 'The round one',
        responseType:  'SINGLE_SELECT',
        followUpQuestionId: QuestionId.PHOTO_PRODUCT_ROUND,
    },
    [ResponseId.THANKU]:{
        response: 'Thank you.',
        responseType:  'SINGLE_SELECT',
        followUpQuestionId: QuestionId.END,
    }
}