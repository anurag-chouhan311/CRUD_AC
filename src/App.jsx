import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactView from "./Component/ContactView";
import AddUser from "./Component/AddUser";
import ViewUser from "./Component/ViewUser";
import UpdateUser from "./Component/UpdateUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactView />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/viewuser" element={<ViewUser />} />
          <Route path="/updateuser" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
