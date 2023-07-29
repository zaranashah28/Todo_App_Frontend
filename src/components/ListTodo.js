import React, { useState, useEffect } from 'react';
import { EditTodo } from './EditTodo';

const ListTodo = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getTodos = async () => {
			try {
				const response = await fetch('http://localhost:5000/todos');
				const jsonData = await response.json();
				setTodos(jsonData);
			} catch (err) {
				console.log(err.message);
			}
		};

		getTodos();
	}, []);


	const deleteTodo = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/todos/${id}`, {
				method: 'DELETE',
			});
			setTodos(todos.filter((todo) => todo.todo_id !== id));
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<>
			<table className='table mt-5 text-center table-hover'>
				<thead className='table-info'>
					<tr>
						<th className='text-start'>Description</th>{' '}
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo) => (
						<tr key={todo.todo_id}>
							<td className='text-start'>{todo.description}</td>
							<td>
								<EditTodo todo={todo} />
							</td>
							<td>
								<button
									type='button'
									onClick={() => deleteTodo(todo.todo_id)}
									className='btn btn-outline-danger '>
									Delete Todo
								</button>
							</td>
							{/* Add Edit and Delete buttons here if needed */}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListTodo;
