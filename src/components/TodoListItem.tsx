import type { Todo } from "../interfaces/ITodo";

type TodoListItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

/**
 * Demo props:
 * - Nhận data (todo) từ parent
 * - Nhận callback props để gửi hành động lên parent
 */
export default function TodoListItem({
  todo,
  onToggle,
  onRemove,
}: TodoListItemProps) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.status ? "done" : ""}>{todo.name}</span>

      <button
        className="delete-btn"
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label="Delete todo"
      >
        Xóa
      </button>
    </li>
  );
}
