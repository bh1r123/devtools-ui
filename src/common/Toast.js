import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Toast(props) {
    return (
        <div>
            <Snackbar  open={props.open} autoHideDuration={2000} onClose={props.handleSnakBarClose}>
                <Alert onClose={props.handleSnakBarClose} severity="success">{props.message}</Alert>
            </Snackbar>
        </div>
    )
}


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default Toast
