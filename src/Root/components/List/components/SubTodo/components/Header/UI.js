/**
 * Created by Homkai on 2016/11/5.
 */
import React from 'react';

export default ({newTodo}) => {
	function onInput({dispatch}, e) {
        const content = e.target.value;
        dispatch({
            type: 'todo/inputNewTodo',
            payload: content
        });
    }
    function onAdd({dispatch}, e) {
        const content = e.target.value.trim();
        if (e.keyCode === 13 && content) {
            dispatch({
                type: 'todo/add',
                payload: content
            });
        }
    }
	return (
		<header className="header">
			<h1>todos</h1>
			<input
				value={newTodo}
				autoFocus
				className="new-todo"
				placeholder="What needs to be done?"
				onChange={onInput}
				onKeyUp={onAdd}
			/>
		</header>
	);
};
