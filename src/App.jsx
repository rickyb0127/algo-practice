import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import QuestionsDashboard from './components/QuestionsDashboard';

function App() {
  return (
    <>
      <h1 className="text-center text-2xl mt-5 font-bold">Algo Questions</h1>
      <QuestionsDashboard />
    </>
  )
}

library.add(fab, fas, far);
export default App;
