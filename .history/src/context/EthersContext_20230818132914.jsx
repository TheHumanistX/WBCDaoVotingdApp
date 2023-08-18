import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const EthersContext = createContext();

export const EthersProvider = ({ children }) => {

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [userWallet, setUserWallet] = useState(null);
    const [network, setNetwork] = useState(null);
    const [chainName, setChainName] = useState(null);

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
                            
                        }
                    }
                }
            } catch (err) {
                console.error('Error loading web3 provider', err)
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