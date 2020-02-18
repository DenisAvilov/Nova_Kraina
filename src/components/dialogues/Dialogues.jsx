import React from 'react';
import d from './Dialogues.module.css'
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {           // Отрисовываю компоненту пользователя с Именем и Айдишником
    const path = "/dialogues/" + props.id;
    return (
        <div>   <NavLink to={path}>{props.name}</NavLink>    </div>
    )
}
const Message = (props) => {
    return (
        <p className={d.dialoguesMassengerItem}>
            {props.message}
        </p>
    );
};

const Dialogues = () => {

    const dialogData = [                // Масив с данными который передаю в стрелочную функцию MAP() для отрисовки в компоненте
        { id: 0, name: 'Илья' },
        { id: 1, name: 'Никта' },
        { id: 2, name: 'Юля' }
    ];

    const dialog = dialogData.map(ds => <Dialog id={ds.id} name={ds.name} />);  //Делаю мапинг для прохода по масиву DialogData, перебирая масив по количеству содержащих обектов. MAP() использую вместа цыкла, на выходе получаю отдельные компоненты 

    const messageData = [
        { id: 0, message: 'Какой-то текст 1' },
        { id: 1, message: 'Какой-то текст 2' },
        { id: 2, message: 'Какой-то текст 3' }
    ];

    const message = messageData.map(m => <Message id={m.id} message={m.message} />);

    return (
        <div className={d.dialoguesWrap}>
            <div className={d.dialoguesUserName}>
                {dialog}
            </div>

            <div className={d.dialoguesMassenger}>
                {message}
            </div>
        </div>
    );
};

export default Dialogues;

