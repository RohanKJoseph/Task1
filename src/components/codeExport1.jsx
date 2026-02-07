import React, { useState } from 'react';
import Next from './next';
import Html from './html';
import { AiOutlineClose } from "react-icons/ai";

const CodeExport1 = ({ onClose }) => {
 
  const [exportType, setExportType] = useState('html');

  return (
    <div className="modal-content">
      <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <p style={{ fontSize: '18px', fontWeight: '500', margin: 0 ,color:'#f7f7f7'}}>Code Export</p>
          <p style={{ fontSize: '14px', margin: 5 }}>Manage how you download your website's code.</p>
        </div>
        <button onClick={onClose} className="close-x" style={{
              border: 'none', color: '#807e7e', fontSize: '24px', cursor: 'pointer', width: '22px', height: '22px' ,marginRight: '12px'}}><AiOutlineClose /></button>
      </div>

      <div className="inner-card">
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${exportType === 'html' ? 'active' : ''}`}
            onClick={() => setExportType('html')}
          >
            HTML & CSS
          </button>
          <button 
            className={`toggle-btn ${exportType === 'next' ? 'active' : ''}`}
            onClick={() => setExportType('next')}
          >
            Next JS
          </button>
        </div>

     
        {exportType === 'next' ? (
          <div className="next-options">
            
             <Next />
             
          </div>
        ) : (
          <div className="html-options">
            <Html />
          </div>
        )}
      </div >

      <button className="export-bttn" >
        Download {exportType === 'next' ? 'Next JS Project' : 'HTML & CSS'}
      </button>
    </div>
  );
};

export default CodeExport1;