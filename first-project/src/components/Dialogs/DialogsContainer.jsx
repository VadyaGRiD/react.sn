import React from 'react';
import { sendMessageCtreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCtreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
                }
    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMEssage={onSendMessageClick}
                    dialogsPage={store.getState().dialogsPage} />
            }
        }
</StoreContext.Consumer>
}

export default DialogsContainer;