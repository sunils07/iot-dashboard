import { combineReducers } from "redux";
import Gas from "./modules/gas/gas.reducer";
import Notification from "./modules/notifications/notification.reducer";

const rootReducer = combineReducers({
    Gas,
    Notification
});

export default rootReducer;