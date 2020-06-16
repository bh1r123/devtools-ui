import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import './DevToolsTable.css'
import { materialStyles } from '../common/common.js'
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table'
import TableHeader from './TableHeader';
import Paper from '@material-ui/core/Paper';
import DevTableBody from './DevTableBody';
import UploadFile from './UploadFile';
import TablePagination from '@material-ui/core/TablePagination';
import { DropzoneDialog } from 'material-ui-dropzone'
import {
    useHistory
} from "react-router-dom";
import '../network/NetworkAccess.js';
import { loadMessages, uploadFile } from '../network/NetworkAccess.js';
import Toast from '../common/Toast';

function DevToolsTable() {
    const [open, setOpen] = useState(false);
    const [messages, setMessage] = useState([]);
    const [fileUpload, setFileUpload] = useState(
        {
            'message': '',
            'open': false
        }
    )

    let history = useHistory();
    const onUploadButtonClicked = () => {
        console.log('Upload button Clicked')
        setOpen(true)
    }

    const onCreateButtonClicked = () => {
        console.log("On Create Button Clicked");
        history.push("/create");
    }

    useEffect(() => {
        loadMessages(0, 10, ((data) => {
            console.log(data);
           const messages = data.data.data.map(message=>{
                return {
                    'message':message.message,
                    'name':message.toolName,
                    'id':message.uniqueId
                };
            });
            setMessage(messages);
            console.log(messages);
        }), ((error) => {

        }));
    }, []);

    const handleClose = () => {
        console.log("dialog closed")
        setOpen(false)
    }

    const handleChangePage = (event, newPage) => {
        console.log(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        console.log(event.target.value);
    }

    const handleView = (index) => {
        history.push("/messages/" + index);
    }

    const handleEdit = (index) => {
        history.push("/messages/" + index + "/edit");
    }

    const handleSnakBarClose = () => {
        setFileUpload({
            'open': false,
            'message': ''
        });
    }

    const handleSaveFile = (files, event) => {
        console.log("File Saved..!");
        setOpen(false)
        uploadFile('http://localhost:8081/api/v1/messages/file', files[0], ((data) => {
            console.log(data);
            setFileUpload({
                'open': true,
                'message': data.data.message
            });
        }), ((data) => {
            console.log(data);
        }))
    }

    const classes = materialStyles();
    let headers = ['Name', 'Message', 'Edit', 'View'];
    return (
        <div>
            <div className='TopButtons'>
                <Button className={classes.extendedIcon} onClick={onUploadButtonClicked} variant="contained" color="primary" component="span">Upload Sheet</Button>
                <Button variant="contained" onClick={onCreateButtonClicked} color="primary">Create</Button>
            </div>
            {/* <UploadFile open={open} handleClose={handleClose}/> */}
            <DropzoneDialog
                open={open}
                onSave={handleSaveFile}
                dialogTitle='Upload Sheet'
                acceptedFiles={['application/vnd.ms-excel', '.xlsx']}
                showPreviews={false}
                maxFileSize={5000000}
                filesLimit={1}
                showAlerts={false}
                onClose={handleClose}
            />
            <Paper className={classes.table}>
                <TableContainer>
                    <Table>
                        <TableHeader headers={headers} />
                        <DevTableBody rows={messages} handleView={handleView} handleEdit={handleEdit}></DevTableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Toast open={fileUpload.open} message={fileUpload.message} handleSnakBarClose={handleSnakBarClose} />
        </div>
    )
}


export default DevToolsTable
