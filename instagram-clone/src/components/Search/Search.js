import React from 'react'
import search from '../../Images/search.png'

const Search = () => {
  return (
    <div className='searchconts container'>
      <div className='inner search'>
        <img className='inner-logo' src={search} alt='home image' width={'24px'} height={'24px'}></img>
        <p> Search</p>
      </div>
    </div>
  )
}

export default Search