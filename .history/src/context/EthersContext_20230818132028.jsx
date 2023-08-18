import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const EthersContext = createContext();

export const EthersProvider = ({ children }) => {

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [wallet, setWallet] = useState(null);

    return (
        <EthersContext.Provider value={{}}>
            {children}
        </EthersContext.Provider>
    )
}

export const useEthers = () => useContext(EthersContext);