import React , {useState} from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import TextField from '@mui/material/TextField';

import "./EmailInput.css"

const EmailInput = () => {

    const {id} = useParams()

    const {register, reset , handleSubmit , 
        formState: {errors}
    } = useForm()

    const [diferentPasswords, setSpan] = useState(false);
    
    
    const onSubmitFunction = handleSubmit((data) => {
    
        if(errors.email || errors.password || errors.confirmPassword){
            console.log(errors)
        }else {
            reset()
            if(id == "empleador"){
                navigate('/registerCompanyData')
            }else{
                navigate('/registerApplicantData')
            }
        }
    })

    const navigate = useNavigate();

  return (
    <div className='container'>
        <form onSubmit= {onSubmitFunction}>
        <center><h1 className='emailInputTitle'>Registro {id}</h1></center>
        <center>
            <FaRegCheckCircle color='white' className='icons'/>
            <label className='subtitle'> Correo y Contraseña</label>
            <div className='tab'></div>
        </center>
        <div className='textField'><TextField
            className='textField'
            type='email'
            label="Correo"
            color='secondary'
            {...register("email",{
                required: {
                    value: true,
                    message: 'Es requerido ingresar un correo'
                }
            })}
        /></div>
        {
            errors.email && <span>{errors.email.message}</span>
        }

        <div className='textField'><TextField
            className='textField'
            type='password'
            label="Contraseña"
            color='secondary'
            {...register("password",{
                required: {
                    value: true,
                    message: 'Es requerido ingresar una contraseña'
                },
                minLength: {
                    value: 8,
                    message: 'La contraseña debe tener almenos 8 caracteres'
                }
            })}
        /></div>
        {
            errors.password && <span>{errors.password.message}</span>
        }


        <center><button type='submit'>Siguiente</button></center>
    </form>
    </div>
  )
}

export {EmailInput};