// redux/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Crear un slice de Redux para manejar tareas (todos)
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // Acción para agregar una nueva tarea al estado
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    // Acción para editar una tarea existente en el estado
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      // Buscar y actualizar la tarea por su ID
      const todoToEdit = state.find((todo) => todo.id === id);
      todoToEdit && (todoToEdit.text = text);
    },
    // Acción para eliminar una tarea del estado por su ID
    deleteTodo: (state, action) => {
      // Filtrar el estado, excluyendo la tarea con el ID especificado
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Exportar las acciones y el reducer generados por createSlice
export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
