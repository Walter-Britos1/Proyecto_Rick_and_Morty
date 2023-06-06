const validation = (data) => {
  let errors = {}

  if (!data.email.includes('@')) {
    errors.e1 = `El email ${data.email} no es valido. Por favor intente nuevamente.`
  }

  if (!data.email) {
    errors.e2 = 'Por favor ingrese un email.'
  }

  if (data.email.length > 35) {
    errors.e3 = 'No debe ser mayor a 35 caracteres.'
  }

  if (!/\d+/.test(data.password)) {
    errors.p1 = 'Su contraseña debe incluir al menos un numero'
  }

  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = 'Su contraseña debe tener entre 6 y 10 caracteres'
  }
  
  return errors
};

export default validation;