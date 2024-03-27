import React from 'react'
import Header from '../Header/Header'

function News({ isChecked }) {
  return (
    <>
      <Header
        isChecked={isChecked} header="News"
      />
    </>
  )
}

export default News
