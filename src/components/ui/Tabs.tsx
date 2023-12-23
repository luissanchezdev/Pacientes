import { COLORS } from "../../constants"
import { useState } from 'react'
import Formulario from "../Formulario"
import ListaPacientes from "../ListaPacientes"

const styles = {
  backgroundColor: COLORS.secondary,
  color: 'white'
}

function Tabs() {
  const [activeTab, setActiveTab] = useState('seguimiento')

  return (
    <div className="tabs">
      <div className='tabs_options'>
        <h2 className="hidden xl:block text-2xl mb-5">Opciones</h2>
        <button 
          onClick={() => setActiveTab('seguimiento')} 
          className='tab'
          style={ activeTab === 'seguimiento' ? styles : {} }
        >
          Seguimiento
        </button>
        <button 
          onClick={() => setActiveTab('administracion')} 
          className='tab'
          style={ activeTab === 'administracion' ? styles : {} }
        >
          Administración
        </button>
      </div>
      <div className='tabs_content'>
        { activeTab === 'seguimiento' ? 
        <Formulario 
          handleShowModal={() => false }
        />
        : 
        <ListaPacientes />
        }
      </div>
    </div>
  )
}

export default Tabs