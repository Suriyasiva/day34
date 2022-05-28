import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Create from "./Components/Create";
import StudentList from "./Components/StudentList";
import Editdata from "./Components/Editdata";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2 navigationbar">
              <NavigationBar />
            </div>
            <div className="col-sm-10">
              <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/create" element={<Create />} />
                <Route path="/editStd/:id" element={<Editdata />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
{
  /* */
}
