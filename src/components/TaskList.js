import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask, setTaskToEdit }) => {
  return (
    <div className="space-y-4">
      {/* Boucle sur la liste des tâches et affiche chaque tâche avec ses actions */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Utilise l'ID de la tâche comme clé unique
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={setTaskToEdit} // Passe la tâche à modifier au formulaire
        />
      ))}
    </div>
  );
};

export default TaskList;
