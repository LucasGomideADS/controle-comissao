import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputMask from 'react-input-mask'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { db } from "../firebase";
import Dashboard from "../components/Dashboard";
import { Stack } from "@mui/system";
import { Alert } from "@mui/material";

export default function AddEc() {
    const [loader, setLoader] = useState(false)

    const [executivo, setExecutivo] = useState('')
    const [active, setActive] = useState('')
    const [date, setDate] = useState('')
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [empresa, setEmpresa] = useState('')
    const [obs, setObs] = useState('')
    const [faturamento, setFaturamento] = useState('')

    const [alertaSucesso, setAlertaSucesso] = useState(false)
    const [alertaErro, setAlertaErro] = useState(false)

    const formatChars = {
        '9': '[0-9]',
        '8': '[0-3]',
        '2': '[2]',
        '0': '[0]',
        '3': '[2]',
        '1': '[0-2]',
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection("estabelecimentos") // IF: Insere o dado no banco apenas se página não carrega os parametros do ID
            .add({
                executivo: executivo,
                estabelecimento: nomeFantasia,
                faturamento: faturamento,
                data_cadastro: date, // Dados armazenados no estado, a serem enviados ao banco
                ativo: active,
                empresa: empresa,
                comissao_paga: 'Não',
                obs: obs,
                estorno: 'Não'
            })
            .then(() => {
                setLoader(false)
                setAlertaSucesso(!alertaSucesso); // Mostra o alerta de sucesso
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                console.log(error);
                setLoader(false)
            });
        setTimeout(function Refresh() {
            window.location.reload();
        }, 1000);
    }   

    return (
      <Box >
      <Dashboard />
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: 5, marginLeft: 30, alignContent: 'center', alignItems: 'center'}}>
            <Typography variant="h3" component="div" sx={{ color: 'black', marginBottom: 7}}>
              Cadastro
            </Typography>

            {
            (alertaErro && 
                <Stack sx={{width: 500, height: 150, marginBottom: -9, marginTop: -5}}>
                    <Alert severity="error">ERRO! Contate o administrador.</Alert>
                </Stack>         
            ) 
            || 
            (alertaSucesso && 
                <Stack sx={{width: 500, height: 150, marginBottom: -9, marginTop: -5}}>
                    <Alert severity="success">Estabelecimento cadastrado!!</Alert>
                </Stack>  
            )
            }

        <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <FormControl>
                    <InputLabel id="executivo-label">Executivo</InputLabel>
                    <Select sx={{width: 210}}
                        labelId="executivo-label"
                        id="executivo-select"
                        required
                        value={executivo}
                        label="Executivo"
                        onChange={(e) => setExecutivo(e.target.value)}
                    >
                        <MenuItem value={"Amanda"}>Amanda</MenuItem>
                        <MenuItem value={"Arthur"}>Arthur</MenuItem>
                        <MenuItem value={"Bruna"}>Bruna</MenuItem>
                        <MenuItem value={"Kaique"}>Kaique</MenuItem>
                        <MenuItem value={"Kesley"}>Kesley</MenuItem>
                        <MenuItem value={"Rafael"}>Rafael</MenuItem>
                        <MenuItem value={"Thales"}>Thales</MenuItem>
                    </Select>
                </FormControl>

                <TextField  
                    id="nome-fantasia" 
                    label="Nome fantasia" 
                    required
                    variant="outlined" 
                    value={nomeFantasia}
                    onChange={(e) => setNomeFantasia(e.target.value)}
                    sx={{ marginLeft: 5, width: 210 }} 
                />
                <TextField 
                    id="faturamento" 
                    type='number' 
                    required
                    label="Faturamento" 
                    variant="outlined" 
                    value={faturamento}
                    onChange={(e) => setFaturamento(e.target.value)}
                    sx={{ marginLeft: 5, width: 210 }} 
                />
            </Box>
    
            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 5 }}>

                <InputMask
                    mask="89/99/2031"
                    formatChars={formatChars}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                >

                    {() => <TextField sx={{width: 210}} required id="dataCadastro" label="Data de cadastro" variant="outlined"/>}

                </InputMask>

                <FormControl>
                    <InputLabel id="ativo-label" sx={{marginLeft: 5}}>Ativo?</InputLabel>
                    <Select sx={{width: 210, marginLeft: 5}}
                        labelId="ativo-label"
                        id="ativo-select"
                        value={active}
                        label="Ativo?"
                        required
                        onChange={(e) => setActive(e.target.value)}
                    >
                        <MenuItem value={"Sim"}>Sim</MenuItem>
                        <MenuItem value={"Não"}>Não</MenuItem>
                    </Select>
                </FormControl>

                <TextField 
                    id="observacoes" 
                    label="Observações" 
                    variant="outlined" 
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                    sx={{ marginLeft: 5, width: 210}} 
                />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 5, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <TextField 
                    id="empresa" 
                    label="Empresa" 
                    variant="outlined" 
                    required
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    sx={{ marginLeft: 0, width: 210}} 
                />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", marginTop: 5, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Button sx={{width: 250, height: 60, marginLeft: 0, marginTop: 2, background: loader ? "#ccc" : " #22aae2"}} type="submit" variant="contained">Cadastrar</Button>
            </Box>
        </form>
      </Box>
      </Box>
    );
  }