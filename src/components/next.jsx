import React from 'react'
import { SiReact } from 'react-icons/si';

const Next = () => {
  return (
    <>
        
     <div className='html-l1'>
        <p><span>
              <SiReact  style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            </span>Export as NextJS Project</p>
        <p className='ziped'>Zipped</p>
     </div>
     <div className="html-form">
         <label className='custom-checkbox'>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                <span className="checkmark"></span>
               Use `app` directory (NextJS v13+) 
        </label>
        <label className='custom-checkbox'>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                <span className="checkmark"></span>
                    Include assets(images,style, fonts, etc.) 
        </label>
        <label className='custom-checkbox'>
                <input type="checkbox" defaultChecked style={{ accentColor: 'var(--accent-purple)' }} />
                <span className="checkmark"></span>
                     Include custom code    
        </label>
     </div>
    
    </>
  )
}

export default Next