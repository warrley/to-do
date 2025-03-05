import { createContext, ReactNode, useEffect, useState } from "react";
import { TodoItem } from "../types/Todos";
import { useAuth } from "../firebase/AuthContext";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../firebase/todosServices"; // Importa update

type TodoType = {
  todos: TodoItem[];
  handleAdd: (text: string) => void;
  handleDelete: (id: string) => void;
  handleChecked: (id: string, checked: boolean) => void;
  handleEdit: (id: string, text: string, setText: (t: string) => void) => void;
  showModal: boolean;
  setShowModal: (f: boolean) => void;
};

export const TodosContext = createContext({} as TodoType);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth(); // Pegar usuário logado
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [showModal, setShowModal] = useState(false);

  // 🔄 Carregar os "to-dos" do usuário logado ao abrir a página
  useEffect(() => {
    if (user) {
      getTodos(user.uid).then(setTodos);
    } else {
      setTodos([]); // Limpar ao deslogar
    }
  }, [user]);

  // ✅ Adicionar um novo "to-do"
  const handleAdd = async (textTodo: string) => {
    if (!user) return;
    
    console.log("Adicionando tarefa:", textTodo);
    
    const newTodo = await addTodo(user.uid, textTodo);
    setTodos([...todos, newTodo]); // Atualiza lista com o novo "to-do"
  };

  // ❌ Excluir um "to-do"
  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id)); // Remove localmente
  };

  // ✅ Marcar ou desmarcar um "to-do" como concluído (Firestore)
  const handleChecked = async (id: string, checked: boolean) => {
  console.log("Atualizando Firestore:", id, { checked }); // Adicionando o log para depuração
  try {
    // Envia apenas o campo 'checked' para o Firestore
    await updateTodo(id, { checked });
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, checked } : todo
    ));
  } catch (error) {
    console.error("Erro ao atualizar o todo:", error);
  }
};

  // ✏ Editar um "to-do" no Firestore
  const handleEdit = async (id: string, text: string, setText: (t: string) => void) => {
    if (!text.trim()) return;
    
    await updateTodo(id, { label: text }); // Atualiza no Firestore
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, label: text } : todo
    ));
    
    setText('');
    setShowModal(false);
  };

  return (
    <TodosContext.Provider value={{ todos, handleAdd, handleDelete, handleChecked, handleEdit, showModal, setShowModal }}>
      {children}
    </TodosContext.Provider>
  );
};
