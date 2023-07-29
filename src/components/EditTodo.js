import React, { useState } from 'react';

export const EditTodo = ({ todo }) => {
	const [editedDescription, setEditedDescription] = useState(
		todo.description || ''
	);

	const editTodo = async () => {
		try {
			const response = await fetch(
				`http://localhost:5000/todos/${todo.todo_id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						description: editedDescription,
					}),
				}
			);
			window.location = "/";

			if (response.ok) {
				console.log('Todo updated successfully!');
			} else {
				console.error('Failed to update todo.');
			}
		} catch (error) {
			console.error('Error occurred while updating todo:', error);
		}
	};

	const handleSaveChanges = () => {
		editTodo();
		// Optionally, you can also add code to update the todos list
		// after editing here, using a callback or some state management.
	};

	const handleModalClose = () => {
		// Reset the edited description when the modal is closed without saving
		setEditedDescription(todo.description || '');
	};

	return (
		<div>
			<button
				type='button'
				className='btn btn-outline-info'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal'>
				Edit Todo
			</button>

			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
				data-bs-backdrop='static'
				data-bs-keyboard='false'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5
								className='modal-title'
								id='exampleModalLabel'>
								Edit Todo
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
								onClick={handleModalClose}></button>
						</div>
						<div className='modal-body'>
							<input
								type='text'
								className='form-control'
								onChange={(e) => setEditedDescription(e.target.value)}
								value={editedDescription}
							/>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								onClick={handleModalClose}>
								Close
							</button>
							<button
								type='button'
                                className='btn btn-primary'
								data-bs-dismiss='modal'
								onClick={handleSaveChanges}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
