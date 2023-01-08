export const generateDispatch = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}
