import React , {useState} from 'react'
import {useForm} from 'react-hook-form'
import { FaRegCheckCircle } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { useNavigate , Link } from "react-router-dom";

import './Login.css'

const Login = () => {

    const {register, reset , handleSubmit , 
        formState: {errors}
    } = useForm()

    const [passwordCheck, setSpanPassword] = useState(false);

    const [emailCheck, setSpanEmail] = useState(false);
    
    
    const onSubmitFunction = handleSubmit((data) => {
        if(errors.email || errors.password){
            console.log(errors)
        }
    })

    const navigate = useNavigate();

  return (
    <div className='container'>
        <div className='logoContainer'><Typography
              fontSize={30}
              fontWeight={600}
              sx={{ flexGrow: 1 }}
              color="black"
              
            >
              <Link to={"/"} className='toHome'>Logo</Link>
            </Typography></div>
    <form onSubmit= {onSubmitFunction}>
    <center><h1 className='LoginTitle'>Iniciar sesión</h1></center>
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
    {
        emailCheck && <span>Email incorrecto</span>
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
    {
        passwordCheck && <span>Contraseña incorrecta</span>
    }

    <center><button type='submit'>Siguiente</button></center>

    <center><Link className='forgot' to="">Olvidaste tu contraseña?</Link></center>

    <center><div className='noAcountContainer'>
        <label className='noAcount'>No posee una cuenta?</label>
        <Link className='registerHere' to="">Registrese aqui</Link>
    </div></center>

    </form></div>
  )
}

export {Login}