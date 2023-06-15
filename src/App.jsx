import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz, setTime} from './features/question/questionSlice';
import Start from './Components/Start';
import Loading from './Components/Loading';
import Quiz from './Components/Quiz';
import Results from './Components/Results';

let interval;
function App() {
  const dispatch = useDispatch();

  const waiting = useSelector((state) => state.quiz.waiting)
  const loading = useSelector((state) => state.quiz.loading)
  const showResult = useSelector((state) => state.quiz.showResult)

  useEffect(() => {
    dispatch(fetchQuiz())
  }, [])

  useEffect(() => {
    if (showResult){
      clearInterval(interval)
    }
  }, [showResult])

  useEffect(() => {
    if (!waiting) {
      interval = setInterval(() => {
        dispatch(setTime())
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [waiting]);

  if (waiting) {
    return <Start />
  }

  if (loading) {
    return <Loading/>
  }
  if (showResult) {
    return <Results/>
  }

  return (
    <Quiz />
  );
}

export default App
