import React, { useState } from 'react';
import Next from './next';
import Html from './html';

const CodeExport1 = ({ onClose }) => {
 
  const [exportType, setExportType] = useState('html');

  return (
    <div className="modal-content">
      <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>Code Export</h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>Manage how you download your website's code.</p>
        </div>
        <button onClick={onClose} className="close-x" style={{
             background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
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

      <button className="model sm-gray-button" style={{ marginTop: '20px' }}>
        Download {exportType === 'next' ? 'Next JS Project' : 'HTML & CSS'}
      </button>
    </div>
  );
};

export default CodeExport1;