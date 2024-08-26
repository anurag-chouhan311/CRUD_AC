import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser1 } from "../Redux/Actions/action";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const data = useSelector((state) => state.updateData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(data);
  const [updateFname, setUpdateFname] = useState(data.firstName);
  const [updateLname, setUpdateLname] = useState(data.lastName);
  const [updateEmail, setUpdateEmail] = useState(data.email);
  const [updatePhone, setUpdatePhone] = useState(data.phone);

  const handleUpdatedData = () => {
    let obj = {
      id: data.id,
      firstName: updateFname,
      lastName: updateLname,
      email: updateEmail,
      phone: updatePhone,
    };
    dispatch(updateUser1(obj));
    alert("Data Updated...");
    navigate("/");
  };
  return (
    <div>
      <div className="user_data">
        <p>
          FirstName -{" "}
          <input
            style={{ padding: "4px 8px", margin: "", outline: "none" }}
            type="text"
            value={updateFname}
            onChange={(e) => setUpdateFname(e.target.value)}
          />
        </p>
        <p>
          LastName -{" "}
          <input
            style={{ padding: "4px 8px", margin: "", outline: "none" }}
            type="text"
            value={updateLname}
            onChange={(e) => setUpdateLname(e.target.value)}
          />
        </p>
        <p>
          Email -{" "}
          <input
            style={{ padding: "4px 8px", margin: "", outline: "none" }}
            type="text"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
        </p>
        <p>
          Phone -{" "}
          <input
            style={{ padding: "4px 8px", margin: "", outline: "none" }}
            type="text"
            value={updatePhone}
            onChange={(e) => setUpdatePhone(e.target.value)}
          />
        </p>
        <button
          onClick={handleUpdatedData}
          style={{ padding: "4px 8px", cursor: "pointer" }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
