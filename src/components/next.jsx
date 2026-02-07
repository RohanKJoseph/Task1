import React from 'react'

const Next = () => {
  return (
    <>
        
     <div className='html-l1'>
        <p><span>
              <img src="next.svg" alt="NextJS Logo" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            </span>Export as NextJS Project</p>
        <p className='ziped'>Zipped</p>
     </div>
     <div className="html-form">
         <label >
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
               Use `app` directory (NextJS v13+) 
        </label>
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

export default Next