const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Дарова' },
        { id: 2, message: 'Геральт, ты где пропал?' },
        { id: 3, message: 'Будешь чистить все мечи Каэр Морхена!' }
    ],
    dialogs: [
        { id: 1, name: 'Геральт', avatar: "https://steamuserimages-a.akamaihd.net/ugc/924805934474316745/E44AC605B446C8420FF450DDDEB428BC89D16BC8/" },
        { id: 2, name: 'Цири', avatar: "https://steamuserimages-a.akamaihd.net/ugc/929300535102419902/B743DF45ED59EADF3ABD5AAADEA1EC20AC353BF9/" },
        { id: 3, name: 'Ламберт', avatar: "http://pm1.narvii.com/7086/f8fc1c445305237ad4b634b0ead1d0d7952ae5a4r1-793-1166v2_00.jpg" },
        { id: 4, name: 'Эскель', avatar: "http://pm1.narvii.com/6879/a7ec8a1201d5af4630907fb9f9d472ca45e18de8r1-720-892v2_00.jpg" },
        { id: 5, name: 'Трисс', avatar: "https://i.playground.ru/i/pix/2071598/image.jpg" }
    ],

    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
        let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 4, message: body });
            return state;
            default:
                return state;

    }
}
export const sendMessageCtreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
    
export default dialogsReducer;
