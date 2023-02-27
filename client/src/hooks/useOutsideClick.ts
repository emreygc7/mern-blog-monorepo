import React, { useRef, useEffect } from 'react';

// type Params = {
//   ref: React.RefObject<HTMLElement>;
//   callback: (event: MouseEvent | TouchEvent)=>void 
//   // current: HTMLElement | null;
//   // target: EventTarget | null;
// };


// function useHandleOutsideClick(ref: Params, callback: Params) {
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent | TouchEvent) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         callback();
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [ref]);
// }

// export default useHandleOutsideClick;