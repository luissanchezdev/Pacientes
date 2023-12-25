import { ReactComponentElement, ReactNode } from "react"

function Modal({ children } : { children : ReactNode }) {
  return (
    <div className="modal" id="modal">
      <div className="modal_container">
          {children}
      </div>
    </div>
  )
}

export default Modal