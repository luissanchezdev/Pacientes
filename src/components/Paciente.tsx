import { TypePaciente } from "./types/types"
import { usePacientesContext } from "../hooks/PacientesProvider"
import Formulario from "./Formulario"
import Modal from "./ui/Modal"
import { useState } from 'react'

function Paciente( {paciente} : {paciente : TypePaciente}) {
  const [modal, setModal] = useState(false)
  const { deletePaciente } = usePacientesContext()
  const { nombreMascota, nombrePropietario, correoElectronico, fecha, sintomas } = paciente

  const handleShowModal = () => {
    setModal(!modal)
  }

  return (
    <div className="paciente">
      <p className="paciente_data">Nombre Mascota: <span className="font-normal">{ nombreMascota }</span></p>
      <p className="paciente_data">Nombre Propietario: <span className="font-normal">{ nombrePropietario }</span></p>
      <p className="paciente_data">Correo electrónico: <span className="font-normal">{ correoElectronico }</span></p>
      <p className="paciente_data">Fecha de alta: <span className="font-normal">{ fecha }</span></p>
      <p className="paciente_data">Sintomas: <span className="font-normal">{ sintomas }</span></p>
      <div className="paciente_actions">
        <button 
          className="btn btn-edit"
          onClick={handleShowModal}  
        >Editar</button>
        <button 
          className='btn btn-delete'
          onClick={() => deletePaciente(paciente.id)} 
        >Eliminar</button>
      </div>
     { modal && (
      <Modal>
        <Formulario 
          modalState={ modal }
          dataPaciente={ paciente }
          handleShowModal={ handleShowModal }
        />
      </Modal>
     ) }
    </div>
  )
}

export default Paciente