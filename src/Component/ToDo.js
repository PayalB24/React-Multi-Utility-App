import React, { useState } from 'react';

export default function ToDo() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    if (task && dueDate) {
      setTaskList([...taskList, { task, dueDate }]);
      setTask("");
      setDueDate("");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Task Manager</h2>
      <div className="row">
        {/* Task Manager Form */}
        <div className="col-md-6">
          <form onSubmit={addTask} className="border p-4 rounded shadow">
            <div className="mb-3">
              <label htmlFor="task" className="form-label">
                Enter the Task:
              </label>
              <input
                type="text"
                id="task"
                className="form-control"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter the task"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="duedate" className="form-label">
                Enter Due Date:
              </label>
              <input
                type="date"
                id="duedate"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Task
            </button>
          </form>
        </div>

        {/* Task List */}
        <div className="col-md-6">
          <div className="border p-4 rounded shadow">
            <h3 className="text-center">Task List</h3>
            <ul className="list-group">
              {taskList.length > 0 ? (
                taskList.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <strong>Task:</strong> {item.task} | <strong>Due Date:</strong>{" "}
                      {item.dueDate}
                    </span>
                  </li>
                ))
              ) : (
                <li className="list-group-item text-center">
                  No tasks added yet!
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
