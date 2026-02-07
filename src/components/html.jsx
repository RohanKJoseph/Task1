import React from 'react'
import { SiHtml5 } from 'react-icons/si';

const Html = () => {
  return (
    <>
     <div className='html-l1'>
        <p> <span>
              <SiHtml5 style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            </span>
            Export as HTML & CSS</p>
        <p className='ziped'>Zipped</p>
     </div>
     <div className="html-form">
         <label className='custom-checkbox'>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                <span className="checkmark"></span>
                Include assets(images,style, fonts, etc.)
        </label>
        <label className='custom-checkbox'>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                <span className="checkmark"></span>
                   Include custon code 
        </label>
     </div>
    </>
  )
}

export default Html