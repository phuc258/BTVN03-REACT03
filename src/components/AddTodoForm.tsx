import { useState } from "react";

type AddTodoFormProps = {
  /** Callback prop: Parent sẽ thêm todo vào danh sách */
  onAdd: (name: string) => void;
};

/**
 * Demo useState + props:
 * - useState lưu input cục bộ
 * - props (onAdd) để báo hành động lên parent
 */
export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [name, setName] = useState<string>("");

  const submit = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setName("");
  };

  return (
    <div className="add-container">
      <input
        className="add-input"
        type="text"
        placeholder="Thêm công việc mới..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button
        className="add-btn"
        type="button"
        onClick={submit}
        disabled={!name.trim()}
      >
        Thêm
      </button>
    </div>
  );
}
