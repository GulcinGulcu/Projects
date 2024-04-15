import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home";
import { Layout } from "./Components/Layout/Layout";
import { Lessons } from "./Pages/Lessons";
import { Whiteboard } from "./Pages/Whiteboard";
import { Classroom } from "./Pages/Classroom";
import { AuthRequired } from "./Components/AuthRequired";
import { StudentList } from "./Pages/Students";
import { StudentDetail } from "./Pages/Students/StudentDetails/StudentDetail";
import { Login } from "./Pages/Login";
import './App.css';
import { SavedVideos } from "./Pages/Lessons/SavedVideos";
import { Videos } from "./Pages/Lessons/Videos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<AuthRequired />}>
            <Route path="myclassroom" element={<Classroom />} />
            <Route path="lessons" element={<Lessons />}>
              <Route index element={<Videos />} />
              <Route path="savedVideos" element={<SavedVideos />} />
            </Route>
            <Route path="whiteboard" element={<Whiteboard />} />
            <Route path="students" element={<StudentList />} />
            <Route path="students/:id/details" element={<StudentDetail />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
