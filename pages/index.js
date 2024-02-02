// pages/index.js

// Importar React, que es necesario para la creación de componentes de React
import React from 'react';

// Importar el componente TodoList desde el archivo components/TodoList.js
import TodoList from '../components/TodoList';

// Función principal que representa la página principal de la aplicación
function Home() {
  // Devolver un elemento div que contiene un encabezado h1 y el componente TodoList
  return (
    <div>
      {/* Encabezado h1 que muestra el título de la aplicación */}
      <h1>CRUD Project</h1>
      {/* Renderizar el componente TodoList, que maneja la lógica de la lista de tareas */}
      <TodoList />
    </div>
  );
}

// Exportar la función Home como el componente principal de la página de inicio
export default Home;
