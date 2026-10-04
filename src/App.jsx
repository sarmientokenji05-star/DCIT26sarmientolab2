import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        done: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center mb-2">
          To-Do List
        </h1>

        <p className="text-center text-gray-600 mb-6">
          React + Tailwind CSS
        </p>

        <div className="bg-white shadow-lg rounded-xl p-6">

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 border p-3 rounded-lg"
            />

            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add Task
            </button>
          </div>

          <button
            onClick={clearAll}
            className="bg-red-600 text-white px-4 py-2 rounded-lg mb-4"
          >
            Clear All
          </button>

          <div className="space-y-3">
            {tasks.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-3 flex justify-between items-center"
              >
                <div>
                  <p
                    className={
                      item.done
                        ? "line-through text-gray-500"
                        : "text-black"
                    }
                  >
                    {item.text}
                  </p>

                  <span
                    className={
                      item.done
                        ? "text-green-600 font-bold"
                        : "text-orange-500 font-bold"
                    }
                  >
                    {item.done ? "Done" : "Not Done"}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleTask(item.id)}
                    className="bg-green-600 text-white px-3 py-2 rounded-lg"
                  >
                    {item.done ? "Not Done" : "Done"}
                  </button>

                  <button
                    onClick={() => deleteTask(item.id)}
                    className="bg-red-600 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 mt-6">
          <h2 className="text-2xl font-bold mb-3">
            User Guide
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Type a task in the input box.</li>
            <li>Click Add Task to add a new task.</li>
            <li>Click Done to mark a task as completed.</li>
            <li>Click Not Done to undo completion.</li>
            <li>Click Delete to remove a task.</li>
            <li>Click Clear All to remove all tasks.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;