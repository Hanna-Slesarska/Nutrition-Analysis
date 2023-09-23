import  { Table, TableBody, TableCell } from '@mui/material';

export default function Nutrition({ label, quantity, unit }) {
    return (
        <div className='container'>
            <div className='table'>
            <Table > 
                <TableBody>
                    <TableCell align="left" width="60%"> {label} </TableCell>
                    <TableCell align="right" width="20%"> {quantity.toFixed()} </TableCell> 
                    <TableCell align="left" width="20%"> {unit} </TableCell>

                </TableBody>
              
            </Table> 
        </div>
        
        </div>
       
    )
}
