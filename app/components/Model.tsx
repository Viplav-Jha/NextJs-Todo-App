import React from 'react';

interface ModelProps {
  openModel: boolean;
  setOpenModel: (open: boolean) => void; // Correct return type: void
  children:React.ReactNode
}

const Model: React.FC<ModelProps> = ({ openModel, setOpenModel,children }) => {
  return (
    <>
      <div className={`modal ${openModel ? 'modal-open' : ''}`}>
        <div className="modal-box">
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            {children}
          <div className="modal-action">
            <label className="btn" onClick={() => setOpenModel(false)}>Close!</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
