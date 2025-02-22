import React from 'react'

function Search(props) {
  return (
    <div className='text-3xl text-white'>
      <p>{props.searchTerm}</p>
    </div>
  )
}

export default Search
