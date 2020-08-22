const isAuthUser = user => !!user;
const nonAuthUser = () => PATHS.login;

const isNonAuthUser = user => !user;
const authUser = () => PATHS.roomSelect;

const PATHS = {
    login: '/',
    roomSelect: '/room-select',
    room: '/room/:roomId'
}

const ROUTES = {
    login: {
        path: PATHS.login,
        access: isNonAuthUser,
        fallback: authUser,
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
