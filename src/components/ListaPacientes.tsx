import Paciente from "./Paciente"

function ListaPacientes() {
  return (
    <div className="w-full lg:max-w-[600px] py-5 mx-auto">
      <h2 className="text-black text-center text-2xl">Lista de pacientes</h2>
      <h3 className="text-black text-center text-xl">Listar y <span className="text-primary">Administrar</span></h3>
     <div className="pacientes">
      <Paciente />
     </div>
    </div>
  )
}

export default ListaPacientes