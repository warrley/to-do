import { getFirestore, collection, addDoc, getDocs, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export const addTodo = async (userId: string, text: string) => {
  const docRef = await addDoc(collection(db, "todos"), { userId, text, completed: false });
  return { id: docRef.id, label: text, checked: false }; // Mapeia os nomes corretamente
};

export const getTodos = async (userId: string) => {
  const q = query(collection(db, "todos"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    label: doc.data().text, // Mapeia "text" para "label"
    checked: doc.data().completed, // Mapeia "completed" para "checked"
  }));
};

export const deleteTodo = async (todoId: string) => {
  await deleteDoc(doc(db, "todos", todoId));
};

// ✅ Atualizar um "to-do" (edição ou marcar como concluído)
export const updateTodo = async (todoId: string, data: Partial<{ label: string; checked: boolean }>) => {
  await updateDoc(doc(db, "todos", todoId), {
    text: data.label, // Converte "label" para "text"
    completed: data.checked, // Converte "checked" para "completed"
  });
};
