import React, { useEffect } from 'react'
import Mac from '../assets/Mac.png'

function WorkFlow() {

  return (
    <div className='workflow'>
        <div className="worktext">
            <div className="worktitle title hidde">
                Build the workflow you want
            </div>
            <div className="workcont content right">
                Customize Notion to make it work the way you want it to.
                 <br />Just drag and drop to craft the <div className='span'>dashboard, website, doc, or system</div> you need.
            </div>
        </div>
        <div className="workimg hidden">
            <img src={Mac} alt="" />
        </div>
    </div>
  )
}

export default WorkFlow
