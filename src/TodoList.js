import "./TodoList.css";

function TodoList(props) {
    return (
    
        <div className="todoList-container">
            <ul className="todoList-container__ul">
                {props.children}
            </ul>
        </div>
    
    );

}

export { TodoList };