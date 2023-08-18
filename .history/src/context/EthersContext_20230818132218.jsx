import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const EthersContext = createContext();

export const EthersProvider = ({ children }) => {

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        const getProvider = async () => {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                setProvider(provider)
            } catch (err) {
                console.error('Error loading web3 provider', err)
            }
        }
    }, [])

    return (
        <EthersContext.Provider value={{}}>
            {children}
        </EthersContext.Provider>
    )
}

export const useEthers = () => useContext(EthersContext);