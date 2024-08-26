import React from "react";
import { useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
const ViewUser = () => {
  let initialData = useSelector((state) => state.viewData);
  return (
    <div>
      {initialData.map((item, index) => {
        return (
          <div key={index} className="user_data">
            <p>FirstName - {item.firstName}</p>
            <p>LastName - {item.lastName}</p>
            <p>Email - {item.email}</p>
            <p>Phone - {item.phone}</p>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
         
        }}
      >
        <Link to={'/'}><button style={{ padding: "6px 14px",cursor:"pointer"}}>
          <IoMdArrowRoundBack />
        </button></Link>
      </div>
    </div>
  );
};

export default ViewUser;
