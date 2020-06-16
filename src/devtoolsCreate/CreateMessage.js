import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { materialStyles } from '../common/common.js';
import Button from '@material-ui/core/Button';
import {
    useParams
} from "react-router-dom";
import '../common/common.js'
import { BASE_URL } from '../common/Urls.js';
import '../network/NetworkAccess.js'
import { loadMessages, loadMessage, updateMessage, createMessage } from '../network/NetworkAccess.js';
import Loading from '../common/Loading.js';
import Toast from '../common/Toast.js';
import {
    useHistory
} from "react-router-dom";

function CreateMessage() {
    const styles = materialStyles();
    let history = useHistory();
    const [message, setMessage] = useState({
        'message': '',
        'name': ''
    })
    const [buttonText, setButtonText] = useState('');
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [successMessage, setsuccessMessage] = useState('');
    

    const handleSnakBarClose = () =>{
        setSnackBarOpen(false);
        history.push('/');
    }



    let { id } = useParams();

    // Checks It's from create or update   
    useEffect(() => {
        if (id != undefined) {
            let loadMessageUrl = BASE_URL + "/" + id;
            setButtonText('Update')
            setLoading(true);
            loadMessage(loadMessageUrl, ((data) => {
                console.log(data);
                setMessage({
                    'message': data.data.message,
                    'name': data.data.toolName
                });
                setLoading(false);
            }), ((error) => {
                console.log(error);
                setLoading(false);
            }));
            // console.log("Id Defined...!",id)
        } else {
            // console.log("Id Undefined...!")
            setButtonText('Create')
        }
    }, [])

    const handleSave = (event) => {
        let request = {
            'message': message.message,
            'toolName': message.name
        }
        if (buttonText === 'Update') {
            setLoading(true);
            let updateMessageUrl = BASE_URL + "/" + id;
            updateMessage(updateMessageUrl, request, ((data) => {
                console.log(data);
                setLoading(false);
                setsuccessMessage(data.data.message);
                setSnackBarOpen(true);
            }), ((error) => {
                console.log(error);
                setLoading(false);
            }))
        } else {
            let createMessageUrl = BASE_URL
            setLoading(true);
            createMessage(createMessageUrl, request, ((data) => {
                console.log(data);
                setLoading(false);
                setsuccessMessage(data.data.message);
                setSnackBarOpen(true);

            }), ((error) => {
                setLoading(false);
                console.log(error);
            }))
        }
    }

    const handleChange = (event) => {
        if (event.target.id === 'name') {
            setMessage({ 'name': event.target.value, 'message': message.message });
        } else if (event.target.id === 'message') {
            setMessage({ 'message': event.target.value, 'name': message.name });
        }
    }

    return (
        <div className={styles.root}>
            <Paper variant="outlined" elevation={3} className={styles.control}>
                <Grid container spacing={2} >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <TextField required id="name" fullWidth={true} label="Name" value={message.name} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField required id="message" fullWidth={true} label="Message" value={message.message} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={10}></Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" onClick={handleSave}>{buttonText}</Button>
                    </Grid>
                </Grid>

            </Paper>

            <Toast open={snackBarOpen} message={successMessage} handleSnakBarClose={handleSnakBarClose}/>
            <Loading open={loading}/>
        </div>
    )
}

export default CreateMessage
