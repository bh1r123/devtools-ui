import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';

function Loading(props) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
            >
                <CircularProgress />
            </Dialog>
        </div>
    )
}

export default Loading
