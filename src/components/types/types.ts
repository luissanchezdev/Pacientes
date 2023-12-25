export type TypePaciente = {
  id: string;
  nombreMascota: string;
  nombrePropietario: string;
  correoElectronico: string;
  fecha: string;
  sintomas: string;
}

export type TypeFormulario = {
  modalState?: Boolean;
  dataPaciente?: TypePaciente;
  handleShowModal: () => void;
}