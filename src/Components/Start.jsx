import { useDispatch } from 'react-redux'
import { start } from '../features/question/questionSlice'

const Start = () => {
  const dispatch = useDispatch()

  const handleStart = () => {
    dispatch(start())
  }
  
  return (
    <div className="justify-center flex items-center min-h-screen">
       <div
        className="bg-white p-5 md:p-8 max-w-[500px] min-h-[500px] space-y-8 shadow rounded-lg w-11/12 flex flex-col items-center justify-center"
      >

        <img  src="data:image/png;base64,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"
          alt="example"/>
        <button
          type="submit"
          className="bg-red-600 rounded-full w-1/3 p-2 text-white hover:bg-red-500"
          onClick={() => handleStart()}
        >
          Start Quiz
        </button>
        </div>
    </div>
  )
}
export default Start