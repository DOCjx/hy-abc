import React from 'react';
import TodoItemUI from './TodoItem.ui';
import partial from 'lodash/partial';
import {FILTERS, LOCATION_FILTER_MAP} from '../../../conf';

export default ({dispatch, todoList, editingIndex, filter, description}) => {
    const activeNum = todoList.filter(item => !item.completed).length;
    function onRemove(index) {
        dispatch({
            type: 'todo/remove',
            payload: index
        });
    }
    function onEdit(index) {
        dispatch({
            type: 'todo/edit',
            payload: index
        });
    }
    function onSave(e) {
        const content = e.target.value;
        if (e.keyCode === 13 && content) {
            dispatch({
                type: 'todo/save',
                payload: content
            });
        }
    }
    function onToggle(index) {
        dispatch({
            type: 'todo/toggle',
            payload: index
        });
    }
    function onToggleAll() {
        dispatch({
            type: 'todo/toggleAll'
        });
    }
    function onClear() {
        dispatch({
            type: 'todo/clear'
        });
        handleFilters('all');
    }
    function handleFilters(type){
        dispatch({
            type: 'todo/filter',
            payload: {
                filter: type
            }
        });
    }
    return (
        <div>
            <section className='main'>
                <input
                    readOnly
                    className='toggle-all'
                    type='checkbox'
                    checked={todoList.length && !activeNum}
                    onClick={!todoList.length ? null : onToggleAll}
                />
                <ul className='todo-list'>
                    {
                        todoList.map((item, index) => {
                            const hidden = filter === FILTERS.ACTIVE
                                ? item.completed
                                : (filter === FILTERS.COMPLETED ? !item.completed : false);
                            return (
                                <TodoItemUI
                                    hidden={hidden}
                                    key={index}
                                    todo={item}
                                    editing={editingIndex === index}
                                    {...{
                                        onSave,
                                        onEdit: partial(onEdit, index),
                                        onRemove: partial(onRemove, index),
                                        onToggle: partial(onToggle, index)
                                    }}
                                />
                            );
                        })
                    }
                </ul>
            </section>
            <footer className='footer'>
                <span className='todo-count'><strong>{activeNum}</strong> item left</span>
                <ul className='filters'>
                    <li>
                        <a className={filter === FILTERS.ALL && 'selected'} onClick={() => handleFilters('all')}>All</a>
                    </li>
                    <li>
                        <a className={filter === FILTERS.ACTIVE && 'selected'} onClick={() => handleFilters('active')}>Active</a>
                    </li>
                    <li>
                        <a className={filter === FILTERS.COMPLETED && 'selected'} onClick={() => handleFilters('completed')}>Completed</a>
                    </li>
                </ul>
                <button className='clear-completed' onClick={onClear}>Clear completed</button>
            </footer>
        </div>
    );
};

