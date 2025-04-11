import ReactDOM from 'react-dom';

function TaskModal({ task, onClose }) {
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: '#fff', padding: 20, borderRadius: 10 }}>
        <h2>Detalhes da Tarefa</h2>
        <p>{task.text}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default TaskModal;
