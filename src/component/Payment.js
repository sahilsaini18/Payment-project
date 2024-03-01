

import React, { useState } from 'react'

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material'
import { BorderColor } from '@mui/icons-material'
const Payment = () => {
  
  
    
  return (
    <>
     
     <TableContainer component={Paper}>
        <Table aria-label='simple-table'>
          <TableHead>
            <TableRow >
              <TableCell style={{ border: '2px solid red' ,textAlign:'center' }}>Invoice Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Add your data rows here */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Payment
