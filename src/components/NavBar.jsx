import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="w-[100%] bg-blue-950">
      <div className="flex items-center h-[64px]">
        <h1 className="text-2xl font-medium text-white cursor-pointer pl-[20px]" onClick={() => {navigate("/")}}>Algo Questions</h1>
      </div>
    </nav>
  )
}

export default NavBar;