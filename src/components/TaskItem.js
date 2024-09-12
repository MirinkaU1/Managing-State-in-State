import React from 'react';
// Importation des icônes de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className={`flex justify-between items-center p-4 mb-2 rounded-xl shadow-md ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
      <div className="flex items-center space-x-3">
        {/* Checkbox pour marquer la tâche comme terminée */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)} // Appelle la fonction pour marquer comme terminée
          className="h-5 w-5 rounded focus:ring-0 cursor-pointer"
        />
        <div className="flex-1">
          {/* Affiche le nom de la tâche, barré si elle est complétée */}
          <h3 className={`font-semibold text-lg ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
            {task.name}
          </h3>
          {/* Affiche la description de la tâche */}
          <p className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-600'}`}>
            {task.description}
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        {/* Icône pour modifier la tâche */}
        <button onClick={() => editTask(task)} className="text-black hover:text-yellow-600">
          <FontAwesomeIcon icon={faEdit} size="lg" />
        </button>
        {/* Icône pour supprimer la tâche */}
        <button onClick={() => deleteTask(task.id)} className="text-black hover:text-red-600">
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
