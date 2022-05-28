import React, { useContext } from "react";
import { useFormik } from "formik";
import Provider, { providerContext } from "../Provider/Provider";
import { useNavigate } from "react-router-dom";

function Create() {
  let navigate = useNavigate();
  const contextValues = useContext(providerContext);
  const formik = useFormik({
    initialValues: {
      stdName: "",
      isActive: "",
      board: "",
      medium: "",
    },
    onSubmit: async (values, { resetForm }) => {
      contextValues.postData(values);
      navigate("/");
      resetForm();
    },

    validate: (values) => {
      const error = {};
      if (!values.stdName) {
        error.stdName = "required";
      }
      if (!values.isActive) {
        error.isActive = "required";
      }
      if (!values.board) {
        error.board = "required";
      }
      if (!values.medium) {
        error.medium = "required";
      }
      return error;
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="row mt-5">
          <div className="col-sm-6">
            <div className="stdName-container">
              <label className="form-label">Student Name</label>
              <input
                type={"text"}
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.stdName}
                name="stdName"
              />
              {formik.errors.stdName ? (
                <span style={{ color: "red" }}>{formik.errors.stdName}</span>
              ) : null}
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Is Active</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.isActive}
              name="isActive"
              class="form-select"
            >
              <option selected>Open this select menu</option>
              <option value="Active">Active</option>
              <option value="UnActive">Un Active</option>
            </select>
            {formik.errors.isActive ? (
              <span style={{ color: "red" }}>{formik.errors.isActive}</span>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label className="form-label">Board</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.board}
              name="board"
              class="form-select"
            >
              <option selected>Open this select menu</option>
              <option value="State Board">State Board</option>
              <option value="CBSE">CBSE</option>
            </select>
            {formik.errors.board ? (
              <span style={{ color: "red" }}>{formik.errors.board}</span>
            ) : null}
          </div>
          <div className="col-sm-6">
            <label className="form-label">Medium</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.medium}
              name="medium"
              class="form-select"
            >
              <option selected>Open this select menu</option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
            </select>
            {formik.errors.medium ? (
              <span style={{ color: "red" }}>{formik.errors.medium}</span>
            ) : null}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
const CreateProvider = () => {
  return (
    <Provider>
      <Create />
    </Provider>
  );
};

export default CreateProvider;
