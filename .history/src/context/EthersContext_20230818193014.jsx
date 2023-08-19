import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ETH_NULL_ADDRESS as ETHEREUM_NULL_ADDRESS } from '../constants.js'
import { CrazyFacesProvider, CrazyFacesMintingProvider, DaoProvider, TurtleCatCoinProvider, WrappedProvider } from './'

const EthersContext = createContext();

export const EthersProvider = ({ children }) => {

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [userWallet, setUserWallet] = useState(null);
    const [network, setNetwork] = useState(null);
    const [chainName, setChainName] = useState(null);

    const ETH_NULL_ADDRESS = ETHEREUM_NULL_ADDRESS;

    useEffect(() => {
        const ethersDataSetup = async () => {
            try {
                if (window.ethereum) {
                    const provider = new ethers.providers.Web3Provider(window.ethereum)
                    setProvider(provider)
                    const network = await provider.getNetwork()
                    console.log('EthersContext - network: ', network)
                    setNetwork(network)
                    setChainName(network ? network.name : null)

                    if (network.chainId === 5) {
                        try {
                            const signer = provider.getSigner()
                            setSigner(signer)
                            const userWallet = await signer.getAddress()
                            setUserWallet(userWallet)

                        } catch (err) {
                            if (err.code === 4001) {
                                // User rejected request
                                console.log("User rejected request");
                            } else {
                                console.error(err);
                            }
                        }
                    }
                }
            } catch (err) {
                if (err.message.includes('unknown account #0')) {
                    // Handle error due to MetaMask being locked
                    console.log('Metamask is locked. Please unlock and reconnect.');
                    setUserWallet(null);
                    setSigner(null);
                    setProvider(null);
                } else {
                    console.error('Error in EthersContext: ', err.message)
                }
            }
        }

        window.ethereum.on('accountsChanged', async (accounts) => {
            console.log('EthersContext accountsChanged entered on account change...')
            if (accounts.length === 0) {
                console.log('Please connect to MetaMask.');
                // alert('Your MetaMask is not connected anymore. Please unlock or reconnect.'); // display an alert
                console.error('MetaMask no longer connected... please reconnect...')
                // handle account disconnection...
                setUserWallet(null);
                setSigner(null);
            } else if (accounts[0] !== userWallet) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                console.log('EthersContext accountsChanged provider: ', provider)
                try {
                    const signer = await provider.getSigner();
                    const userWallet = await signer.getAddress();
                    console.log('EthersContext walletAddress updated to: ', userWallet)
                    setSigner(signer);
                    setUserWallet(userWallet);
                } catch (error) {
                    if (error.code === 4001) {
                        // User rejected request
                        console.log("User rejected request");
                        // Add some user-friendly notification logic here
                    } else {
                        console.error(error);
                        alert('Error when getting wallet address. Please check your MetaMask connection.');
                        setUserWallet(null);
                        setSigner(null);
                    }
                }

            }
        });

        // Initial setup
        ethersDataSetup();
    }, [])

    return (
        <EthersContext.Provider value={{
            provider,
            signer,
            userWallet,
            network,
            chainName,
            ETH_NULL_ADDRESS,
        }}>
            <DaoProvider provider={provider} signer={signer} userWallet={userWallet}>
                <WrappedProvider provider={provider} signer={signer} userWallet={userWallet}>
                    <CrazyFacesMintingProvider provider={provider} signer={signer} userWallet={userWallet}>
                        <CrazyFacesProvider provider={provider} signer={signer} userWallet={userWallet}>
                            <TurtleCatCoinProvider provider={provider} signer={signer} userWallet={userWallet}>
                                {children}
                            </TurtleCatCoinProvider>
                        </CrazyFacesProvider>
                    </CrazyFacesMintingProvider>
                </WrappedProvider>
            </DaoProvider>
        </EthersContext.Provider>
    )
}

export const useEthers = () => useContext(EthersContext);