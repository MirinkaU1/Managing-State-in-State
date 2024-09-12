import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  // State pour gérer les tâches et la tâche en cours d'édition
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [taskToEdit, setTaskToEdit] = useState(null); // Tâche sélectionnée pour modification

  // Charger les tâches depuis le localStorage quand l'application se lance
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks); // Si des tâches sont présentes, on les charge dans le state
    }
  }, []);

  // Sauvegarder les tâches dans le localStorage à chaque modification de la liste
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Chaque changement est sauvegardé
  }, [tasks]); // S'exécute uniquement quand "tasks" change

  // Fonction pour ajouter une nouvelle tâche
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]); // Ajoute une nouvelle tâche avec un ID unique
  };

  // Fonction pour modifier une tâche existante
  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))); // Remplace la tâche modifiée dans la liste
    setTaskToEdit(null); // Réinitialise le formulaire après modification
  };

  // Fonction pour marquer une tâche comme terminée ou non terminée
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task // Inverse l'état de complétion de la tâche
      )
    );
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (taskId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      setTasks(tasks.filter((task) => task.id !== taskId)); // Supprime la tâche si confirmé
    }
  };

  return (
    <div className="font-mont mt-5 p-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="font-poppins text-4xl font-bold text-center mb-6 text-gray-800">note.</h1>
      {/* Composant du formulaire pour ajouter ou modifier une tâche */}
      <h3 className="font-semibold mb-3 text-lg text-gray-800">Ajouter une tâche</h3>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
      />
      {/* Composant qui affiche la liste des tâches */}
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        setTaskToEdit={setTaskToEdit}
      />
    </div>
  );
};

export default App;
