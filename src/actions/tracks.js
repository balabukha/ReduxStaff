var mackApiData = [
    {
        id:1,
        name: 'track 01'
    },
    {
        id:2,
        name: 'track 02'
    },
    {
        id:3,
        name: 'track 03'
    },
    {
        id:4,
        name: 'track 04'
    },
    {
        id:5,
        name: 'track 05'
    },
];

export const getTracks = () => {
    return dispatch =>{
        setTimeout(() => {
            console.log('I got Tracks');
            dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mackApiData})
        }, 2000)
    }
};