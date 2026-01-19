import { useEffect, useRef, useState } from "react";
import { useTodo } from "../context/TodoContext";
import SearchBar, { type SearchBarHandle } from "../components/searchBar";

const TodoPage = () => {
  const { todos, searchItem, setSearchItem, handleToggle } = useTodo();
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef<SearchBarHandle>(null);

  useEffect(() => {
    const result = todos.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredTodos(result);
  }, [searchItem, todos]);

  // demo: nếu không có kết quả thì focus lại ô search
  useEffect(() => {
    if (filteredTodos.length === 0) searchRef.current?.focus();
  }, [filteredTodos.length]);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Các công việc cần làm</h1>

        <SearchBar
          ref={searchRef}
          placeholder="Tìm kiếm công việc..."
          value={inputValue}
          onValueChange={setInputValue}
          onSearch={(v) => setSearchItem(v)}
          onClear={() => setSearchItem("")}
          autoFocus
        />

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
          <p style={{ textAlign: "center", color: "#999", marginTop: "10px" }}>
            Không tìm thấy việc nào!
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoPage;