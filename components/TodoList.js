// components/TodoList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from '../redux/todosSlice';

function TodoList() {
  // Obtener la lista de tareas desde el estado global de Redux
  const todos = useSelector((state) => state.todos);
  // Obtener la función dispatch para realizar acciones en Redux
  const dispatch = useDispatch();

  // Estado local para el nuevo texto de la tarea y el ID de la tarea en edición
  const [newTodoText, setNewTodoText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  // Agregar una nueva tarea
  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      // Despachar la acción addTodo con el nuevo texto de la tarea
      dispatch(addTodo(newTodoText));
      // Limpiar el cuadro de texto después de agregar una tarea
      setNewTodoText('');
    }
  };

  // Iniciar la edición de una tarea
  const handleEditTodo = (id, text) => {
    // Establecer el ID de la tarea en edición y el texto actual de la tarea
    setEditingTodoId(id);
    setNewTodoText(text);
  };

  // Actualizar una tarea existente
  const handleUpdateTodo = () => {
    if (newTodoText.trim() !== '') {
      // Despachar la acción editTodo con el ID y el nuevo texto de la tarea
      dispatch(editTodo({ id: editingTodoId, text: newTodoText }));
      // Limpiar el estado de edición y el cuadro de texto después de actualizar una tarea
      setEditingTodoId(null);
      setNewTodoText('');
    }
  };

  // Eliminar una tarea
  const handleDeleteTodo = (id) => {
    // Despachar la acción deleteTodo con el ID de la tarea a eliminar
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <ul>
        {/* Mapear sobre la lista de tareas y renderizar cada tarea con opciones de edición y eliminación */}
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              // Si la tarea está en modo de edición, muestra un input y botón de actualización
              <>
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update</button>
              </>
            ) : (
              // Si no está en modo de edición, muestra el texto y botón de edición
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                  Edit
                </button>
              </>
            )}
            {/* Botón de eliminación para cada tarea */}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        {/* Cuadro de texto y botón para agregar una nueva tarea */}
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={editingTodoId ? handleUpdateTodo : handleAddTodo}>
          {/* El texto del botón cambia dependiendo de si estamos editando o agregando */}
          {editingTodoId ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
}

export default TodoList;
