import React, { useEffect, useContext } from "react";
import Provider, { providerContext } from "../Provider/Provider";
import { Link } from "react-router-dom";
function StudentList() {
  const contextValues = useContext(providerContext);
  let stdDatas = contextValues.stdData;
  useEffect(() => {
    contextValues.studentData();
  }, []);
  let deleteStd = async (id) => {
    await contextValues.deleteData(id);
    contextValues.studentData();
  };
  return (
    <>
      <div class="bd-example">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student Name</th>
              <th scope="col">Is Active</th>
              <th scope="col">Board</th>
              <th scope="col">Medium</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {stdDatas.map((data) => {
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.stdName}</td>
                  <td>{data.isActive}</td>
                  <td>{data.board}</td>
                  <td>{data.medium}</td>
                  <td>
                    <Link
                      to={`/editStd/${data.id}`}
                      className="btn btn-warning btn-sm m-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteStd(data.id);
                      }}
                      className="btn btn-danger btn-sm m-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

let StdListProvider = () => {
  return (
    <Provider>
      <StudentList />
    </Provider>
  );
};
export default StdListProvider;
