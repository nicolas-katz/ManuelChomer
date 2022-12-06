// import { Fragment, useRef, useState, useEffect } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import video from '../assets/video.mp4';
// import styled from 'styled-components';
// import { 
//     IoClose 
// } from 'react-icons/all';

// export default function Modal({openModal, handleClose}) {
//   return(
//     <div>
//       <div>
//         <IoClose onClick={handleClose} />
//         <video src={video} controls></video>
//       </div>
//     </div>
//   );
// };

// const StyledVideo = styled.video`
//     width: 100%;
//     max-height: 500px;
//     margin-top: 60px;
//     padding: 20px;

//     object-fit: cover;

//     @media only screen and (min-width: 425px) {
//       min-width: 380px;
//     }

//     @media only screen and (min-width: 540px) {
//       min-width: 500px;
//     }

//     @media only screen and (min-width: 768px) {
//       min-width: 600px;
//       margin-top: 80px;
//     }
// `;

// export default function Modal({openModal, handleClose}) {
//   const [open, setOpen] = useState(false)

//   useEffect(()=> {
//     setOpen(openModal);
//     handleClose(openModal);
//   });

//   const handleClick = () => {
//     setOpen(false);
//     handleClose(false);
//   }

//   const cancelButtonRef = useRef(null)

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleClick}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full justify-center text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel 
//                 className="relative transform overflow-hidden transition-all"
//                 >
//                   <div 
//                     onClick={handleClick}
//                     style={{
//                       position: 'absolute',
//                       top: '32px',
//                       right: '20px',
//                       display: 'flex',
//                       flexDirection: 'row',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       cursor: 'pointer',
//                       color: 'white',
//                       fontSize: '14px'
//                     }}>
//                     <IoClose 
//                       style={{
//                         marginRight: '4px',
//                       }}
//                     />
//                     CERRAR
//                   </div>
//                   <StyledVideo
//                     src={video} 
//                     controls
//                   >
//                   </StyledVideo>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// };