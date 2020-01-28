import { SEND_NOTIFICATION } from "./notification.types";

/**
 * @param  {Object} data
 * @param  {String} data.message
 * @param  {String} data.color
 * @returns {Object} data and action type
 */
export function sendNotifications(data) {
    return {
        type: SEND_NOTIFICATION,
        data
    }
}