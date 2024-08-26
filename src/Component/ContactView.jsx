import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { MdOutlinePersonRemove } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosPersonAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteUser, updateUser, viewUser } from "../Redux/Actions/action";
const ContactView = () => {
  let initialData = useSelector((state) => state.globalData);
  const dispatch = useDispatch();
  const [data1, setData1] = useState(initialData);
  const [data2, setData2] = useState(initialData);

  const [searchValue, setSearchValue] = useState("");
  //   console.log(initialData);
  const navigate = useNavigate();
  const handleViewUser = (item) => {
    navigate("/viewuser");
    dispatch(viewUser(item));
  };

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };
  const handleUpdate = (item) => {
    navigate("/updateuser");
    dispatch(updateUser(item));
  };

  useEffect(() => {
    if (searchValue) {
      const filteredData = initialData.filter((item, index) => {
        return item.firstName.toLowerCase().includes(searchValue.toLowerCase());
      });
      console.log(filteredData);
      setData1(filteredData);
    } else {
      setData1(data2);
    }
  }, [searchValue]);
  useEffect(() => {
    setData1(initialData);
    setData2(initialData);
  }, [initialData]);
  return (
    <>
      <div className="contact_view_container">
        <h1>Contact List</h1>
        <Link to={"/add"}>
          {" "}
          <div>
            <IoIosPersonAdd />
          </div>
        </Link>

        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {data1.map((item, index) => {
        return (
          <div key={index} className="user_data">
            <p>FirstName - {item.firstName}</p>
            <p>LastName - {item.lastName}</p>
            <p>Email - {item.email}</p>
            <p>Phone - {item.phone}</p>
            <div className="operations">
              <FaRegEye onClick={() => handleViewUser(item)} />
              <FaPenToSquare onClick={() => handleUpdate(item)} />
              <MdOutlinePersonRemove onClick={() => handleDelete(index)} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ContactView;
