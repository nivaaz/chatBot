import { Question, QuestionId, ResponseId, AdditionalContentId } from "./types";


export const questions: Record<QuestionId, Question> = {
    [QuestionId.INTRO] : {
        question: ['Welcome! How are you doing today?', "It's a hot one today right?"],
        additonalContent: [AdditionalContentId.DOG_1],
        responseOptions: [ResponseId.INTRO_BAD, ResponseId.INTRO_GOOD]
    },
    [QuestionId.PRODUCT_SELECT] : {
        question: ['What product did u purchase', "We can send you a help manual if you like"],
        additonalContent: [AdditionalContentId.LINK_1],
        responseOptions: [ResponseId.PRODUCT_SELECT_0, ResponseId.PRODUCT_SELECT_1,  ResponseId.PRODUCT_SELECT_2]
    },
    [QuestionId.FINAL] : {
        question: ['Spicy', 'Thanks for chatting with me! Time for some food.'],
        additonalContent: [AdditionalContentId.YOUTUBE_1],
    },
}
