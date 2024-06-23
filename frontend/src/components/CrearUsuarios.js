import React from 'react'

const CrearUsuarios = () => {
    return (
        <div className="col-md-6 offset-md-3">
            <div className='card card-body'>
                <form>
                    <h2 className='text-center mb-3'>Creación de Usuario</h2>
                    <div className='mb-3'>
                        <label>
                            Nombre:
                        </label>

                        <input type='text' className='form-control' placeholder='Ingresar el nombre del usuario' required />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Apellido:
                        </label>

                        <input type='text' className='form-control' placeholder='Ingresar el apellido del usuario' required />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Edad:
                        </label>

                        <input type='number' className='form-control' placeholder='Ingresar la edad del usuario' required />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Teléfono:
                        </label>

                        <input type='tel' className='form-control' placeholder='Ingresar el teléfono del usuario' required />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Correo:
                        </label>

                        <input type='email' className='form-control' placeholder='Ingresar el correo del usuario' required />
                    </div>

                    <button className='btn btn-primary form-control'>
                        Guardar Usuario
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CrearUsuarios