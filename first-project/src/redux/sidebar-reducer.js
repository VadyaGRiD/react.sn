let initialState = {
    friends: [
        { id: 1, name: 'Геральт', avatar: "https://steamuserimages-a.akamaihd.net/ugc/924805934474316745/E44AC605B446C8420FF450DDDEB428BC89D16BC8/" },
        { id: 2, name: 'Цири', avatar: "https://steamuserimages-a.akamaihd.net/ugc/929300535102419902/B743DF45ED59EADF3ABD5AAADEA1EC20AC353BF9/" },
        { id: 3, name: 'Ламберт', avatar: "http://pm1.narvii.com/7086/f8fc1c445305237ad4b634b0ead1d0d7952ae5a4r1-793-1166v2_00.jpg" }
    ]
}


const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer