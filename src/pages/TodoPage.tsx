import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext"

const TodoPage = () => {
    const { todos, searchItem, setSearchItem, handleToggle } = useTodo();
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        setSearchItem(inputValue);
    }

    useEffect(() => {
        const result = todos.filter((item) =>
            item.name.toLowerCase().includes(searchItem.toLowerCase())
        )
        setFilteredTodos(result);
    }, [searchItem, todos]);

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Các công việc cần làm</h1>

                <div className="search-container">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            className="input-search"
                            placeholder="Tìm kiếm công việc..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        {inputValue && (
                            <button
                                className="clear-btn"
                                onClick={() => setInputValue("")} 
                                type="button"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <button className="search-btn" type="button" onClick={handleSearch}>
                        Tìm
                    </button>
                </div>
                <ul className="todo-list">
                    {filteredTodos.map((item) => (
                        <li key={item.id} className="todo-item">
                            <input
                                type="checkbox"
                                checked={item.status}
                                onChange={() => handleToggle(item.id)}
                            />
                            <span className={item.status ? "done" : ""}>{item.name}</span>
                        </li>
                    ))}
                </ul>

                {filteredTodos.length === 0 && (
                    <p style={{ textAlign: 'center', color: '#999', marginTop: '10px' }}>Không tìm thấy việc nào!</p>
                )}
            </div>
        </div>
    )
}

export default TodoPage