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
      <div key={index} className="flex flex-col w-[325px]">
        <h2 className="text-2xl font-bold">{category}</h2>
        { filteredQuestions.map(question => {
          return (
            <div key={question.id} className="w-[325px] bg-slate-200 rounded-sm h-[50px] shadow-md my-2 flex items-center cursor-pointer" onClick={() => {goToQuestion(question)}}>
              <div className="ml-[10px]">{question.title}</div>
            </div>
          )
        }) }
      </div>
    )
  });

  return (
    <>
      <div className="flex justify-center container my-[50px]">
        <div className="grid mobile:grid-cols-none tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
          { categoriesElement }
        </div>
      </div>
    </>
  )
}

export default QuestionsDashboard;