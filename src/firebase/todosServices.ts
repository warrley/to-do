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
  const updatedData: Partial<{ text: string; completed: boolean }> = {}; // Usamos 'text' para Firestore e 'completed' para o estado

  // Se 'checked' foi enviado, atualiza o campo 'completed'
  if (data.checked !== undefined) {
    updatedData.completed = data.checked;
  }

  // Se 'label' (que corresponde ao texto) foi enviado, atualiza o campo 'text'
  if (data.label !== undefined) {
    updatedData.text = data.label;
  }

  // Se o campo 'updatedData' estiver vazio (sem alterações), não tenta fazer a atualização
  if (Object.keys(updatedData).length === 0) {
    console.log("Nenhuma alteração para atualizar");
    return;
  }

  try {
    // Atualiza somente os campos que realmente precisam ser modificados
    await updateDoc(doc(db, "todos", todoId), updatedData);
    console.log(`To-do ${todoId} atualizado com sucesso`);
  } catch (error) {
    console.error("Erro ao atualizar o todo no Firestore:", error);
  }
};