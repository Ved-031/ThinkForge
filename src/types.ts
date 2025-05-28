export type Question = {
    id: string,
    text: string,
    options: Option[],
    correctOptionId: string,
}

export type Option = {
    id: string,
    text: string,
}

export type Quiz = {
    id: string,
    class_name: string,
    subject: string,
    topic: string,
    questions: Question[],
    num_questions: number,
    deadline: Date,
    difficulty: Difficulty,
    createdAt: Date,
    additional_info_context?: string,
}

export type Result = Record<string, Record<string, string>>;

export enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD'
}

