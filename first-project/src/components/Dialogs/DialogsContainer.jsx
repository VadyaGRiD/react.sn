import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCtreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCtreator());
            }
        }
    }


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;