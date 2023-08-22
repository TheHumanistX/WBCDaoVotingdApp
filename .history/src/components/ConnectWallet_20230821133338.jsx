import { useEthers } from '../context'

const ConnectWallet = () => {

    const { userWallet } = useEthers();

    const handleConnectEthers = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                })
            } catch (err) {
                console.log(err)
            }
        } else {
            console.log('Please install MetaMask')
        }
    }

    const userWalletSlice = userWallet ? `${userWallet.slice(0, 6)}...${userWallet.slice(-4)}` : ''

    return (
        <>
            <button className='connect-wallet__button' onClick={handleConnectEthers}>{userWallet ? userWalletSlice : 'Connect'}</button>
        </>
    )

}
export default ConnectWallet
