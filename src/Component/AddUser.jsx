import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/Actions/action";
const AddUser = () => {
  //   let initialData = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(4);

  const handleAdd = () => {
    let obj = {
      id,
      firstName,
      lastName,
      email,
      phone,
    };

    setId((prev) => prev + 1);
    dispatch(addUser(obj));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    alert("New User Added...");
  };

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="addUser">
      <div>
        <h5>FirstName</h5>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <h5>LastName</h5>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <h5>Email</h5>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <h5>Phone</h5>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button onClick={handleAdd}>Add User</button>
        <button onClick={handleBack}>
          <IoMdArrowRoundBack />
        </button>
      </div>
    </div>
  );
};

export default AddUser;
