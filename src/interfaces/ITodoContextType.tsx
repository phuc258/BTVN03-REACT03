import type { Todo } from "./ITodo";

export interface TodoContextType {
    todos: Todo[];
    searchItem: string;
    setSearchItem: (value: string) => void;
    handleToggle: (id: string) => void;
    addTodo: (name: string) => void;
    removeTodo: (id: string) => void;
}