import { NOTIFICATION_TYPES } from "../../constants/enums"

function Notification({ notificationType } : { notificationType : NOTIFICATION_TYPES | null }) {

  return (
    <>
      { notificationType === null }

      {notificationType === NOTIFICATION_TYPES.EMPTYFIELD && <p className="notification text-red-500">Ningún campo puede estár vacio</p>}

      {notificationType === NOTIFICATION_TYPES.NOSTRING && <p className="notification text-red-500">Los 
      nombres no deben incluir números o caracterés especiales</p>}

      {notificationType === NOTIFICATION_TYPES.ERROREMAIL && <p className="notification text-red-500">El correo ingresado no es válido </p> }

      {notificationType === NOTIFICATION_TYPES.SUCCESS && <p className="notification text-secondary">El paciente ha sido añadido exitosamente</p>}
    </>
  )
}

export default Notification