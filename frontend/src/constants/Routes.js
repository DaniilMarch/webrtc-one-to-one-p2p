const isAuthUser = user => !!user;
const nonAuthUser = () => PATHS.login;

const PATHS = {
    login: '/',
    roomSelect: '/room-select',
    room: '/room/:room-id'
}

const ROUTES = {
    login: {
        path: PATHS.login
    },
    roomSelect: {
        path: PATHS.roomSelect,
        access: isAuthUser,
        fallback: nonAuthUser,
    },
    room: {
        path: PATHS.room,
        access: isAuthUser,
        fallback: nonAuthUser,
    }
}


export default ROUTES;
