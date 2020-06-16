import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {materialStyles} from '../common/common.js'

function TableHeader(props) {
    let tablecell = materialStyles();
    return (
       <TableHead>
           <TableRow>
                {
                    props.headers.map((header,index)=>(
                    <TableCell align='center' className={tablecell.tablecell}>
                      <b>{header}</b>
                     </TableCell>
                    ))
                }
           </TableRow>
       </TableHead>
    )
}

export default TableHeader
