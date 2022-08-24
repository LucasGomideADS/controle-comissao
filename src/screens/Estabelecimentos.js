import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { db } from "../firebase";
import Dashboard from "../components/Dashboard";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import Alert from '@mui/material/Alert';

export default function Estabelecimentos() {

    let navigate = useNavigate()

    const [alertaSucesso, setAlertaSucesso] = useState(false)
    const [alertaErro, setAlertaErro] = useState(false)
    const [loading, setLoading] = useState(true);
    const [ecs, setEcs] = useState([]);

    const columns = [ // Campos da tabela
        { field: "id", headerName: "ID", headerAlign: "center", width: 70 },
        { field: "executivo", headerName: "Executivo", headerAlign: "center", align: "center", width: 130 },
        {
          field: "empresa",
          headerName: "Empresa",
          headerAlign: "center",
          align: "center",
          width: 120,
        },
        { field: "estabelecimento", headerName: "Nome fantasia", headerAlign: "center", align: "center", width: 180 },
        {
        field: "faturamento",
        headerName: "Faturamento",
        width: 100,
        type: 'number',
        headerAlign: "center",
        align: "center",
        },
        { field: "data_cadastro", headerName: "Data de cadastro", headerAlign: "center", align: "center", width: 130 },
        { field: "ativo", headerName: "Ativo", headerAlign: "center", align: "center", width: 100 },
        { field: "comissao_paga", headerName: "Pago", headerAlign: "center", align: "center", width: 100 },
        { field: "estorno", headerName: "Estorno", headerAlign: "center", align: "center", width: 100 },
        { field: "obs", headerName: "Observações", headerAlign: "center", align: "center", width: 180 },
        {
        field: "editar",
        headerName: "Editar",
        width: 100,
        headerAlign: "center",
        align: "center",
        renderCell: params => (
            <IconButton
            aria-label="Editar"
            onClick={() => {navigate(`/estabelecimentos/editar/${params.id}`)}} // navigate(`/${params.id}`)
            >
            <EditIcon />
            </IconButton>
        ),
        },
        {
        field: "excluir",
        headerName: "Excluir",
        width: 100,
        headerAlign: "center",
        align: "center",
        renderCell: params => (
            <IconButton
            aria-label="Excluir"
            onClick={() => {deleteDoc(params.id); setTimeout(function atualizaTabela() {window.location.reload()}, 1000)}}
            >
            <DeleteForeverIcon color="error" />
            </IconButton>
        ),
        },
    ];

    function deleteDoc(id) {
      db.collection("estabelecimentos").doc(`${id}`).delete().then(() => {
        setAlertaSucesso(!alertaSucesso);
      }).catch((error) => {
        setAlertaErro(!alertaErro);
        console.log(error);
      });
    }

    useEffect(() => {
        const dadosEstabelecimentos = [];
        const arrayDados = db.collection("estabelecimentos").onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            dadosEstabelecimentos.push({
              id: doc.id,
              key: doc.id,
              ...doc.data(),
            });
          });
          setEcs(dadosEstabelecimentos);
          setLoading(false);
        });
    
        return () => arrayDados();
    }, []);
    
    if (loading) {
        return <h1 style={{ marginLeft: 700, marginTop: 300}} >Loading...</h1>;
    }


  return (
    <Box>
        <Dashboard />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 2,
        marginLeft: 30,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{ color: "black", marginBottom: 7 }}
      >
        Estabelecimentos
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
                <Alert severity="success">Registro deletado!!</Alert>
            </Stack>  
        )
        }

        <Box sx={{ height: 450, width: 1200 }}>
            <DataGrid
                rows={ecs}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
            />
        </Box>
    </Box>
    </Box>
  );
}
