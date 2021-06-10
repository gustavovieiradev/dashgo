import { Box, Button, Checkbox, Flex, Heading, Icon, List, ListItem, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6" >
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" /> }>
              Criar novo
            </Button>
          </Flex>
          {isWideVersion && (
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px="6" color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  <Th>Data de cadastro</Th>
                  <Th w="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Gustavo Vieira</Text>
                      <Text fontSize="sm" color="gray.300">gustavovieira992@gmail.com</Text>
                    </Box>
                  </Td>
                  <Td>04 de abril de 2021</Td>
                  <Td>
                  <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="20" /> }>
                    Editar
                  </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          )}
          {!isWideVersion && (
            <List spacing={8} w="100%">
              <ListItem borderBottomColor="gray.700" borderBottomWidth={1} pb={6}>
                <Text fontWeight="bold">Gustavo Vieira</Text>
                <Text fontSize="sm" color="gray.300">gustavovieira992@gmail.com</Text>
                <Text fontSize="sm" color="gray.300">04 de abril de 2021</Text>
                <Button mt="3" as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="20" /> }>
                  Editar
                </Button>
              </ListItem>
              <ListItem borderBottomWidth={1} pb={6} borderBottomColor="gray.700">
                <Text fontWeight="bold">Gustavo Vieira</Text>
                <Text fontSize="sm" color="gray.300">gustavovieira992@gmail.com</Text>
                <Text fontSize="sm" color="gray.300">04 de abril de 2021</Text>
                <Button mt="3" as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="20" /> }>
                  Editar
                </Button>
              </ListItem>
            </List>
          )}
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );

}