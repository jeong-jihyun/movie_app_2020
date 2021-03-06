import React from 'react';
import TodoItem from '../components/TodoItem';
class TodoList extends React.Component {
    render() {
        const list = this.props.tasks.map(todo => {
            return <TodoItem {...todo} key={todo.id} />;
        });
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TodoList;