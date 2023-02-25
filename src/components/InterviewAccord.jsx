import React from 'react'
import Question from './Question';

const InterviewAccord = (props) => {
    //destructuring
    const {data} = props;
  return (
    <div className='row'>{
        data.map(item=> <Question item={item} key={item.id}/>
           
        )
        }</div>
  )
}

export default InterviewAccord