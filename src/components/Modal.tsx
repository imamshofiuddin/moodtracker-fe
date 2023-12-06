import {AiOutlineClose} from 'react-icons/ai';

function Modal({open, onClose, children}: any){
  return(
  <>
  <div
    onClick={onClose}
    className={
      `z-50 inset-0 mx-auto flex fixed justify-center items-center transition-colors
      ${open ? 'visible bg-black/20': 'invisible'}`}
  >
    <div
      className={`
      bg-white rounded-xl shadow p-10 transition-all absolute max-h-[100%] overflow-y-auto
        ${open ? 'fixed scale-100 opacity-100' : 'scale-125 fixed opacity-0'}`}
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className='absolute md:top-2 md:right-2 top-2 right-12 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
        <AiOutlineClose />
      </button>
      {children}
    </div>
  </div>
  </>
  );
}

export default Modal;
