import {
  useAccount,
  useEnsName,
} from 'wagmi'

export default function WalletInfo() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })

    if (isConnected) {
        return (
          <div>
            <div className="px-4 sm:px-0 mt-20">
              <h3 className="text-base font-semibold leading-7 text-white">Wallet Information</h3>
            </div>
            {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-white">address</dt>
                  <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">{ensName ? `${ensName} (${address})` : address}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-white">Connected to</dt>
                  <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">{connector?.name}</dd>
                </div>
              </dl>
            </div>
          </div>
        )
    }
    else {
        return <></>
    }
}
