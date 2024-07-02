import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const CrearUsuarios = () => {

    const valorInicial = {
        nombre: '',
        apellido: '',
        edad: 18,
        telefono: 0,
        correo: ''
    }

    let {id} = useParams();


    const [usuario, setUsuario] = useState(valorInicial)
    const [subId, setSubId] = useState(id)

    const capturarDatos = (e) => {
        const { name, value } = e.target
        setUsuario({ ...usuario, [name]: value })
    }

    const guardarDatos = async (e) => {
        e.preventDefault();
        // console.log(usuario);

        // Crear lógica para petición POST
        const newUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            correo: usuario.correo
        }

        await axios.post("http://localhost:4000/api/usuarios", newUser)

        setUsuario({...valorInicial})
    }

    //Lógica para hacer petición API 
    
    const obtUno = async(valorId)=>{
        const res = await axios.get('http://localhost:4000/api/usuarios/' + valorId)
        setUsuario({
            nombre: res.data.nombre,
            apellido: res.data.apellido,
            edad: res.data.edad,
            telefono: res.data.telefono,
            correo: res.data.correo
        })
    }

    useEffect(() => {
        if(subId !=='') {
            obtUno(subId)
        }
     }, [subId]);


    return (
        <div className="col-md-6 offset-md-3">
            <div className='card card-body'>
                <form onSubmit={guardarDatos}>
                    <h2 className='text-center mb-3'>Creación de Usuario</h2>
                    <div className='mb-3'>
                        <label>
                            Nombre:
                        </label>

                        <input type='text'
                            className='form-control'
                            placeholder='Ingresar el nombre'
                            required
                            name='nombre'
                            value={usuario.nombre}
                            onChange={capturarDatos}
                        />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Apellido:
                        </label>

                        <input type='text'
                            className='form-control'
                            placeholder='Ingresar el apellido'
                            required
                            name='apellido'
                            value={usuario.apellido}
                            onChange={capturarDatos}
                        />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Edad:
                        </label>

                        <input type='number'
                            className='form-control'
                            placeholder='Ingresar la edad'
                            required
                            name='edad'
                            value={usuario.edad}
                            onChange={capturarDatos}
                        />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Teléfono:
                        </label>

                        <input type='tel'
                            className='form-control'
                            placeholder='Ingresar el teléfono'
                            required
                            name='telefono'
                            value={usuario.telefono}
                            onChange={capturarDatos}
                        />
                    </div>
                    <div className='mb-3'>
                        <label>
                            Correo:
                        </label>

                        <input type='email'
                            className='form-control'
                            placeholder='Ingresar el correo'
                            required
                            name='correo'
                            value={usuario.correo}
                            onChange={capturarDatos}
                        />
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