import React, { useState } from "react";
import fakeData from "../fakeData/fakeData.json";

const Task2 = () => {
  const [allData, setAllData] = useState(fakeData);

  const handleChange = (name, e) => {
    let newData = [];
    allData.map((data) => {
      if (data.activityName === name) {
        const newItem = { ...data };
        newItem[e.target.name] = e.target.checked;
        newData.push(newItem);
      } else {
        newData.push(data);
      }
    });
    setAllData(newData);
  };
  return (
    <>
      <section className="container">
        <h1 className="text-center">Task 2</h1>
        <div className="mt-5">
          <table className="table table-striped table-bordered table-success">
            <thead className="table-success">
              <th className="p-2" colSpan="4">
                moduleName
              </th>
              <th className="p-2" colSpan="4">
                activityName
              </th>
              <th className="p-2">Create</th>
              <th className="p-2">View</th>
              <th className="p-2">Edit</th>
              <th className="p-2">Delete</th>
              <th className="p-2">Approve</th>
            </thead>
            <tbody>
              {allData.map((data) => (
                <>
                  <tr>
                    <td colSpan="4">{data.moduleName}</td>
                    <td colSpan="4">{data.activityName}</td>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="isCreate"
                        checked={data.isCreate}
                        onChange={(e) => handleChange(data.activityName, e)}
                      />{" "}
                      ({data.isCreate.toString()})
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="isView"
                        checked={data.isView}
                        onChange={(e) => handleChange(data.activityName, e)}
                      />{" "}
                      ({data.isView.toString()})
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="isEdit"
                        checked={data.isEdit}
                        onChange={(e) => handleChange(data.activityName, e)}
                      />{" "}
                      ({data.isEdit.toString()})
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="isDelete"
                        checked={data.isDelete}
                        onChange={(e) => handleChange(data.activityName, e)}
                      />{" "}
                      ({data.isDelete.toString()})
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="isApprove"
                        checked={data.isApprove}
                        onChange={(e) => handleChange(data.activityName, e)}
                      />{" "}
                      ({data.isApprove.toString()})
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Task2;
