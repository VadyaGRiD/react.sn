import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Всем привет. Кто где?', likesCount: 3 },
                { id: 2, message: 'Скоро зима, собирайтесь в Каэр Морхен?', likesCount: 5 },
                { id: 3, message: 'Нужно все наши тропы маскировать!', likesCount: 1 },
                { id: 4, message: 'Еще василиск от куда то взялся', likesCount: 5 }],
            newPostText: 'Witcher'
        },


        dialogsPage: {
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
        },

        sidebarPage: {
            friends: [
                { id: 1, name: 'Геральт', avatar: "https://steamuserimages-a.akamaihd.net/ugc/924805934474316745/E44AC605B446C8420FF450DDDEB428BC89D16BC8/" },
                { id: 2, name: 'Цири', avatar: "https://steamuserimages-a.akamaihd.net/ugc/929300535102419902/B743DF45ED59EADF3ABD5AAADEA1EC20AC353BF9/" },
                { id: 3, name: 'Ламберт', avatar: "http://pm1.narvii.com/7086/f8fc1c445305237ad4b634b0ead1d0d7952ae5a4r1-793-1166v2_00.jpg" }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state)
    }
}


export default store;
window.store = store;