import React from 'react';

const TaskItem = React.memo(({ task, onClick }) => {
  console.log('Renderizando:', task.text);

  return (
    <li onClick={onClick} style={{ cursor: 'pointer' }}>
      {task.text}
    </li>
  );
});

export default TaskItem;
