import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, deleteUserData } from "../redux/actions/userAction";

const Task1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addUserData(data));
  };

  const deleteData = (data) => {
    dispatch(deleteUserData(data));
  };

  const state = useSelector((data) => data.userData);
  console.log(state);
  return (
    <section className="container">
      <h1 className="mt-3 mb-5 text-center">Task 1</h1>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex justify-content-center align-items-center flex-row"
          >
            <div class="mb-3 me-3 ms-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3 me-3 ms-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Add
            </button>
          </form>
        </div>
        <div className="w-100">
          <table class="table table-striped table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {state.length > 0 ? (
                state.map((userData) => (
                  <>
                    <tr>
                      <td>{userData.name}</td>
                      <td>{userData.email}</td>
                      <td>
                        <button
                          onClick={() => deleteData(userData)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))
              ) : (
                <h1 className="p-4 text-center">No Data!!</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Task1;
