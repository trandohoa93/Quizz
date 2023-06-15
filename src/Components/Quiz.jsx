import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openResult, setCorrect } from '../features/question/questionSlice';

const Quiz = () => {
    const dispatch = useDispatch()

    const [index, setIndex] = useState(0);

    const listQuiz = useSelector((state) => state.quiz.listQuiz.results)

    const {incorrect_answers, correct_answer, question} = listQuiz[index];

    const answers = [...incorrect_answers];
        if (incorrect_answers.length > 1) {
    let num = Math.floor(Math.random() * 4);
    if (num === 3) {
        answers.push(correct_answer);
    } else {
        answers.push(answers[num]);
        answers[num] = correct_answer;
    }
    } else {
    let num = Math.floor(Math.random() * 2);
    answers.push(answers[num]);
    answers[num] = correct_answer;
    }
    
    const nextQuestion = () => {
        if (index === listQuiz.length - 1) {
        dispatch(openResult())
        }
        setIndex((prevIndex) => {
        return prevIndex + 1;
    });
    };

    const checkAnswer = (value) => {
    if (value) {
        dispatch(setCorrect())
    }
    nextQuestion();
    };

    return (
    <main className="min-h-screen flex items-center justify-center">
        <div className="p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]">
        <p className="text-right pb-2 text-red-600">
        Number:
        <span>
            {index + 1}/{listQuiz.length}
        </span>
        </p>
        <div className="mt-3">
        <p
            className="text-center font-medium text-2xl lg:text-3xl leading-loose"
        >
            {question}
        </p>
        <div className="grid grid-cols-1 my-5 space-y-2 place-content-center">
            {answers.map((answer, index) => {
                return (
                <button
                    onClick={() => checkAnswer(answer === correct_answer)}
                    key={index}
                    className="bg-blue-500 w-4/5 rounded-full mx-auto text-white p-2 hover:bg-blue-400"
                >
                    {answer}
                </button>
                );
            })}
        </div>
        </div>
        <div className="flex justify-center pt-4">
        <button
            onClick={nextQuestion}
            className="py-2 px-7 text-medium flex rounded-full text-white bg-red-600 hover:bg-red-700"
        >
            Next question
        </button>
        </div>
    </div>
    </main>
)
}
export default Quiz