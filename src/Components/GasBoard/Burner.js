import React from "react";
import { func, number, bool } from "prop-types";

function Burner({ id, disabled, onBurnerStart, min, max, defaultValue, step }) {
    return (
        <div className="burner">
            <h4 className="item-heading">#{id}</h4>
            <img alt="" className="card-img" src="http://img.everychina.com/nimg/f1/14/c04d7d9f148411572ab4e6617e4d-200x200-1/stainless_steel_single_portable_gas_burners_stove_cooker_tr_160.jpg" />
            <div className="burner-start">
                <h4 className="item-heading">Start</h4>
                <input
                    className="burner-controller"
                    id={id}
                    disabled={disabled}
                    onChange={onBurnerStart}
                    name={id}
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={defaultValue}
                    step={step} />
            </div>
        </div>
    );
}

Burner.propTypes = {
    id: number.isRequired,
    disabled: bool.isRequired,
    onBurnerStart: func.isRequired,
    min: number.isRequired,
    max: number.isRequired,
    defaultValue: number.isRequired,
    step: number.isRequired
};

export default Burner;