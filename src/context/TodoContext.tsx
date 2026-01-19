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

    // useState demo (core CRUD)
    const addTodo = (name: string) => {
        const trimmed = name.trim();
        if (!trimmed) return;
        setTodos(prev => [
            { id: crypto.randomUUID(), name: trimmed, status: false },
            ...prev,
        ]);
    }

    const removeTodo = (id: string) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    }

    const handleToggle = (id: string) => {
        setTodos(prev => prev.map(
            t => t.id === id ? { ...t, status: !t.status } : t
        ))
    }

    return (
        <TodoContext.Provider value={{ todos, searchItem, setSearchItem, handleToggle, addTodo, removeTodo }}>
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