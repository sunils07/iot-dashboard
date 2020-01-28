import {
    SEND_NOTIFICATION
} from "./notification.types";

const notificationDefaultState = {
    message: "No, Notification :)",
    color: "#000"
};

export default function (state = notificationDefaultState, action) {
    switch (action.type) {
        case SEND_NOTIFICATION:
            return {
                type: SEND_NOTIFICATION,
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}