import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import Dashboard from "../components/Dashboard";
import { db } from "../firebase";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";

export default function InitialScreen() {
  const [arrayLengthEstabelecimentos, setArrayLengthEstabelecimentos] = useState("");
  const [arrayLengthComissao, setArrayLengthComissao] = useState("");
  const [arrayLengthNaoPg, setArrayLengthNaoPg] = useState("");
  const [arrayLengthEstorno, setArrayLengthEstorno] = useState("");

  const [arrayAmanda, setArrayAmanda] = useState("");
  const [arrayArthur, setArrayArthur] = useState("");
  const [arrayBruna, setArrayBruna] = useState("");
  const [arrayKaique, setArrayKaique] = useState("");
  const [arrayKesley, setArrayKesley] = useState("");
  const [arrayRafael, setArrayRafael] = useState("");
  const [arrayThales, setArrayThales] = useState("");

  const [loading, setLoading] = useState(true)

  let navigate = useNavigate();

  useEffect(() => {
    const dadosEstabelecimentos = [];
    db.collection("estabelecimentos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosEstabelecimentos.push({
            id: doc.id,
          });
        });
        setArrayLengthEstabelecimentos(dadosEstabelecimentos.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosComissoesPagas = [];
    db.collection("estabelecimentos")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosComissoesPagas.push({
            id: doc.id,
          });
        });
        setArrayLengthComissao(dadosComissoesPagas.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosNaoPg = [];
    db.collection("estabelecimentos")
      .where("comissao_paga", "==", "Não")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosNaoPg.push({
            id: doc.id,
          });
        });
        setArrayLengthNaoPg(dadosNaoPg.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosEstorno = [];
    db.collection("estabelecimentos")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosEstorno.push({
            id: doc.id,
          });
        });
        setArrayLengthEstorno(dadosEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosAmanda = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Amanda")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosAmanda.push({
            id: doc.id,
          });
        });
        setArrayAmanda(dadosAmanda.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosArthur = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Arthur")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosArthur.push({
            id: doc.id,
          });         
        });
        setArrayArthur(dadosArthur.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosBruna = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Bruna")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosBruna.push({
            id: doc.id,
          });
        });
        setArrayBruna(dadosBruna.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKaique = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kaique")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKaique.push({
            id: doc.id,
          });
        });
        setArrayKaique(dadosKaique.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKesley = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kesley")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKesley.push({
            id: doc.id,
          });
        });
        setArrayKesley(dadosKesley.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosRafael = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Rafael")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosRafael.push({
            id: doc.id,
          });
        });
        setArrayRafael(dadosRafael.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosThales = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Thales")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosThales.push({
            id: doc.id,
          });
        });
        setArrayThales(dadosThales.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  if (loading) {
    return <h1 style={{ marginLeft: 700, marginTop: 300}} >Loading...</h1>;
  }

  const dataChart1 = [
    ["Pagamentos e estornos", "Quantidade"],
    ["Pagos", arrayLengthComissao],
    ["Estornos", arrayLengthEstorno],
  ];

  const dataChart2 = [
    ["Estabelecimentos", "Por executivo de contas"],
    ["Amanda", arrayAmanda],
    ["Arthur", arrayArthur],
    ["Bruna", arrayBruna],
    ["Kaique", arrayKaique],
    ["Kesley", arrayKesley],
    ["Rafael", arrayRafael],
    ["Thales", arrayThales],
  ];

  const options = {
    backgroundColor: "#E5E5E5",
    height: 350,
  };

  return (
    <Box>
      <Dashboard />
      <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 31.5, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: -3 }}>
          <Card
            sx={{
              width: 290,
              height: 175,
              marginLeft: -1,
              backgroundColor: "#22aae2",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white" }}>
                <StoreIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Estabelecimentos
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "yellow" }}
                color="text.secondary"
              >
                Todos estabelecimentos cadastrados
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginLeft: 25.5,
                  marginTop: -0.9,
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {arrayLengthEstabelecimentos > 0
                  ? arrayLengthEstabelecimentos
                  : "0"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate("/estabelecimentos");
                }}
                size="small"
                sx={{
                  marginLeft: 18,
                  marginTop: -3,
                  color: "yellow",
                  fontWeight: 600,
                }}
              >
                Ver detalhado
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              width: 290,
              height: 175,
              marginLeft: 1,
              backgroundColor: "#00d313",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white" }}>
                <AttachMoneyIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Pagamentos
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "yellow" }}
                color="text.secondary"
              >
                Todas comissões pagas
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  marginLeft: 25.5,
                  marginTop: 3.8,
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {arrayLengthComissao > 0 ? arrayLengthComissao : "0"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate("/comissoes-pagas");
                }}
                size="small"
                sx={{
                  marginLeft: 18,
                  marginTop: -3,
                  color: "yellow",
                  fontWeight: 600,
                }}
              >
                Ver detalhado
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              width: 290,
              height: 175,
              marginLeft: 1,
              color: "#fff",
              backgroundColor: "#f18f00",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                <MoneyOffIcon sx={{ marginRight: 1, marginBottom: -0.3 }} />
                Não pagas
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "yellow" }}
                color="text.secondary"
              >
                Todas comissões não pagas
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  marginLeft: 25.5,
                  marginTop: 3.8,
                  fontWeight: 600,
                  color: "white", 
                }}
              >
                {arrayLengthNaoPg > 0 ? arrayLengthNaoPg : "0"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate("/nao-pagas");
                }}
                size="small"
                sx={{
                  marginLeft: 18,
                  marginTop: -3,
                  color: "yellow",
                  fontWeight: 600,
                }}
              >
                Ver detalhado
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              width: 290,
              height: 175,
              marginLeft: 1,
              color: "#fff",
              backgroundColor: "red",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                <MoneyOffIcon sx={{ marginRight: 1, marginBottom: -0.3 }} />
                Estornos
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "yellow" }}
                color="text.secondary"
              >
                Todos estornos realizados
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  marginLeft: 25.5,
                  marginTop: 3.8,
                  fontWeight: 600,
                  color: "white"  
                }}
              >
                {arrayLengthEstorno > 0 ? arrayLengthEstorno : "0"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  navigate("/estornos");
                }}
                size="small"
                sx={{
                  marginLeft: 18,
                  marginTop: -3,
                  color: "yellow",
                  fontWeight: 600,
                }}
              >
                Ver detalhado
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
          <Card
            sx={{
              width: 588.5,
              height: 380,
              marginLeft: -1,
              marginTop: 5,
              backgroundColor: "#E5E5E5",
            }}
          >
            <CardContent sx={{ backgroundColor: "#E5E5E5" }}>
              <Typography variant="h5" component="div" sx={{ marginLeft: 7.2 }}>
                <AttachMoneyIcon sx={{ marginRight: 1, marginBottom: -0.3 }} />
                Relação entre pagamentos e estornos
              </Typography>
              <Chart
                chartType="PieChart"
                data={dataChart1}
                options={options}
                width={"100%"}
                height={"400px"}
              />
            </CardContent>
            <CardActions></CardActions>
          </Card>

          <Card
            sx={{
              width: 588.5,
              height: 380,
              marginLeft: 1,
              marginTop: 5,
              backgroundColor: "#E5E5E5",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ marginLeft: 4.5 }}>
                <StoreIcon sx={{ marginRight: 1, marginBottom: -0.3 }} />
                Estabelecimentos por executivo de contas
              </Typography>

              <Chart
                chartType="PieChart"
                data={dataChart2}
                options={options}
                width={"100%"}
                height={"400px"}
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{marginTop: 5}}>
          <footer>
            <p>Developed by <a href="mailto:lucas.gomide@xxpay.com.br">Lucas Gomide</a></p>
          </footer>
        </Box>
      </Box>
    </Box>
  );
}
