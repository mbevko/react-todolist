
import React from 'react';

class TodoItems extends React.Component{
    render() {
        return(
            <div>
            {this
                .props
                .items
                .map((item, index) => <div key={index} className="fullTask">
                    <button className="checkbox" onClick={this.handleDelete}></button>
                    <div className="tasks">{item}</div>
                </div>)}
                </div>
        )

    }
}

export default TodoItems