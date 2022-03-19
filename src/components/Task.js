function Task({ task, onTglStatus }) {
  console.log(onTglStatus);
  return (
    <div className="col-12 text-left" key={task.id}>
      <div className="row">
        <div className="col-12">
          <h4>{task.desc}</h4>
          <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            />
            {task.date}
          </div>
        </div>
        <div className="col-2 is-center">
          <button
            className="button icon-only clear"
            onClick={() => {
              onTglStatus(task);
            }}
          >
            {task.complete && "✅"}
            {!task.complete && "⬜"}
          </button>
        </div>
        <div className="col-12">
          <p>{task.complete}</p>
        </div>
      </div>
    </div>
  );
}

export default Task;
