import React from 'react'

const Html = () => {
  return (
    <>
     <div className='html-l1'>
        <p> <span>
              <img src="html-1.svg" alt="NextJS Logo" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            </span>Export as HTML & CSS</p>
        <p className='ziped'>Zipped</p>
     </div>
     <div className="html-form">
         <label>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                Include assets(images,style, fonts, etc.)
        </label>
        <label>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                   Include custon code 
        </label>
     </div>
    </>
  )
}

export default Html