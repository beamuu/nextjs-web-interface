import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Body from "../components/Body";
import Nav from "../components/Nav";

const Home: NextPage = () => {
    return (
        <Container maxW="1700px" p="30px" minH="100vh">
            <Nav />
            <Body />
        </Container>
    );
};

export default Home;
