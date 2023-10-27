import React from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

const Search = () => {
  return (
    <div className='flex'>
      <TextField id='standard-basic' label='Search' variant='standard' />
      <SearchIcon style={{ cursor: 'pointer' }} />
    </div>
  )
}

export default Search
