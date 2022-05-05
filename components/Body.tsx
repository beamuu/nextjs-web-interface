import {
    Box,
    Center,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
    Flex,
} from "@chakra-ui/react";
import { FC } from "react";

export interface BaseInterface {
    children?: any;
}

const Body: FC = () => {
    const myMenu = [
        "2 Series",
        "3 Series",
        "4 Series",
        "5 Series",
        "6 Series",
        "7 Series",
        "X",
        "i",
        "M",
    ];
    return (
        <>
            <Grid templateColumns="repeat(7, 1fr)" gap={6} h="auto" mt="60px">
                <GridItem colSpan={1}>
                    <Heading size="md">MODELS</Heading>
                    {myMenu.map((e: string, i: number) => (
                        <Menu key={i}>{e}</Menu>
                    ))}
                </GridItem>
                <GridItem colSpan={6}>
                    <Grid
                        templateColumns="repeat(5, 1fr)"
                        templateRows="repeat(2, 200px)"
                        gap={10}
                        h="auto"
                        mt="60px"
                    >
                        <GridItem
                            colSpan={3}
                            rowSpan={2}
                            bgImage="url(https://s359.kapook.com/pagebuilder/977cea69-f4b8-489b-832e-ea306f82c19b.jpg)"
                            bgSize="cover"
                            bgPos="center"
                            rounded={20}
                            overflow="hidden"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                opacity={0.5}
                                bg="black"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            ></Box>
                            <Center
                                position="absolute"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            >
                                <Flex alignItems="center">
                                    <Image
                                        src="https://www.bmw.co.th/content/dam/bmw/common/images/logo-icons/BMW_i/BMW_i_100px.png.asset.1583221945801.png"
                                        w="50px"
                                    ></Image>
                                    <Heading ms="20px" size="lg" color="white">Electrify</Heading>
                                </Flex>
                            </Center>
                        </GridItem>
                        <GridItem
                            colSpan={2}
                            rowSpan={1}
                            bgImage="url(https://seriesmotor.com/wp-content/uploads/2022/01/1641996456_BMW-sales-grow-91-in-best-ever-year.jpg)"
                            bgSize="cover"
                            bgPos="center"
                            rounded={20}
                            overflow="hidden"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                opacity={0.5}
                                bg="black"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            ></Box>
                        </GridItem>
                        <GridItem
                            colSpan={2}
                            rowSpan={1}
                            bgImage="url(https://www.bmw.co.th/content/dam/bmw/common/all-models/x-series/x1/2019/inspire/bmw-x-series-x1-inspire-stage-desktop.jpg.asset.1558451912387.jpg)"
                            bgSize="cover"
                            bgPos="center"
                            rounded={20}
                            overflow="hidden"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                opacity={0.5}
                                bg="black"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            ></Box>
                            <Box
                                position="absolute"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                                p="20px"
                            >
                                <Heading color="white">THE X4</Heading>
                                <Text color="white">Start at 4,099,000</Text>
                            </Box>
                        </GridItem>
                    </Grid>
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        templateRows="repeat(2, 200px)"
                        gap={15}
                        h="auto"
                        mt="60px"
                    >
                        <GridItem
                            colSpan={1}
                            bgImage="url(https://www.bmw.co.th/content/dam/bmw/marketTH/common/Topics/offers-and-services/aftersales/BSI-desktop_02.jpg)"
                            bgSize="cover"
                            bgPos="center"
                            rounded={20}
                            overflow="hidden"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                opacity={0.5}
                                bg="gray.100"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            ></Box>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            bgImage="url(https://www.bmw.co.th/content/dam/bmw/common/all-models/i-series/series-overview/bmw-i-series-overview-page-ms-ix.jpg)"
                            bgSize="cover"
                            bgPos="center"
                            rounded={20}
                            overflow="hidden"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                opacity={0.5}
                                bg="#4599FE"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            ></Box>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            bgImage="url(https://www.bmw.co.th/content/dam/bmw/common/topics/fascination-bmw/BMWi/2016/bmw-i-visions/BMWi-i3-Brand-OPC-visions-futureinteraction-02.jpg)"
                            bgSize="cover"
                            bgPos="center"
                            rounded={20}
                            overflow="hidden"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                opacity={0.6}
                                bg="#031E49"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            ></Box>
                        </GridItem>
                        <GridItem
                            colSpan={1}
                            bgImage="url(https://www.thaidriving.com/wp-content/uploads/2020/11/bmw-m3-with-m-performance-part-doing-some-drifting-002.jpg)"
                            bgSize="cover"
                            bgPos="center"
                            rounded={20}
                            overflow="hidden"
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                opacity={0.4}
                                bg="#EE0405"
                                top={0}
                                bottom={0}
                                left={0}
                                right={0}
                            ></Box>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </>
    );
};

const Menu: FC<BaseInterface> = ({ children }) => {
    return <Text my="30px">{children}</Text>;
};

export default Body;
