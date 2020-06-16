import React from 'react'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import {materialStyles} from '../common/common.js'

function DevTableBody(props) {
    let rowdata = props.rows;
    const paddings = materialStyles();
    return (
        <TableBody>
            {
                rowdata.map((row, index) => (
                    <TableRow >
                        <TableCell padding = 'none' align='center'>
                            <span>{row.name}</span>
                        </TableCell>
                        <TableCell padding = 'none' align='center'>
                            <span>{row.message}</span>
                        </TableCell>
                        <TableCell  padding = 'none' align='center'>
                            <IconButton>
                                <EditIcon onClick={(event)=>{
                                    props.handleEdit(row.id)
                                }}/>
                            </IconButton>
                        </TableCell>
                        <TableCell padding = 'none' align='center'>
                            <IconButton onClick={(event)=>{
                                props.handleView(row.id)
                            }}>
                                <VisibilityIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))
            }

        </TableBody>
    )
}

export default DevTableBody
