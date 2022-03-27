/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  Avatar,
  Center,
  Stack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

interface IProps {
  info: object;
  results: object | any;
}

const randomKontol = [
  {
    name: "babi",
    price: "Rp. 1.000.000",
  },
  {
    name: "lonte",
    price: "Rp. 2.000.000",
  },
  {
    name: "anjing",
    price: "Rp. 1.000.000",
  },
  {
    name: "sunat",
    price: "Rp. 1.000.000",
  },
];

const data = {
  datasets: [
    {
      datasets: [20, 50, 30],
    },
  ],
  labels: ["Savings", "Investment", "Needs"],
};

function Dashboard(props: IProps) {
  return (
    <Container minH="80vh" maxW="80vw">
      <Navbar />
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        <GridItem py="12" rowSpan={2} colSpan={1} boxShadow="lg">
          <Center>
            <Stack direction="column">
              <Avatar size="200px" src={props.results[0].picture.large} />
              <Text textAlign="center" fontWeight="bold" fontSize="xl">
                {props.results[0].name.title} {props.results[0].name.first}{" "}
                {props.results[0].name.last}
              </Text>
              <Text textAlign="center">
                {props.results[0].location.city},{" "}
                {props.results[0].location.state},{" "}
                {props.results[0].location.country}
              </Text>
            </Stack>
          </Center>
        </GridItem>
        <GridItem colSpan={2}>
          <Pie
            data={{
              labels: ["Savings", "Investment", "Needs"],
              datasets: [
                {
                  data: [20, 50, 30],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                  ],
                },
              ],
            }}
          />
        </GridItem>
        <GridItem p="4" rowSpan={2} colSpan={1} boxShadow="lg">
          <Text textAlign="justify">
            Finance is a term[note 1] for the management, creation, and study of
            money and investments.[1][2] Specifically, it deals with the
            questions of how an individual, company or government acquires money
            – called capital in the context of a business – and how they spend
            or invest that money.[3] Finance is then often divided into the
            following broad categories: personal finance, corporate finance, and
            public finance.[1] At the same time, and correspondingly, finance is
            about the overall "system"[1][2] i.e., the financial markets that
            allow the flow of money, via investments and other financial
            instruments, between and within these areas; this "flow" is
            facilitated by the financial services sector. Finance therefore
            refers to the study of the securities markets, including
            derivatives, and the institutions that serve as intermediaries to
            those markets, thus enabling the flow of money through the
            economy.[4] A major focus within finance is thus investment
            management – called money management for individuals, and asset
            management for institutions – and finance then includes the
            associated activities of securities trading and stock broking,
            investment banking, financial engineering, and risk management.
            Fundamental to these areas is the valuation of assets such as
            stocks, bonds, loans, but also, by extension, entire companies.
          </Text>
        </GridItem>
        <GridItem p="8" colSpan={2} boxShadow="lg">
          <Stack spacing="4" direction="column">
            {randomKontol.map((item) => (
              <Box
                borderRadius="20px"
                borderColor="gray.200"
                borderWidth="1px"
                p="4"
                key={item.name}
              >
                <Text fontWeight="black">{item.name}</Text>
                <Text color="red.600">- {item.price}</Text>
              </Box>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Dashboard;

export async function getServerSideProps() {
  const res = await fetch("https://randomuser.me/api/");
  const result = await res.json();

  return {
    props: {
      ...result,
    },
  };
}
