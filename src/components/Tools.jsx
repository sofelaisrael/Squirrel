import React from 'react'
import ToolsLists from '../lists/toolLists'

function Tools() {
  return (
    <div className='toolgrid '>
      {ToolsLists.map((lis, key) => {
        return(
            <div key={key} className="tools down">
                <div className="toolimg">
                    <div className="bg">
                      <img src={lis.image} alt="" />
                    </div>
                </div>
                <div className="x">
                    <span className='other'>{lis.title}</span>
                    <div className="cont content">{lis.content}</div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Tools
