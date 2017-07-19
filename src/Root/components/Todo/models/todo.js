import { show } from '../../../../services/Todo';
import {FILTERS} from '../conf';

export default {
    namespace: 'todo',
    state: {
        newTodo: '',
        todoList: [],
        editingIndex: null,
        filter: FILTERS.ALL,
        loginLoading: false,
    },
    reducers: {
        restore(state, {payload: storedState}) {
            return storedState;
        },
        inputNewTodo(state, {payload: content}) {
            return {
                ...state,
                newTodo: content
            };
        },
        add(state) {
            const todoList = [
                ...state.todoList,
                {
                    content: state.newTodo,
                    completed: false
                }
            ];
            return {
                ...state,
                newTodo: '',
                todoList
            };
        },
        remove(state, {payload: removeIndex}) {
            const todoList = state.todoList.filter((item, index) => index !== removeIndex);
            return {
                ...state,
                todoList
            };
        },
        edit(state, {payload: index}) {
            return {
                ...state,
                editingIndex: index
            };
        },
        save(state, {payload: content}) {
            const todoList = state.todoList.map(
                (item, index) => (index !== state.editingIndex ? item : {...item, content})
            );
            return {
                ...state,
                todoList,
                editingIndex: null
            };
        },
        clear(state) {
            const todoList = state.todoList.filter(item => !item.completed);
            return {
                ...state,
                todoList
            };
        },
        toggle(state, {payload: todoIndex}) {
            const todoList = state.todoList.map(
                (item, index) => (todoIndex !== index ? item : {...item, completed: !item.completed})
            );
            return {
                ...state,
                todoList
            };
        },
        toggleAll(state) {
            const isAllCompleted = !state.todoList.filter(item => !item.completed).length;
            const todoList = state.todoList.map(item => ({...item, completed: !isAllCompleted}));
            return {
                ...state,
                todoList,
            };
        },
        filter(state, {payload: filter}) {
            return {
                ...state,
                ...filter
            };
        },
        asyncData(state, {payload: datas}) {
            //每个页面初始化时上层回调调用
            const todoList = [...state.todoList];
            datas.map((data) => {
                data = data.nickName;
                !todoList.filter(todo => todo.content === data).length && todoList.push({
                    content: data,
                    completed: false
                });
            });
            return {
                ...state,
                todoList
            };
        }
    }
};
