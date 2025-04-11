import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskModal from './TaskModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log('App montado. Simulando carregamento de tarefas...');
    setTimeout(() => {
      setTasks([{ id: 1, text: 'Aprender React', done: false }]);
    }, 1000);
  }, []);

  const addTask = () => {
    const newTask = { id: Date.now(), text: 'Nova tarefa', done: false };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Lista de Tarefas</h1>
      <button onClick={addTask}>Adicionar Tarefa</button>

      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onClick={() => setSelected(task)} />
        ))}
      </ul>

      {selected && (
        <TaskModal task={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;
