import { createContext, useContext, useState, type ReactNode } from "react";
import type { TodoContextType } from "../interfaces/ITodoContextType";
import type { Todo } from "../interfaces/ITodo";

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

// TodoProvider
export function TodoProvider({ children }: { children: ReactNode }) {
    const initialData: Todo[] = [
        { "name": "Xem phim", "status": false, "id": "1" },
        { "name": "Ngủ sớm", "status": false, "id": "2" },
        { "name": "Học tiếng Anh", "status": false, "id": "3" },
        { "name": "Check mail công việc", "status": false, "id": "4" }
    ];

    const [todos, setTodos] = useState<Todo[]>(initialData);
    const [searchItem, setSearchItem] = useState("");

    const handleToggle = (id: string) => {
        setTodos(prev => prev.map(
            t => t.id === id ? { ...t, status: !t.status } : t
        ))
    }

    return (
        <TodoContext.Provider value={{ todos, searchItem, setSearchItem, handleToggle }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context)
        throw new Error("useTodo phải nằm trong TodoProvider");
    return context;
}