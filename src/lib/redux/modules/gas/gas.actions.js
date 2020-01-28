import {
    ON_OFF_LIGHTER
} from "./gas.types";

export function onOfLighter(on) {
    return {
        type: ON_OFF_LIGHTER,
        on
    }
}