import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'

function Newsfeed() {
  return (
    <div className='newsfeed' src="Newsfeed.css">
        <div className='newsfeed_container'>
            <div className='newsfeed_chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1> $114,000</h1>
                    <p> +44</p>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed