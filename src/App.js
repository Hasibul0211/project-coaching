import AddStudent from "./components/AddStudent/AddStudent";
import Dashboard from "./components/Dashboard/Dashboard";
import OverView from "./components/OverView/OverView";
import { Routes, Route } from "react-router-dom";
import Notfound from "./components/Notfound/Notfound";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import UploadImage from "./components/UploadImage/UploadImage";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import CurrentFees from "./components/CurrentFees/CurrentFees"
import PastFees from "./components/PastFees/PastFees";
import AddFees from "./components/AddFees/AddFees";
import RunningRecord from "./components/RunningRecord/RunningRecord";
import DebitCredit from "./components/DebitCredit/DebitCredit";
import PastRecord from "./components/PastRecord/PastRecord";
import TeacherDetails from "./components/TeacherDetails/TeacherDetails";
import AddTeacher from "./components/AddTeacher/AddTeacher";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";
import AddAuthor from "./components/AddAuthor/AddAuthor";
import Books from "./components/Books/Books";
import LectureSheet from "./components/LectureSheet/LectureSheet";
import Login from "./components/LoginPage/Login";
import DashboarFirst from "./components/OverView/ExtraDesign/DashboardFirstSec/DashboarFirst";
import TeacherDeModal from "./components/MoreComponents/TeacherDeModal/TeacherDeModal";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>

      <Route path="/upload" element={<UploadImage></UploadImage>}></Route>
      <Route path="dashboard/" element={<Dashboard />}>

        <Route path="overview" index element={<OverView />}></Route>
        <Route path="overview" element={<OverView />}></Route>
        <Route path="add-Student" element={<AddStudent></AddStudent>}></Route>
        <Route path="student-details" element={<StudentDetails></StudentDetails>}></Route>
        <Route path="student-details/:id" element={<ViewDetails></ViewDetails>}></Route>
        <Route path="currentfees" element={<CurrentFees></CurrentFees>}></Route>
        <Route path="pastfees" element={<PastFees></PastFees>}></Route>
        <Route path="addfees" element={<AddFees></AddFees>}></Route>
        <Route path="totalearn" element={<RunningRecord></RunningRecord>}></Route>
        <Route path="debitcredit" element={<DebitCredit></DebitCredit>}></Route>
        <Route path="pastrecord" element={<PastRecord></PastRecord>}></Route>
        <Route path="teacherdetails" element={<TeacherDetails></TeacherDetails>}>
          <Route path='/dashboard/teacherdetails/:id' element={<TeacherDeModal></TeacherDeModal>} />
        </Route>



        <Route path="addteacher" element={<AddTeacher></AddTeacher>}></Route>
        <Route path="authordetail" element={<AuthorDetails></AuthorDetails>}></Route>
        <Route path="addauthor" element={<AddAuthor></AddAuthor>}></Route>
        <Route path="books" element={<Books></Books>}></Route>
        <Route path="sheet" element={<LectureSheet></LectureSheet>}></Route>

      </Route>
      {/* <Route path="/details" element={<ViewDetails></ViewDetails>}></Route> */}
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes >
  );
}

export default App;
