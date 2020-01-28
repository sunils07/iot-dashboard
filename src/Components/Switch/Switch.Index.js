import React from "react";
import { func } from "prop-types";

import "./switch.style.scss";

export default function Switch({ handleSwitch }) {
    return (
        <label id="switch" className="switch switch-flat">
            <input
                onChange={handleSwitch}
                className="switch-input"
                type="checkbox" />
            <span className="switch-label" data-on="On" data-off="Off"></span>
            <span className="switch-handle"></span>
        </label>
    );
}

Switch.propTypes = {
    handleSwitch: func
};