import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { db } from "../firebase";
import Dashboard from "../components/Dashboard";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import { Stack } from "@mui/system";

export default function EditarCadastro() {
  const [executivo, setExecutivo] = useState("");
  const [estorno, setEstorno] = useState("");
  const [comissao, setComissao] = useState("");
  const [active, setActive] = useState("");
  const [date, setDate] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [obs, setObs] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [edicao, setEdicao] = useState("");
  const [empresa, setEmpresa] = useState('')

  const [loader, setLoader] = useState(false)

  const [alertaSucesso, setAlertaSucesso] = useState(false)
  const [alertaErro, setAlertaErro] = useState(false)

  const params = useParams();
  let navigate = useNavigate()

  const formatChars = {
    9: "[0-9]",
    8: "[0-3]",
    2: "[2]",
    0: "[0]",
    3: "[2]",
    1: "[0-2]",
  };

  console.log(edicao)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)

    if (edicao === "Executivo") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                executivo: executivo,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); // Mostra o alerta de sucesso
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else if (edicao === "NomeFantasia") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                estabelecimento: nomeFantasia,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); // Mostra o alerta de sucesso
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else if (edicao === "Faturamento") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                faturamento: faturamento,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); // Mostra o alerta de sucesso
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else if (edicao === "DataCadastro") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                data_cadastro: date,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); // Mostra o alerta de sucesso
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else if (edicao === "Ativo") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                ativo: active,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); 
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else if (edicao === "Comissão") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                comissao_paga: comissao,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); 
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)
        setEdicao("");

    } else if (edicao === "Estorno") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                estorno: estorno,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); 
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else if (edicao === "Observações") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                obs: obs,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); 
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else if (edicao === "Empresa") {
        db.collection("estabelecimentos") 
            .doc(`${params.id}`)
            .update({
                empresa: empresa,
            })
            .then(() => {
                setAlertaSucesso(!alertaSucesso); 
                setLoader(false)
            })
            .catch((error) => {
                setAlertaErro(!alertaErro); // Mostra o alerta de erro
                setLoader(false)
                console.log(error);
            });
        setTimeout(function Refresh() {window.location.reload()}, 1000)

    } else {
        setAlertaErro(!alertaErro);
        setTimeout(function Refresh() {window.location.reload()}, 1000)
    }
  }

  return (
    <Box>
      <Dashboard />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: 5,
          marginLeft: 30,
          alignContent: "center",
          alignItems: "center",
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ color: "black", marginBottom: 1 }}
        >
          Editar cadastro
        </Typography>

        <Typography
          variant="p"
          component="div"
          sx={{ color: "black", marginBottom: 5 }}
        >
          Você está editando o cadastro de ID: {`${params.id}`}
        </Typography>

        {
        (alertaErro && 
            <Stack sx={{width: 500, height: 150, marginBottom: -9, marginTop: -2}}>
                <Alert severity="error">ERRO! Contate o administrador.</Alert>
            </Stack>         
        ) 
        || 
        (alertaSucesso && 
            <Stack sx={{width: 500, height: 150, marginBottom: -9, marginTop: -2}}>
                <Alert severity="success">Registro alterado!!</Alert>
            </Stack>  
        )
        }
        
        <FormControl>
          <InputLabel id="editando-label">O que deseja editar?</InputLabel>
          <Select
            sx={{ width: 210, marginBottom: 4 }}
            labelId="editando-label"
            id="editando-select"
            value={edicao}
            label="O que deseja editar?"
            onChange={(e) => setEdicao(e.target.value)}
          >
            <MenuItem value={"Executivo"}>Executivo</MenuItem>
            <MenuItem value={"NomeFantasia"}>Nome fantasia</MenuItem>
            <MenuItem value={"Faturamento"}>Faturamento</MenuItem>
            <MenuItem value={"DataCadastro"}>Data de cadastro</MenuItem>
            <MenuItem value={"Ativo"}>Ativo ou inativo</MenuItem>
            <MenuItem value={"Comissão"}>Comissão</MenuItem>
            <MenuItem value={"Estorno"}>Estorno</MenuItem>
            <MenuItem value={"Observações"}>Observações</MenuItem>
            <MenuItem value={"Empresa"}>Empresa</MenuItem>
          </Select>
        </FormControl>

        <form onSubmit={handleSubmit}>
          
            {(edicao === "Executivo" &&  
                <Box sx={{marginLeft: 2.5}}>
                    <FormControl>
                        <InputLabel id="executivo-label">Executivo</InputLabel>
                        <Select
                            sx={{ width: 210 }}
                            labelId="executivo-label"
                            id="executivo-select"
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
                </Box>
                )
                || 
                (edicao === "NomeFantasia" &&
                   <Box sx={{marginLeft: -2.5, width: 250}}>
                        <TextField
                            id="nome-fantasia"
                            label="Nome fantasia"
                            variant="outlined"
                            value={nomeFantasia}
                            onChange={(e) => setNomeFantasia(e.target.value)}
                            sx={{ marginLeft: 5 }}
                        />
                   </Box>
                )
                ||
                (edicao === "Faturamento" &&
                    <Box sx={{marginLeft: -2.5, width: 250}}>
                        <TextField 
                            id="faturamento" 
                            type='number' 
                            label="Faturamento" 
                            variant="outlined" 
                            value={faturamento}
                            onChange={(e) => setFaturamento(e.target.value)}
                            sx={{ marginLeft: 5, width: 210 }} 
                        />
                    </Box> 
                )
                ||
                (edicao === "DataCadastro" &&
                    <Box sx={{marginLeft: 2.5}}>
                        <InputMask
                            mask="89/99/2031"
                            formatChars={formatChars}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        >

                            {() => <TextField sx={{width: 210}} id="dataCadastro" label="Data de cadastro" variant="outlined"/>}

                        </InputMask>
                    </Box> 
                )
                ||
                (edicao === "Ativo" &&
                    <Box sx={{marginLeft: -2.5}}>
                        <FormControl>
                            <InputLabel id="ativo-label" sx={{marginLeft: 5}}>Ativo?</InputLabel>
                            <Select sx={{width: 210, marginLeft: 5}}
                                labelId="ativo-label"
                                id="ativo-select"
                                value={active}
                                label="Ativo?"
                                onChange={(e) => setActive(e.target.value)}
                            >
                                <MenuItem value={"Sim"}>Sim</MenuItem>
                                <MenuItem value={"Não"}>Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Box> 
                )
                ||
                (edicao === "Comissão" &&
                    <Box sx={{marginLeft: -2.5}}>
                        <FormControl>
                            <InputLabel id="comissao-label" sx={{marginLeft: 5}}>Comissão paga?</InputLabel>
                            <Select sx={{width: 210, marginLeft: 5}}
                                labelId="comissao-label"
                                id="comissao-select"
                                value={comissao}
                                label="Comissão paga?"
                                onChange={(e) => setComissao(e.target.value)}
                            >
                                <MenuItem value={"Sim"}>Sim</MenuItem>
                                <MenuItem value={"Não"}>Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Box> 
                )
                ||
                (edicao === "Estorno" &&
                    <Box sx={{marginLeft: -2.5}}>
                        <FormControl>
                            <InputLabel id="estorno-label" sx={{marginLeft: 5}}>Comissão estornada?</InputLabel>
                            <Select sx={{width: 210, marginLeft: 5}}
                                labelId="estorno-label"
                                id="estorno-select"
                                value={estorno}
                                label="Comissão estornada?"
                                onChange={(e) => setEstorno(e.target.value)}
                            >
                                <MenuItem value={"Sim"}>Sim</MenuItem>
                                <MenuItem value={"Não"}>Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Box> 
                )
                ||
                (edicao === "Observações" &&
                    <Box sx={{marginLeft: -2.5, width: 250}}>
                        <TextField
                            id="observacoes" 
                            label="Observações" 
                            variant="outlined" 
                            value={obs}
                            onChange={(e) => setObs(e.target.value)}
                            sx={{ marginLeft: 5, width: 210}} 
                        />
                    </Box> 
                )
                ||
                (edicao === "" &&
                    <Box sx={{marginLeft: 2}}>
                        Selecione uma opção acima...
                    </Box> 
                )
                ||
                (edicao === "Empresa" &&
                    <Box sx={{marginLeft: -2.5, width: 250}}>
                        <TextField 
                            id="empresa" 
                            label="Empresa" 
                            variant="outlined" 
                            value={empresa}
                            onChange={(e) => setEmpresa(e.target.value)}
                            sx={{ marginLeft: 5, width: 210}} 
                        />
                    </Box>

                    
                )
            }

          <Box sx={{ display: "flex", flexDirection: "column", marginTop: 5 }}>
            <Button
              sx={{ width: 250, height: 60, marginTop: 0.5, background: loader ? "#ccc" : " #22aae2" }}
              variant="contained"
              type='submit'
            >
              Atualizar
            </Button>

            <Button
              sx={{ width: 250, height: 60, marginTop: 3, background: loader ? "#ccc" : " #22aae2" }}
              variant="contained"
              onClick={() => {navigate('/estabelecimentos')}}
            >
              Voltar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
