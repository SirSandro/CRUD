// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
// Importar el reducer de tareas desde el archivo todosSlice.js
import todosReducer from './todosSlice';

// Configurar y crear la instancia (store) de Redux
const store = configureStore({
  // Configurar el reducer principal con el reducer de tareas
  reducer: {
    todos: todosReducer,
  },
});

// Exportar la instancia de la tienda como el store principal de la aplicación
export default store;
