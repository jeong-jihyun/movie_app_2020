import React from 'react';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        /// 이벤트 등록
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }
    handleClick(e) {
        e.preventDefault();
        //this.props.addTodo('');
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
    }
    render() {
        return (
            <div>
                <input placeholder="새로운 TODO를 입력해주세요" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={this.handleClick}>등록</button>
            </div>
        );
    };
}

export default TodoInput;