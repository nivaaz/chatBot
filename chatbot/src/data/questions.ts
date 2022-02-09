import { Question, QuestionId, ResponseId, AdditionalContentId } from "./types";


export const questions: Record<QuestionId, Question> = {
    [QuestionId.INTRO] : {
        question: ['Welcome! How are you doing today?', "Do you want to see a video or a photo?"],
        additonalContent: [AdditionalContentId.DOG_1],
        responseOptions: [ResponseId.PHOTO, ResponseId.VIDEO]
    },
    [QuestionId.PRODUCT_PHOTO] : {
        question: ['Nice.', "I like photos too."],
        responseOptions: [ResponseId.VIDEO_PRODUCT_SQUARE, ResponseId.VIDEO_PRODUCT_ROUND]
    },
    [QuestionId.PHOTO_PRODUCT_SQUARE] : {
        question: ['Oh yes! The square one is so spacious', "Here is a PHOTO!"],
        additonalContent: [AdditionalContentId.YOUTUBE_1],
    },
    [QuestionId.PHOTO_PRODUCT_ROUND] : {
        question: ['Oh yes! The round one feels so lux', "Here is that PHOTO!"],
        additonalContent: [AdditionalContentId.YOUTUBE_1],
        responseOptions: [ResponseId.THANKU]
    },
    [QuestionId.PRODUCT_VIDEO] : {
        question: ['Nice.', "I like videos too."],
        responseOptions: [ResponseId.VIDEO_PRODUCT_SQUARE, ResponseId.VIDEO_PRODUCT_ROUND]
    },
    [QuestionId.VIDEO_PRODUCT_SQUARE] : {
        question: ['Oh yes! The square one is so spacious', "Here is a video!"],
        additonalContent: [AdditionalContentId.YOUTUBE_1],
    },
    [QuestionId.VIDEO_PRODUCT_ROUND] : {
        question: ['Oh yes! The round one feels so lux', "Here is that video!"],
        additonalContent: [AdditionalContentId.YOUTUBE_1],
        responseOptions: [ResponseId.THANKU]
    },
    [QuestionId.END] : {
        question: ['OKay well', "I like photos", "Bye!"],
        additonalContent: [AdditionalContentId.DOG_1],
    },

}
