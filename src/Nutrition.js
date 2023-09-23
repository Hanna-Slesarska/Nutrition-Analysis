import  { Table, TableBody, TableRow, TableCell } from '@mui/material';

export default function Nutrition({ label, quantity, unit, index}) {
    return (
        <div className='container'>
            <div className='table'>
            <Table > 
                <TableBody key={index}>
                <TableRow>
                    <TableCell align="left" width="60%"> {label} </TableCell>
                    <TableCell align="right" width="20%"> {quantity.toFixed()} </TableCell> 
                    <TableCell align="left" width="20%"> {unit} </TableCell>
                    </TableRow>
                </TableBody>
            </Table> 
        </div>
        
        </div>
       
    )
}
