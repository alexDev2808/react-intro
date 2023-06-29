import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className='subtitle'>Has completado <span>{ completed }</span> de <span>{ total }</span> tareas.</h2>
    )
}

export { TodoCounter };