import {
    Box,
    Center,
    Grid,
    GridItem,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { FC } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { SearchIcon } from "@chakra-ui/icons";
const Nav: FC = () => {
    return (
        <Box h="auto">
            <Grid templateColumns="repeat(7, 1fr)" gap={6} h="auto">
                <GridItem colSpan={1}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg" w="50px"/>
                </GridItem>
                <GridItem colSpan={3}>
                    <HStack spacing="10px">
                        <InputGroup alignItems="center" d="flex">
                            <InputLeftElement
                                h="48px"
                                pointerEvents="none"
                                color="gray.500"
                                fontSize="1.4rem"
                                children={<SearchIcon ms="20px"/>}
                            />
                            <Input size="lg" rounded="full" variant="filled" />
                        </InputGroup>

                        <IconButton
                            aria-label="filter"
                            rounded="full"
                            border="none"
                            size="lg"
                        >
                            <IoOptionsOutline />
                        </IconButton>
                    </HStack>
                </GridItem>
                <GridItem colSpan={3}>
                    <HStack spacing="10px" justifyContent="end">
                        <IconButton
                            aria-label="filter"
                            rounded="full"
                            border="none"
                            size="lg"
                        >
                            <IoOptionsOutline />
                        </IconButton>
                        <IconButton
                            aria-label="filter"
                            rounded="full"
                            border="none"
                            size="lg"
                        >
                            <IoOptionsOutline />
                        </IconButton>
                        <IconButton
                            aria-label="filter"
                            rounded="full"
                            border="none"
                            size="lg"
                        >
                            <IoOptionsOutline />
                        </IconButton>
                    </HStack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Nav;
