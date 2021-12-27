import { Question, QuestionId, ResponseId } from "./types";


export const questions: Record<QuestionId, Question> = {
    [QuestionId.INTRO] : {
        question: 'Welcome! How are you doing today?',
        responseOptions: [ResponseId.INTRO_BAD, ResponseId.INTRO_GOOD]
    },
    [QuestionId.PRODUCT_SELECT] : {
        question: 'What product did u purchase',
        responseOptions: [ResponseId.PRODUCT_SELECT_0, ResponseId.PRODUCT_SELECT_1,  ResponseId.PRODUCT_SELECT_2]
    },
    [QuestionId.FINAL] : {
        question: 'Thanks for chatting with me! Time for some food.',
    },
    [QuestionId.LOADING] : {
        question: 'Hm...',
    }
}