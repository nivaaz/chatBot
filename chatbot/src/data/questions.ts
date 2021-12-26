import { Question, QuestionId, ResponseId } from "./types";


export const questions: Record<QuestionId, Question> = {
    [QuestionId.INTRO] : {
        question: 'Welcome! How are you doing today?',
        responseOptions: [ResponseId.INTRO_BAD, ResponseId.INTRO_GOOD]
    },
    [QuestionId.PRODUCT_SELECT] : {
        question: 'Welcome! How are you doing today?',
        responseOptions: [ResponseId.INTRO_BAD, ResponseId.INTRO_GOOD]
    }
}