import React, { useState } from 'react';

function InputTodo() {
	const [description, setDescription] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const body = { description };
			const response = await fetch('http://localhost:5000/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			setDescription('');
			window.location = "/";

			console.log(response);
		} catch (error) { }
	};
	return (
		<>
			<h1 className='text-center mt-5 font-family-custom text-info'>
				ToDo List
			</h1>
			<div className='container'>
				<div className='row justify-content-center mt-5'>
					<div className='col-md-6'>
						<form onSubmit={onSubmit}>
							<div className='input-group'>
								<input
									type='text'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className='form-control'
									placeholder='Enter your todo'
								/>
								<div className='input-group-append'>
									<button className='btn btn-info ms-2'>Add</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default InputTodo;
