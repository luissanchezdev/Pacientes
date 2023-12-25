import Paciente from "./Paciente"
import { usePacientesContext } from "../hooks/PacientesProvider"
import { useEffect } from "react"

function ListaPacientes() {

  const { pacientes } = usePacientesContext()

  return (
    <div className="lista-pacientes">
      <h2 className="lista-pacientes_title">
        { pacientes.length === 0 ? 'No hay pacientes' : `Lista de pacientes(${pacientes.length})`} 

      </h2>
      { pacientes.length != 0 && (
        <h3 className="lista-pacientes_subtitle">Listar y <span className="text-primary">Administrar</span></h3>
      )}
     <div className="pacientes">
      {pacientes.map(paciente => {
        return (
          <Paciente 
            key={ paciente.id } 
            paciente={paciente} 
          />
        )
      })}
     </div>
    </div>
  )
}

export default ListaPacientes