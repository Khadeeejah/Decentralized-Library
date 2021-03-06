import React from 'react';
import { Box, Text, Avatar, Button, Tabs, TabList ,Tab } from '@chakra-ui/react';
import Logo from "./Logo";
import { ellipseAddress } from '../utils/ConnectionUtilities'
import Link from 'next/link';

const Header = ({web3Provider, address, disconnect, connect, network}) => {
    return (
    <Box 
        px={5}
        py={3} 
        w="100vw" 
        bg="linear-gradient(225deg, #192038 0%, #2E3A59 100%)"
        position="fixed"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="99"
      >
        <Box>
          <Text
            color="#fff"
            display="flex"
            alignItems="center"
            fontWeight="700"
            fontSize="40px"
          >
            <Logo /> &nbsp; OpenBooks{" "}
          </Text>
        </Box>

        <Tabs>
          <TabList>
              {address ? <></>: null}
              {web3Provider ? () => <></> : null}
            <Tab>
              {" "}
              <Link href="/Reader">
                <a>BUY A BOOK</a>
              </Link>
            </Tab>
            <Tab>
              {" "}
              <Link href="/Author">
                <a>SELL A BOOK</a>
              </Link>
            </Tab>
          </TabList>
        </Tabs>

        <Box>
          display="flex" justifyContent="space-around" pr={5}
          alignItems="center" 
          {address ? <Avatar name="Anonymous" src="dp.png" size="lg" /> : null}
          <Box display="flex" flexDirection="column" mt="-10px">
            {web3Provider ? (
              <Button
                color="linear-gradient(225deg, #192038 0%, #2E3A59 100%)"
                bg="white"
                ml={5}
                onClick={disconnect}
                mb={2}
              >
                {ellipseAddress(address)}
              </Button>
            ) : (
              <Button
                color="linear-gradient(225deg, #192038 0%, #2E3A59 100%)"
                bg="white"
                ml={5}
                onClick={connect}
                mb={2}
              >
                ???? Connect Wallet
              </Button>
            )}
            <sub
              style={{
                color: "orange",
                fontSize: "10px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              PolygonMumbai
            </sub>
          </Box>
    </Box>
        
      </Box>
    );
};

export default Header;
