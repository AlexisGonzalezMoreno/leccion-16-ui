import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
//import './../styles/index.scss';

const defaultConfig = {
    theme: "dark",
    lang: "es"
};

export default function Settings({ toggleDark }) {

    const [config, setConfig] = useLocalStorage("config", defaultConfig); 

    /**
     * Función para intercambiar light <-> dark
     * 
     * @param {*} event - Evento de click proveniente de React
     */
    const toggleMode = (event) => {
        event.preventDefault();
        setConfig((oldConfig) => ({
            ...oldConfig,
            theme: oldConfig.theme === "light" ? "dark" : "light",
        }),
        );
        toggleDark();
    };

  return (
    <div className='text-center'>
        <hr className='my-4' />
        <h1 className='text-3xl text-cyan-800 font-semibold mb-4 dark:text-cyan-400'>APP SETTINGS</h1>
        <p className='text-sm '>Current config: <span className='italic'>{ config.theme }</span></p>
        <button className='btn mt-4'
        onClick={toggleMode}>
            Toggle Darkmode
        </button>
    </div>
  )
}
