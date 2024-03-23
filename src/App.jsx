import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Route,Routes } from 'react-router-dom';
import QuestionsDashboard from './components/QuestionsDashboard';
import NavBar from './components/NavBar';
import Question from './components/Question';

function App() {
  return (
    <>
      <NavBar />
      <Routes>        
        <Route path="/"  element={<QuestionsDashboard />} />
        <Route path="/question/:questionId"  element={<Question />} />
      </Routes>
    </>
  )
}

library.add(fab, fas, far);
export default App;
