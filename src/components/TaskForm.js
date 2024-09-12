import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
  // State pour gérer les valeurs du formulaire
  const [taskName, setTaskName] = useState(''); // Nom de la tâche
  const [taskDescription, setTaskDescription] = useState(''); // Description de la tâche
  
  // Remplit le formulaire avec les données de la tâche à éditer, sinon vide le formulaire
  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name); // Remplir les champs avec la tâche à modifier
      setTaskDescription(taskToEdit.description);
    } else {
      setTaskName(''); // Réinitialise les champs du formulaire si aucune tâche à éditer
      setTaskDescription('');
    }
  }, [taskToEdit]);

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (taskName && taskDescription) {
      if (taskToEdit) {
        // Si une tâche est en cours d'édition, on la modifie
        editTask({ ...taskToEdit, name: taskName, description: taskDescription });
      } else {
        // Sinon, on ajoute une nouvelle tâche
        addTask({ name: taskName, description: taskDescription, completed: false });
      }
      setTaskName(''); // Réinitialise les champs du formulaire après soumission
      setTaskDescription('');
    } else {
      alert('Veuillez remplir tous les champs'); // Alerte si les champs sont vides
    }
  };

  

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      {/* Champ pour le nom de la tâche */}
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border border-gray-300 rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {/* Champ pour la description de la tâche */}
      <textarea
        placeholder="Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="border border-gray-300 rounded-xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
      {/* Bouton pour soumettre le formulaire */}
      <button
        type="submit"
        className="bg-slate-950 hover:bg-black text-white p-2 px-4 w-auto rounded-xl shadow-md transition-colors duration-200"
      >
        {taskToEdit ? 'Confirmer' : 'Ajouter'} {/* Change le texte du bouton selon l'action */}
      </button>
    </form>
  );
};

export default TaskForm;
