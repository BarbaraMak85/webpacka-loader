import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    text: "one",
                    id: 1
                },
                {
                    text: "two",
                    id: 2
                },
                {
                    text: "three",
                    id: 3
                },
                {
                    text: "four",
                    id: 4
                }
            ],
            title: 'The webpack-loader task',
        };
        this.removeTodo=this.removeTodo.bind(this)
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }
    removeTodo(event) {
        console.log(event.target.id)
        const remainder = this.state.data.filter(todo => todo.id !== Number(event.target.id));
        this.setState({ data: remainder });

    }
    render() {
        return (<div className = { style.TodoApp } >
            <Title title = { this.state.title } numberOfTasks = { this.state.data.length }/>
            <TodoList list = {this.state.data} removeTodo={this.removeTodo}/>
             </div>
        );
    }
}


export default App;