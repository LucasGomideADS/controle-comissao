import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from '@mui/x-data-grid';
import { db } from "../firebase";
import Dashboard from "../components/Dashboard";

export default function Estornos() {

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
        { field: "data_cadastro", headerName: "Data de cadastro", headerAlign: "center", align: "center", width: 130 },
        { field: "ativo", headerName: "Ativo", headerAlign: "center", align: "center", width: 100 },
        { field: "obs", headerName: "Observações", headerAlign: "center", align: "center", width: 180 },
    ];

    useEffect(() => {
        const dadosComissao = [];
        const arrayDados = db.collection("estabelecimentos").where("estorno", "==", "Sim").onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            dadosComissao.push({
              id: doc.id,
              key: doc.id,
              ...doc.data(),
            });
          });
          setEcs(dadosComissao);
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
        Estornos
      </Typography>
        <Box sx={{ height: 450, width: 800 }}>
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
