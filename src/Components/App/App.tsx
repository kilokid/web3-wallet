import React from 'react';

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import Header from '../Header/Header';
import WalletInfo from '../WalletInfo/WalletInfo';

import './App.scss';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: '****' }), publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
})

function App() {
  return (
    <WagmiConfig config={config}>
      <div className="App">
        <Header />
        <WalletInfo />
      </div>
    </WagmiConfig>
  );
}

export default App;
