import { images } from '../constants/index.js'

const { Logo } = images

function Header() {
  return (
    <header className="header">
      <img src={ Logo } className='header_logo'/>
      <h1 className='header_title'>
          Listado de Pacientes <span className="text-primary">Veterinaria</span>
      </h1>
    </header>
  )
}

export default Header
