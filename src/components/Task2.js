import React, { useState } from "react";

let data = [
  {
    moduleName: "Configuration",
    activityName: "Item Category",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
  {
    moduleName: "Configuration",
    activityName: "Item",
    isCreate: false,
    isView: false,
    isEdit: false,
    isDelete: false,
    isApprove: false,
  },
];

const Task2 = () => {
  const [selectedItem, setSelectedItem] = useState(false);

  const handleChange = (e, key) => {
    // console.log(key);
    // console.log(e.target.value);
    const selected = data.find((data) => data.activityName === e.target.value);
    selected[key] = !selected[key];
    setSelectedItem(selected[key]);

    console.log(selected);
    console.log(selectedItem);
  };
  console.log(data);
  return (
    <>
      <section className="container">
        <h1 className="text-center">Task 2</h1>
        <div className="mt-5 table-sm-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-success">
              <th>moduleName</th>
              <th>activityName</th>
              <th>isCreate</th>
              <th>isView</th>
              <th>isEdit</th>
              <th>isDelete</th>
              <th>isApprove</th>
            </thead>
            <tbody>
              {data.map((data) => (
                <>
                  <tr>
                    <td>{data.moduleName}</td>
                    <td>{data.activityName}</td>
                    <td>
                      <input
                        onChange={(e) => handleChange(e, "isCreate")}
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                      />{" "}
                      = {data.isCreate.toString()}
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleChange(e, "isView")}
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                      />{" "}
                      = {data.isView.toString()}
                    </td>
                    <td>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                        onChange={(e) => handleChange(e, "isEdit")}
                      />{" "}
                      = {data.isEdit.toString()}
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleChange(e, "isDelete")}
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                      />{" "}
                      = {data.isDelete.toString()}
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleChange(e, "isApprove")}
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                      />{" "}
                      = {data.isApprove.toString()}
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
