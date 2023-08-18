import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ETH_NULL_ADDRESS as ETHEREUM_NULL_ADDRESS, ETH_NULL_ADDRESS} from '../constants.js'

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
                            const wallet = await signer.getAddress()
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

        ethersDataSetup();
    }, [])

    return (
        <EthersContext.Provider value={{}}>
            {children}
        </EthersContext.Provider>
    )
}

export const useEthers = () => useContext(EthersContext);