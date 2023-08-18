import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const EthersContext = createContext();

export const EthersProvider = ({ children }) => {

    return (
        <EthersContext.Provider value={{}}>
            {children}
        </EthersContext.Provider>
    )
}

export const useEthers = () => useContext(EthersContext);