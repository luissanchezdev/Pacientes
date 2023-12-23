import { ReactComponentElement, ReactNode } from "react"

function Modal({ children } : { children : ReactNode }) {
  return (
    <div className="container-modal" id="modal">
      <div className="w-[80%] h-[80%] mx-auto fixed z-50 bg-white top-0 right-0 bottom-0 left-0 mt-14 shadow-lg border-solid border-2 border-grayLight rounded-lg transition-all">
          {children}
      </div>
    </div>
  )
}

export default Modal