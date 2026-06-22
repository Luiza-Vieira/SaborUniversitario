import './Switch.css'
import classNames from 'classnames';
import { useState } from 'react';

//Para criar um switch, estou usando uma biblioteca chamada classnames 
//Para instalar o classNames, usamos "npm install classnames" no terminal 

function Switch() {
    const [ativo, setAtivo] = useState(true);

    return (
        <>
            <div onClick={() => setAtivo(!ativo)} className={classNames('flex w-12 h-6 bg-gray-600 rounded-full transition-all duration-500', { 'bg-green-600': ativo, })}>
                <span className={classNames('h-6 w-6 bg-white rounded-full transition-all duration-500 shadow-lg', { 'ml-6': ativo, })} />
            </div>
        </>
    );

}

export default Switch; 