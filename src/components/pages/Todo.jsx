import React from "react";
import CopyToClipboard from "../common/CopyToClipboard";


function Todo({ todo, index, removeTodo }) {
	return (
		<div className="list-group list-group-numbered">
			<div className="row">
				<div className="col-10">
					<input className="list-group-item w-100" id={`todo-item-${index}`} defaultValue={todo}/>
				</div>
				<div className="col-auto">
					<button
						type="button"
						className="btn btn-outline-danger"
						onClick={() => removeTodo(index)}
					>
						<i className="bx bx-minus-circle"></i>
					</button>
				</div>
				<div className="col-auto">
					<CopyToClipboard id={`todo-item-${index}`} />
				</div>
			</div>
		</div>
	);
}

function TodoApp() {
	var todoListLocalStorage = JSON.parse(localStorage.getItem("todos"));
	var todoList = todoListLocalStorage === null ? [] : todoListLocalStorage;

	const resetTodos = (todo_array) => {
		localStorage.setItem("todos", "");
		localStorage.setItem("todos", JSON.stringify(todo_array));
	};

	const [todos, setTodos] = React.useState(todoList);
	const [value, setValue] = React.useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const addTodo = () => {
		const newTodos = [...todos, value];
		setTodos(newTodos);
		resetTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
		resetTodos(newTodos);
	};

	return (
		<>
			<div className="container mt-4">
				<div className="m-3 row">
					<label className="col-sm-2 col-form-label">Todo Item: </label>
					<div className="col-md-9">
						<input
							type="text"
							className="form-control"
							id="todo-text"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="col-md">
						<button
							type="button"
							className="btn btn-outline-success"
							id="todo-add-btn"
							onClick={addTodo}
						>
							<i className="bx bx-plus"></i>
						</button>
					</div>
				</div>
			</div>
			{todos[0] && (
				<table className="table table-bordered align-middle">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Todo</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo, index) => (
							<tr key={index}>
								<th key={index} scope="row">{index + 1}</th>
								<td>
									<Todo
										key={index}
										index={index}
										todo={todo}
										removeTodo={removeTodo}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
}

export default TodoApp;
