import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Dashboard from "../components/Dashboard";
import { db } from "../firebase";

const Executivos = () => {
  const [arrayAmandaEc, setArrayAmandaEc] = useState([])
  const [arrayArthurEc, setArrayArthurEc] = useState([])
  const [arrayKaiqueEc, setArrayKaiqueEc] = useState([])
  const [arrayKesleyEc, setArrayKesleyEc] = useState([])
  const [arrayRafaelEc, setArrayRafaelEc] = useState([])
  const [arrayThalesEc, setArrayThalesEc] = useState([])
  const [arrayBrunaEc, setArrayBrunaEc] = useState([])

  const [arrayAmandaComissao, setArrayAmandaComissao] = useState([])
  const [arrayArthurComissao, setArrayArthurComissao] = useState([])
  const [arrayBrunaComissao, setArrayBrunaComissao] = useState([])
  const [arrayKaiqueComissao, setArrayKaiqueComissao] = useState([])
  const [arrayKesleyComissao, setArrayKesleyComissao] = useState([])
  const [arrayRafaelComissao, setArrayRafaelComissao] = useState([])
  const [arrayThalesComissao, setArrayThalesComissao] = useState([])

  const [arrayAmandaEstorno, setArrayAmandaEstorno] = useState([])
  const [arrayArthurEstorno, setArrayArthurEstorno] = useState([])
  const [arrayBrunaEstorno, setArrayBrunaEstorno] = useState([])
  const [arrayKaiqueEstorno, setArrayKaiqueEstorno] = useState([])
  const [arrayKesleyEstorno, setArrayKesleyEstorno] = useState([])
  const [arrayRafaelEstorno, setArrayRafaelEstorno] = useState([])
  const [arrayThalesEstorno, setArrayThalesEstorno] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dadosAmandaEc = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Amanda") // && "comissao_paga", "==", "Sim"
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosAmandaEc.push({
            id: doc.id,
          });
        });
        setArrayAmandaEc(dadosAmandaEc.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosAmandaComissao = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Amanda")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosAmandaComissao.push({
            id: doc.id,
          });
        });
        setArrayAmandaComissao(dadosAmandaComissao.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosArthurEc = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Arthur")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosArthurEc.push({
            id: doc.id,
          });
        });
        setArrayArthurEc(dadosArthurEc.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosArthurComissao = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Arthur")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosArthurComissao.push({
            id: doc.id,
          });
        });
        setArrayArthurComissao(dadosArthurComissao.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosBrunaEc = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Bruna")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosBrunaEc.push({
            id: doc.id,
          });
        });
        setArrayBrunaEc(dadosBrunaEc.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosBrunaComissao = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Bruna")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosBrunaComissao.push({
            id: doc.id,
          });
        });
        setArrayBrunaComissao(dadosBrunaComissao.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKaiqueEc = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kaique")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKaiqueEc.push({
            id: doc.id,
          });
        });
        setArrayKaiqueEc(dadosKaiqueEc.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKaiqueComissao = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kaique")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKaiqueComissao.push({
            id: doc.id,
          });
        });
        setArrayKaiqueComissao(dadosKaiqueComissao.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKesleyEstorno = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kesley")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKesleyEstorno.push({
            id: doc.id,
          });
        });
        setArrayKesleyEstorno(dadosKesleyEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosRafaelEstorno = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Rafael")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosRafaelEstorno.push({
            id: doc.id,
          });
        });
        setArrayRafaelEstorno(dadosRafaelEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosThalesEstorno = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Thales")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosThalesEstorno.push({
            id: doc.id,
          });
        });
        setArrayThalesEstorno(dadosThalesEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKesleyEc = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kesley")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKesleyEc.push({
            id: doc.id,
          });
        });
        setArrayKesleyEc(dadosKesleyEc.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosRafaelEc = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Rafael")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosRafaelEc.push({
            id: doc.id,
          });
        });
        setArrayRafaelEc(dadosRafaelEc.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosThalesEc = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Thales")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosThalesEc.push({
            id: doc.id,
          });
        });
        setArrayThalesEc(dadosThalesEc.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKaiqueEstorno = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kaique")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKaiqueEstorno.push({
            id: doc.id,
          });
        });
        setArrayKaiqueEstorno(dadosKaiqueEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosKesleyComissao = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Kesley")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosKesleyComissao.push({
            id: doc.id,
          });
        });
        setArrayKesleyComissao(dadosKesleyComissao.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosAmandaEstorno = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Amanda")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosAmandaEstorno.push({
            id: doc.id,
          });
        });
        setArrayAmandaEstorno(dadosAmandaEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosRafaelComissao = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Rafael")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosRafaelComissao.push({
            id: doc.id,
          });
        });
        setArrayRafaelComissao(dadosRafaelComissao.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosThalesComissao = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Thales")
      .where("comissao_paga", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosThalesComissao.push({
            id: doc.id,
          });
        });
        setArrayThalesComissao(dadosThalesComissao.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosArthurEstorno = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Arthur")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosArthurEstorno.push({
            id: doc.id,
          });
        });
        setArrayArthurEstorno(dadosArthurEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    const dadosBrunaEstorno = [];
    db.collection("estabelecimentos")
      .where("executivo", "==", "Thales")
      .where("estorno", "==", "Sim")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dadosBrunaEstorno.push({
            id: doc.id,
          });
        });
        setArrayBrunaEstorno(dadosBrunaEstorno.length);
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [])

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
          marginLeft: 30,
          marginTop: -1,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ color: "black", marginBottom: 3, marginTop: -1 }}
        >
          Executivos
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: 300,
              height: 165,
              backgroundColor: "#22aae2",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white", marginLeft: 0, marginTop: -0.5 }}>
                <AccountBoxIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Amanda
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Membro desde 11/06/2021
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estabelecimentos: {arrayAmandaEc > 0
                  ? arrayAmandaEc
                  : "0"}
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Comissões pagas: {arrayAmandaComissao > 0
                  ? arrayAmandaComissao
                  : "0"}
              </Typography>
              <Typography
                sx={{ mb: 0.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estornos: {arrayAmandaEstorno > 0
                  ? arrayAmandaEstorno
                  : "0"}
              </Typography>

            </CardContent>
          </Card>

          <Card
            sx={{
              width: 300,
              height: 165,
              marginLeft: 1,
              backgroundColor: "#22aae2",
            }}
          >
             <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white", marginLeft: 0, marginTop: -0.5 }}>
                <AccountBoxIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Arthur
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Membro desde 11/07/2022
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estabelecimentos: {arrayArthurEc > 0
                  ? arrayArthurEc
                  : "0"}
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Comissões pagas: {arrayArthurComissao > 0
                  ? arrayArthurComissao
                  : "0"}
              </Typography>
              <Typography
                sx={{ mb: 0.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estornos: {arrayArthurEstorno > 0
                  ? arrayArthurEstorno
                  : "0"}
              </Typography>

            </CardContent>
          </Card>

          <Card
            sx={{
              width: 300,
              height: 165,
              marginLeft: 1,
              color: "#fff",
              backgroundColor: "#22aae2",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white", marginLeft: 0, marginTop: -0.5 }}>
                <AccountBoxIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Bruna
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Membro desde 19/03/2021
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estabelecimentos: {arrayBrunaEc > 0
                  ? arrayBrunaEc
                  : "0"}
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Comissões pagas: {arrayBrunaComissao > 0
                  ? arrayBrunaComissao
                  : "0"}
              </Typography>
              <Typography
                sx={{ mb: 0.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estornos: {arrayBrunaEstorno > 0
                  ? arrayBrunaEstorno
                  : "0"}
              </Typography>

            </CardContent>
          </Card>
        </Box>

        {/* ----------------------------------------------------- */}

        <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2 }}>
          <Card
            sx={{
              width: 300,
              height: 165,
              backgroundColor: "#22aae2",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white", marginLeft: 0, marginTop: -0.5 }}>
                <AccountBoxIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Kaique
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Membro desde 28/03/2022
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estabelecimentos: {arrayKaiqueEc > 0
                  ? arrayKaiqueEc
                  : "0"}
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Comissões pagas: {arrayKaiqueComissao > 0
                  ? arrayKaiqueComissao
                  : "0"}
              </Typography>
              <Typography
                sx={{ mb: 0.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estornos: {arrayKaiqueEstorno > 0
                  ? arrayKaiqueEstorno
                  : "0"}
              </Typography>

            </CardContent>
          </Card>

          <Card
            sx={{
              width: 300,
              height: 165,
              marginLeft: 1,
              backgroundColor: "#22aae2",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white", marginLeft: 0, marginTop: -0.5 }}>
                <AccountBoxIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Kesley
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Membro desde 01/06/2022
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estabelecimentos: {arrayKesleyEc > 0
                  ? arrayKesleyEc
                  : "0"}
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Comissões pagas: {arrayKesleyComissao > 0
                  ? arrayKesleyComissao
                  : "0"}
              </Typography>
              <Typography
                sx={{ mb: 0.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estornos: {arrayKesleyEstorno > 0
                  ? arrayKesleyEstorno
                  : "0"}
              </Typography>

            </CardContent>
          </Card>

          <Card
            sx={{
              width: 300,
              height: 165,
              marginLeft: 1,
              color: "#fff",
              backgroundColor: "#22aae2",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white", marginLeft: 0, marginTop: -0.5 }}>
                <AccountBoxIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Rafael
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Membro desde 11/07/2022
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estabelecimentos: {arrayRafaelEc > 0
                  ? arrayRafaelEc
                  : "0"}
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Comissões pagas: {arrayRafaelComissao > 0
                  ? arrayRafaelComissao
                  : "0"}
              </Typography>
              <Typography
                sx={{ mb: 0.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estornos: {arrayRafaelEstorno > 0
                  ? arrayRafaelEstorno
                  : "0"}
              </Typography>

            </CardContent>
          </Card>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", marginTop: 2, alignContent: 'center', justifyContent: 'center', alignItems: "center" }}>
        <Card
            sx={{
              width: 300,
              height: 165,
              color: "#fff",
              backgroundColor: "#22aae2",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: "white", marginLeft: 0, marginTop: -0.5 }}>
                <AccountBoxIcon
                  sx={{ marginRight: 1, marginBottom: -0.3, color: "white" }}
                />
                Thales
              </Typography>
              <Typography
                sx={{ mb: 1.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Membro desde 11/07/2022
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estabelecimentos: {arrayThalesEc > 0
                  ? arrayThalesEc
                  : "0"}
              </Typography>
              <Typography
                sx={{ color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Comissões pagas: {arrayThalesComissao > 0
                  ? arrayThalesComissao
                  : "0"}
              </Typography>
              <Typography
                sx={{ mb: 0.5, color: "white", marginLeft: 0 }}
                color="text.secondary"
              >
                Estornos: {arrayThalesEstorno > 0
                  ? arrayThalesEstorno
                  : "0"}
              </Typography>

            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Executivos;
