import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, task }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 my-4">{}</h2>
      <NewTask onAdd={onAdd} />
      {task.length <= 0 ? (
        <p className="text-stone-800 mb-4">
          This project does not have any tasks!
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded bg-stone-100">
          {task.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.title}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-600"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
