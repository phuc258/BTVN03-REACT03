import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";
import AddTodoForm from "../components/AddTodoForm";
import TodoListItem from "../components/TodoListItem";

const TodoPage = () => {
    const { todos, searchItem, setSearchItem, handleToggle, addTodo, removeTodo } = useTodo();
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        // Nếu input rỗng thì reset search để hiện toàn bộ
        setSearchItem(inputValue.trim());
    }

    const handleAddFromForm = (name: string) => {
        // Thêm todo xong thì reset search để thấy item mới ngay
        addTodo(name);
        setInputValue("");
        setSearchItem("");
    };

    const handleClearSearch = () => {
        setInputValue("");
        setSearchItem("");
    };

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

                {/* NEW FEATURE (phần bạn): useState + props
                    - AddTodoForm có state input cục bộ (useState)
                    - Gửi dữ liệu lên parent qua callback prop (onAdd)
                    - Parent gọi context.addTodo để update danh sách */}
                <AddTodoForm onAdd={handleAddFromForm} />

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
                                onClick={handleClearSearch}
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
                        <TodoListItem
                            key={item.id}
                            todo={item}
                            onToggle={handleToggle}
                            onRemove={removeTodo}
                        />
                    ))}
                </ul>

                {todos.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#999', marginTop: '10px' }}>
                        Hiện tại chưa có việc gì.
                    </p>
                ) : filteredTodos.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#999', marginTop: '10px' }}>
                        Không tìm thấy việc nào!
                    </p>
                ) : null}
            </div>
        </div>
    )
}

export default TodoPage