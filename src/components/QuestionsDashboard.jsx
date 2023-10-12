import { useNavigate } from "react-router-dom";
import { questions } from '../assets/questions';

function QuestionsDashboard() {
  const navigate = useNavigate();

  const categories = [
    "Arrays", 
    "Binary Search Trees", 
    "Binary Trees",
    "Dynamic Programming",
    "Famous Algorithms",
    "Graphs",
    "Greedy Algorithms",
    "Heaps",
    "Linked Lists",
    "Recursion",
    "Searching",
    "Sorting",
    "Stacks",
    "Strings"
  ];

  const goToQuestion = (question) => {
    navigate(`/question/${question.functionName}`, { state: { question } });
  };

  const categoriesElement = categories.map((category, index) => {
    const filteredQuestions = questions.filter((question) => question.category === category);

    return (
      <div key={index} className="flex">
        <div className="flex flex-col w-[325px]">
          <h2 className="text-2xl font-bold">{category}</h2>
          { filteredQuestions.map(question => {
            return (
              <div key={question.id} className="w-[325px] bg-slate-200 rounded-sm h-[50px] shadow-md my-2 flex items-center">
                <div className="questions-wrapper">
                  <div className="status-container">
                    <div className="status-circle"></div>
                  </div>
                  <div className="question-title-container">
                    <a onClick={() => {goToQuestion(question)}} className="question-title cursor-pointer">{question.title}</a>
                  </div>
                  <span className="difficulty-bar"></span>
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    )
  });

  return (
    <>
      <div className="container mt-[50px]">
        <div className="flex flex-col">
          <div className="flex mt-[50px] flex-wrap gap-10">
            { categoriesElement }
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionsDashboard;