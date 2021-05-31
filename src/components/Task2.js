import React from "react";

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
  const handleChange = (e, key) => {
    // console.log(key);
    // console.log(e.target.value);
    const selected = data.find((data) => data.activityName === e.target.value);
    selected[key] = !selected[key];
    console.log(selected);
  };
  return (
    <>
      <section className="mt-5 container">
        <h1 className="text-center">Task 2</h1>
        <div className="w-75 mt-5">
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
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleChange(e, "isView")}
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                      />{" "}
                    </td>
                    <td>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                        onChange={(e) => handleChange(e, "isEdit")}
                      />{" "}
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleChange(e, "isDelete")}
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                      />{" "}
                    </td>
                    <td>
                      <input
                        onChange={(e) => handleChange(e, "isApprove")}
                        class="form-check-input"
                        type="checkbox"
                        value={data.activityName}
                      />{" "}
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
