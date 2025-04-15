import React from 'react'
import ButtonAppBar from '../commonComponents/Header'
import { Box } from '@mui/material'
import { Outlet } from 'react-router'

function PublicLayOut() {
  return (
    <div>
      <ButtonAppBar />
        <Box>
            <Outlet/>
        </Box>
    </div>
  )
}

export default PublicLayOut
