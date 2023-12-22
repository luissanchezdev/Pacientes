import { images } from '../constants/index.js'

const { Logo } = images

function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-center items-center py-5 md:py-5 px-5 mb-5 md:mb-5 md:gap-5 bg-white w-full">
      <img src={ Logo } className='w-16 pb-5 md:pb-0'/>
      <h1 className='text-3xl font-bold text-center text-black'>
          Listado de Pacientes <span className="text-primary">Veterinaria</span>
      </h1>
    </header>
  )
}

export default Header
