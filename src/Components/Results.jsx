import { useDispatch, useSelector } from 'react-redux'
import { closeResult, fetchQuiz } from '../features/question/questionSlice'

const Results = () => {
    const correct = useSelector((state) => state.quiz.correct)
    const listQuiz = useSelector((state) => state.quiz.listQuiz.results)
    const time = useSelector((state) => state.quiz.time)
    let score = ((correct / listQuiz.length) * 100).toFixed(0);

    const dispatch = useDispatch()

    const handlePlayagain = () => {
        dispatch(fetchQuiz())
        dispatch(closeResult())
    }

    return (
        <div className="absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]">

            <div className=" text-center bg-white p-8 mx-auto rounded-lg max-w-[600px] w-11/12">
            <h4 className="text-3xl pb-3 text-center font-bold">
                Your score is{" "}
            <span className={score > 40 ? "text-green-600" : "text-red-600"}>
                {score}%
            </span>
            </h4>
            <p className="py-2">
                {correct}/{listQuiz.length} correct answers in {time} seconds.
            </p>
            {(score > 40) && <p className="py-2 font-medium">Congrats!!!</p>}
            <button
                className="bg-red-600 py-2 px-7 rounded-full text-white mt-2 hover:bg-red-500"
                onClick={handlePlayagain}
            >
                Play Again
            </button>
            </div>
        </div>
)
}
export default Results