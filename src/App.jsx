import React, { useState } from 'react';
import CodeExport1 from './components/codeExport1'; 

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <main>
      <div className="page1">
        <button className="sm-gray-button" onClick={togglePopup}>
          EXPORT CODE
        </button>
      </div>

     
      {isPopupOpen && (
        <div className="modal-overlay">
            <CodeExport1 onClose={togglePopup} />
        </div>
      )}
    </main>
  );
}

export default App;