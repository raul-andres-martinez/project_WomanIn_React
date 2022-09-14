// import React, { useState, useEffect, ChangeEvent } from "react";
// import User from "../../models/User";
// import { cadastroUsuario } from "../../services/Service";
// import { Grid, Typography, TextField, Box, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { grid } from "@mui/system";
// import './UserForm.css';
// import CancelOutlined from '@mui/icons-material/Cancel';



// function UserForm() {
//     let navigate = useNavigate();

//     const [confirmarSenha, setConfirmarSenha] = useState<String>("")

//     const [user, setUser] = useState<User>(
//         {
//             id: 0,
//             nome: "",
//             cpf: "",
//             usuario: "",
//             senha: "",
//         }
//     );

//     const [userResult, setUserResult] = useState<User>(
//         {
//             id: 0,
//             nome: "",
//             cpf: "",
//             usuario: "",
//             senha: "",
//         }
//     );

//     useEffect(() => {

//         if(userResult.id != 0){
//             navigate('/login');
//         }

//     }, [userResult, navigate]);

//     function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
//         setConfirmarSenha(e.target.value)
//     }

//     /*function confirmCpfHandle(e: ChangeEvent<HTMLInputElement>){
//         setConfirmCpf(e.target.value)
//     }*/

//     function updatedModel(e: ChangeEvent<HTMLInputElement>){

//         setUser({
//             ...user,
//             [e.target.name]: e.target.value
//         })
//     }

//     async function onSubmit(e: ChangeEvent<HTMLFormElement>){

//         e.preventDefault();
        
//         if(confirmarSenha === user.senha){
//             try {
//                 await cadastroUsuario(`/api/Usuarios/cadastrar`, user, setUserResult)
//                 alert('Usuario cadastrado com sucesso')
//             } catch (error) {
//                 alert('Dados já existentes no sistema, altere os campos e tente novamente!')
//             }

//         }else{
//             alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
//         };

        

//         /* const cpfCnpjVal: RegExp = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/; // useState, useEffect

//             console.log(cpfCnpjVal.test('302.771.340-05'));
//          }

//          function validateCpf() = {
//             int i, soma, peso, resto, DV1i, DV2i, DV1c, DV2c
//          } */
         
//     return (
//         <Grid
//         container
//         spacing={0}
//         direction="column"
//         alignItems="center"
//         justifyContent="center"
//         style={{ minHeight: '100vh'}}>
      
//             <Grid >
//                 <Box >
//                     <form action="" className="campos" onSubmit={onSubmit}>
//                         <Typography variant='h3'gutterBottom component='h3'align='center' className="headliner">
//                             Cadastro 
//                         </Typography>
//                         <Box display="flex" flexDirection='column'>
//                             <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='name' label='Nome' variant='outlined' name='name' margin='normal' className="textfieldbg"></TextField>
//                             <TextField value={user.cpf} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='cpf' label='CPF' variant='outlined' name='cpf' margin='normal' className="textfieldbg"></TextField> 
//                             <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='email' label='E-mail'variant='outlined' name='email'margin='normal' className="textfieldbg"></TextField>
//                             <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' className="textfieldbg"></TextField>
//                             <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmPassword' label='Confirmar Senha' variant='outlined' name='confirmPassword' margin='normal' className="textfieldbg"></TextField>
//                         </Box>

//                         <Box marginTop={2} textAlign='center' className="buttons">
    
//                             <CancelOutlined className="btn__secondary"/>
                           
//                             <Button type='submit'variant='contained' className='btn__primary'>
//                                 Confirmar
//                             </Button>
//                         </Box>
//                     </form>
//                 </Box>
//             </Grid>
//             <Grid className="form__img" xs={12}>

//             </Grid>
//         </Grid >
//     )
// }
// }

// export default UserForm;
import React, { useState, useEffect, ChangeEvent } from "react";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Typography, TextField, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { grid } from "@mui/system";
import './UserForm.css';
import CancelOutlined from '@mui/icons-material/Cancel';



function UserForm() {
    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
            id: 0,
            name: "",
            cpf: "",
            email: "",
            password: "",
        }
    );

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            name: "",
            cpf: "",
            email: "",
            password: "",
        }
    );

    useEffect(() => {

        if(userResult.id != 0){
            navigate('/login');
        }

    }, [userResult, navigate]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>){

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){

        e.preventDefault();
        
        if(confirmarSenha === user.password){
            try {
                await cadastroUsuario(`/api/Usuarios/cadastrar`, user, setUserResult)
                alert('Usuario cadastrado com sucesso')
            } catch (error) {
                alert('Dados já existentes no sistema, altere os campos e tente novamente!')
            }

        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh'}}>
      
            <Grid >
                <Box className="bg__form">
                    <form action="" className="campos" onSubmit={onSubmit}>
                        <Typography variant='h3'gutterBottom component='h3'align='center' className="headliner">
                            Cadastro 
                        </Typography>
                        <Box display="flex" flexDirection='column'>
                            <TextField value={user.name} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='name' label='Nome' variant='outlined' name='name' margin='normal' className="textfieldbg"></TextField>
                            <TextField value={user.cpf} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='cpf' label='CPF' variant='outlined' name='cpf' margin='normal' className="textfieldbg"></TextField> 
                            <TextField value={user.email} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='email' label='E-mail'variant='outlined' name='email'margin='normal' className="textfieldbg"></TextField>
                            <TextField value={user.password} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='password' label='Senha' variant='outlined' name='password' margin='normal' className="textfieldbg" type='password'></TextField>
                            <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmPassword' label='Confirmar Senha' variant='outlined' name='confirmPassword' margin='normal' className="textfieldbg" type='password'></TextField>
                        </Box>

                        <Box marginTop={2} textAlign='center' className="buttons">
    
                        <Link to='/login'>
                            <CancelOutlined className="btn__secondary"/>
                        </Link>
                            <Button type='submit'variant='contained' className='btn__primary'>
                                Confirmar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid className="form__img" xs={12}>

            </Grid>
        </Grid >
    )
}

export default UserForm;