import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import '../components/Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { title: 'Todo 1번째', id: 0 }
            ],
            uniqueId: 1
        };
        this.addTodo = this.addTodo.bind(this);
        this.resetTodo = this.resetTodo.bind(this);
    }
    addTodo(title) {
        const {
            tasks,
            uniqueId,
        } = this.state;

        tasks.push({
            title,
            id: uniqueId
        });
        this.setState({
            tasks,
            uniqueId: uniqueId + 1
        })
    }
    resetTodo(){
        this.setState({
            tasks:[]
        })
    }
    render() {
        return (
            <div className="todo">
                <h1>Todo App</h1>
                <button onClick={this.resetTodo}>리셋</button>
                <TodoInput addTodo={this.addTodo} />
                <TodoList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default Todo;