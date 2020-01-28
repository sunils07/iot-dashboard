import React from "react";
import { func, array, object } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Switch from "../Switch/Switch.Index";
import Notification from "../Notification/Notification.Index";
import Burner from "./Burner";
import { onOfLighter } from "../../lib/redux/modules/gas/gas.actions";
import { sendNotifications } from "../../lib/redux/modules/notifications/notification.actions";

import "./gas-board.style.scss";

function GasBoard(props) {

    function onOfLighter(e) {
        const elms = document.querySelectorAll(".burner-controller");
        let shouldOffLighter = true;
        let elm = null;

        for (let i = 0; i < elms.length; i++) {
            elm = elms[i];

            if (parseInt(elm.value) > 0) {
                shouldOffLighter = false;
                break;
            }

        }

        if (shouldOffLighter) {
            props.onOfLighter(e.target.checked);
        } else {
            e.target.checked = !shouldOffLighter;
            props.sendNotifications({
                message: "Please switch of the all burners!",
                color: "red"
            });
        }
    }

    function onBurnerStart(e) {
        const { name, value } = e.target;
        const message = parseInt(value) > 0 ?
            `Burner ${name} started with speed of ${value}` :
            `Burner ${name} stoped`;

        props.sendNotifications({
            message: message,
            color: "green"
        });
    }

    function renderBurner() {
        return props.burners.map((burner) => {
            return (
                <div key={burner.id} className="burners-block">
                    <Burner
                        id={burner.id}
                        disabled={!props.lighter.on}
                        onBurnerStart={onBurnerStart}
                        min={burner.min}
                        max={burner.max}
                        defaultValue={burner.default}
                        step={burner.step}
                    />
                </div>
            );
        });
    }

    return (
        <div id="gash-board" className="gash-board card">
            <div className="card-header">
                <h1 className="card-heading">Gas Board</h1>
            </div>
            <div className="card-body">
                <div className="board-notifications flex row">
                    <div className="label-switch flex-1">
                        <label className="outer-label">Start Lighter</label>
                        <Switch
                            checked={props.lighter.on}
                            handleSwitch={onOfLighter} />
                    </div>
                    <div className="flex-1">
                        <Notification />
                    </div>
                </div>
                <div className="burners flex row">
                    {renderBurner()}
                </div>
            </div>
        </div>
    );
}

GasBoard.propTypes = {
    onOfLighter: func.isRequired,
    sendNotifications: func.isRequired,
    lighter: object.isRequired,
    burners: array.isRequired
};

const mapStateToProps = (state) => {
    return {
        lighter: state.Gas.lighter,
        burners: state.Gas.burners,
    }
}

const mapDispatchToProps = (props) => {
    return bindActionCreators({
        onOfLighter,
        sendNotifications
    }, props);
}

export default connect(mapStateToProps, mapDispatchToProps)(GasBoard);