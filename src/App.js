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


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/upload" element={<UploadImage></UploadImage>}></Route>
      <Route path="/" element={<Dashboard></Dashboard>}>
        <Route index element={<OverView />}></Route>
        <Route path="add-Student" element={<AddStudent></AddStudent>}></Route>
        <Route path="student-details" element={<StudentDetails></StudentDetails>}></Route>
        <Route path="currentfees" element={<CurrentFees></CurrentFees>}></Route>
        <Route path="pastfees" element={<PastFees></PastFees>}></Route>
        <Route path="addfees" element={<AddFees></AddFees>}></Route>
        <Route path="totalearn" element={<RunningRecord></RunningRecord>}></Route>
        <Route path="debitcredit" element={<DebitCredit></DebitCredit>}></Route>
        <Route path="pastrecord" element={<PastRecord></PastRecord>}></Route>

      </Route>
      <Route path="/details" element={<ViewDetails></ViewDetails>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes >
  );
}

export default App;
