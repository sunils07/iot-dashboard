import React, { Fragment } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./notification.style.scss";

function Notification({ notification }) {
    return (
        <Fragment>
            <div id="notification" className="notification flex">
                <p style={{
                    color: notification.color
                }}>{notification.message}</p>
            </div>
        </Fragment>
    );
}

Notification.propTypes = {
    notification: object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        notification: state.Notification,
    }
}

const mapDispatchToProps = (props) => {
    return bindActionCreators({}, props);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);