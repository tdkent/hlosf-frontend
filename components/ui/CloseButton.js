import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const CloseButton = ({ closeClickHandler, controls }) => {
  return (
    <div
      className="py-4"
      onClick={closeClickHandler}>
      <button
        aria-controls={controls}
        aria-expanded="true"
        className="flex items-center mx-auto text-red-700">
        <FaWindowClose className="mr-1 fill-red-700" />
        Close Window
      </button>
    </div>
  );
};

export default CloseButton;
