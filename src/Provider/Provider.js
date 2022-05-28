import React from "react";
import {
  postData,
  getData,
  deleteData,
  singleData,
  editData,
} from "../QuestionRepository/QuestionRepo";
export const providerContext = React.createContext(" ");
function Provider(props) {
  const [stdData, setStdData] = React.useState([]);
  const [getOneData, setgetOneData] = React.useState({});
  let studentData = () => {
    getData()
      .then((res) => {
        setStdData([...res]);
      })
      .catch((err) => {
        console.log(err, "provider err");
      });
  };
  let singleStdData = (id) => {
    singleData(id)
      .then((res) => {
        setgetOneData(res);
      })
      .catch((err) => {
        console.log(err, "err--single std");
      });
  };
  const contextObject = {
    postData: postData,
    studentData: studentData,
    stdData: stdData,
    deleteData: deleteData,
    singleStdData: singleStdData,
    getOneData: getOneData,
    editData: editData,
  };
  return (
    <providerContext.Provider value={contextObject}>
      {props.children}
    </providerContext.Provider>
  );
}

export default Provider;
