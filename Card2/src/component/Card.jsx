import React from 'react'
import { Bookmark } from 'lucide-react'

function Card(props) {
    return (
        <div className='card'>
            <div className="top">
                <span className="date-pill">{props.date}</span>
                <span className="bookmark-pill"><Bookmark size={16} /></span>
                </div>
            <div className='center'>
                <h3>{props.company}</h3>
                <div>
                    <h1>{props.title} <spna><img src={props.logo}></img></spna></h1>
                </div>
                <div className='tags'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                    <h4>{props.tag3}</h4>
                    <h4>{props.tag4}</h4>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                    <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card
