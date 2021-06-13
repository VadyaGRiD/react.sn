import React from 'react';
import DialogItem from './DIalogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Messege/Message';
import {sendMessageCtreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer"

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMEssage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div><textarea value= {newMessageBody}
                onChange= {onNewMessageChange}
                 placeholder="Enter your message">
                     </textarea></div>
                <div><button onClick ={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;