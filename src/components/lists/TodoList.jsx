import React, { useState } from 'react';
import useList from '../hooks/useList';
import { motion } from "framer-motion";

/**
 * Componente que gestiona la lista de tareas
 * 
 * @returns {React.Component}
 */
const Tasklist = ({ showSettings, setShowSettings }) => {

    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    /**
     * Añade una nueva tarea a la lista de tareas
     * v2: La nueva tarea se añade como un objeto {task: nombre de la tarea, completed: si está completada o no}
     */
    const addNewTask = () => {
        if(newTask !== "") {
            setTaskList([...taskList, { task: newTask, completed: false }])
            setNewTask('');
        }
    }

    const toggleCompleteTask = (index) => {
        let newTaskList = taskList;
        newTaskList[index].completed = !newTaskList[index].completed;
        setTaskList([...newTaskList]);
    }

    /**
     * Editar el nombre de la nueva tarea
     * 
     * @param {*} e - Evento de onChange proveniente de React
     */
    const editNewItem = (e) => setNewTask(e.target.value);

    /**
     * Añade una nueva tarea cuando se presiona la tecla "Enter"
     * 
     * @param {*} e - Evento onKeyDown que proviene por defecto de React
     */
    const insertNewItemOnEnterKey = (e) => e.key === 'Enter' && addNewTask();

    return (
        <div>
            <header className='flex justify-between'>
                <h1 className='text-3xl text-sky-700 font-semibold dark:text-sky-300'>
                    Task List v2
                </h1>
                <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn' onClick={() => setShowSettings(!showSettings)}>{!showSettings ? "Show settings" : "Hide settings"}</motion.button>
            </header>
            <div className='my-4'>
                <input className='shadow py-1 px-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 mr-2 dark:bg-slate-700 '
                value={newTask}
                onKeyDown={ insertNewItemOnEnterKey }
                onChange={ editNewItem }
                placeholder='New Task' type='text' />
                <button className='btn'
                onClick={ addNewTask }>Create Task </button>
            </div>
            { taskList.length === 0 ? 
                (<p>Task List is empty</p>)
                :
                (
                    <ul>
                        { taskList.map((item, index) => 
                            (
                                <li key={index}>
                                    <input type='checkbox'
                                    //onClick={() => tasks.remove(index)}
                                    onClick={() => toggleCompleteTask(index)}
                                    checked={ item.completed }
                                    onChange={() => {}} />
                                    <span className={`text-gray-800 dark:text-gray-100 ml-2 text-sm italic ${item.completed && "line-through"}`}>
                                    { item.task }
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                )
            }
        </div>
    );
}

export default Tasklist;
