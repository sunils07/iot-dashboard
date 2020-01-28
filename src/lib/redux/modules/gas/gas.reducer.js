import {
    ON_OFF_LIGHTER,
    START_STOP_BURNER
} from "./gas.types";

const burner = {
    id: 1,
    img: "http://img.everychina.com/nimg/f1/14/c04d7d9f148411572ab4e6617e4d-200x200-1/stainless_steel_single_portable_gas_burners_stove_cooker_tr_160.jpg",
    min: 0,
    max: 50,
    step: 1,
    default: 0
};

const gasDefaultState = {
    lighter: {
        on: false
    },
    burners: [{
        ...burner
    }, {
        ...burner,
        id: 2,
    }, {
        ...burner,
        id: 3,
    }, {
        ...burner,
        id: 4,
    }]
};

export default function (state = gasDefaultState, action) {
    switch (action.type) {
        case ON_OFF_LIGHTER:
            return {
                type: ON_OFF_LIGHTER,
                ...state,
                lighter: {
                    ...state.lighter,
                    on: action.on
                }
            }
        case START_STOP_BURNER:
            return {
                type: START_STOP_BURNER,
                ...state,
                burners: action.data
            };
        default:
            return state;
    }
}