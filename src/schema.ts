import * as z from 'zod';

export const createQuizSchema = z.object({
    class_name: z.coerce.string().min(1, 'Grade is required'),
    subject: z.string().min(1, 'Subject is required'),
    topic: z.string().min(1, 'Topic is required'),
    deadline: z.date({ message: 'Deadline must be a valid date' }),
    num_questions: z.coerce.number().min(1, 'Number of questions must be at least 1'),
    difficulty: z.enum(['EASY', 'MEDIUM', 'HARD'], {
        errorMap: (issue) => {
            if (issue.code === 'invalid_type') {
                return { message: 'Difficulty must be one of: easy, medium, hard' };
            }
            return { message: 'Invalid difficulty level' };
        }
    }),
    additional_info_context: z.string().max(500, 'Additional information must be at most 500 characters long').optional(),
});

