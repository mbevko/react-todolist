import React from 'react';
import './Todolist.css';
import TodoItems from './TodoItems';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            newItem: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleDelete = this
            .handleDelete
            .bind(this);
    }

    handleChange(e) {

        this.setState({newItem: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.newItem === '') {
            return
        }
        this.setState({
            items: this
                .state
                .items
                .concat(this.state.newItem)
        })
        console.log(this.state.items);
        this.setState({newItem: ''});
    }

    handleDelete(index) {
        const items = this
            .state
            .items
            .filter((todo, todoIndex) => {
                return todoIndex !== index
            })
        this.setState({items})
    }

    render() {
        return (
            <div className="application">
                <div className="heading">
                    <h1>Reminders</h1>
                    <p>{this.state.items.length}</p>
                </div>
                
                <TodoItems items={this.state.items}/>

                <form onSubmit={this.handleSubmit}>
                    <button className="checkbox"></button>
                    <input
                        className="new_todo"
                        onChange={this.handleChange}
                        value={this.state.newItem}/>
                </form>

            </div>
        )
    }
};

export default TodoList