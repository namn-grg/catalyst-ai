# OKX Chain - Enabling Account Abstraction with Biconomy

# About Biconomy

Biconomy is a web3 infrastructure company that helps developers create a frictionless user experience to onboard the next billion users. We solve on-chain and cross-chain user experience problems by abstracting blockchain complexities for end users.

Our platform is already live on Ethereum, Polygon, Binance Smart Chain, Gnosis Chain, Avalanche, Optimism, Arbitrum, Fantom, and Moonbeam. Biconomy has been operational for over three years and currently supports 300+ dApps, including JPMorgan, Mercedes Benz, DYDX, Perpetual Finance, Curve Finance, Aavegotchi, Decentraland, Sandbox, Animoca Brands, and Zedrun. We relay more than 100K gasless transactions daily and have successfully processed 31M+ transactions to date, servicing 3M+ unique users.

Our latest offering, the Biconomy SDK, builds on top of EIP4337 and Smart Contract Wallet, taking user onboarding to the next level. With this SDK, developers can create a fully customized transaction journey for their users, from creating a wallet using social logins to batching multiple transactions and submitting them to the chain as a single transaction. Our SDK also makes it easy to integrate the latest features, such as meta transactions and gas relays, to make the overall user experience more seamless and efficient.

# Our roadmap for OKX Chain

We aim to develop and support a meta-transaction system for the OKX Chain. This will require the establishment of relayer infrastructure and meta-transaction standards for OKX, as well as hosting all the required contracts and setting up a client-side SDK.

The relayer infrastructure consists of various components that handle different aspects of a blockchain transaction. These include creating the blockchain transaction in the correct format, signing the transaction with the correct relayer to avoid network delays, choosing the right gas price for the transaction, handling long-pending transactions, and keeping the latency to a minimum while relaying the transaction. This process involves:

### 1. **Scalable Relayer Engine**

The core component of the relayer infrastructure is a relayer engine that is auto-scalable, secure, and provides low latency and high throughput while relaying blockchain transactions. The following modules are required to create a scalable and efficient relayer engine:

1. **Relayer Manager**
This module manages multiple relayers being run in parallel. It takes care of balances across multiple relayers and auto-funds a relayer from one central account if it's running low on balance. If there are a lot of transactions queued in a relayer, it makes the relayer inactive, allowing transactions to flow out of the queue before making it active again. It ensures that the correct and optimized relayer is chosen for an incoming transaction.
2. **Transaction Listener**
This module keeps track of the state of each transaction being relayed, ensuring that the system stays updated regarding the state of each transaction relayed by the system. This module is useful for knowing whether a transaction is pending for an extended period in the mempool and if an action is needed to confirm the transaction.
3. **Internal Nonce Tracker**
To keep latency to a minimum, we need to avoid making RPC calls to the blockchain for every read operation. A single RPC call could take anywhere between 500ms to 1sec to respond. Also, while relaying the transaction from multiple relayers, each transaction nonce has to be in the correct order. The internal nonce tracker returns the correct nonce for each relayer whenever it is chosen to relay a given transaction.
4. **Long Pending Transaction Handler**
Gas prices are not fixed and are driven by the market and miners. Even if the gas price was chosen very precisely, gas prices can increase while relaying the transaction, resulting in the transaction being stuck in the mempool for a long time. This module ensures that no transaction is in the mempool for very long. If it happens, the module replaces the transaction with a higher gas price.

### 2. **Client SDK for Easy Integration**

A client-side SDK will allow developers to use the relayer infrastructure to leverage meta transactions easily. The goal is to make it easy for developers to integrate the solution in less than an hour.

### 3. **Smart Contracts**

Biconomy will deploy a set of smart contracts that will enable different meta-transaction use cases on OKX, such as gasless transactions and token transfer handlers that'll allow use cases like approve and transferFrom for ERC20 standards like tokens.

### 4. **Node Connectivity**

Biconomy needs to be connected to the blockchain for read and write calls. Biconomy needs to connect to multiple nodes hosted by others or, if no node service is available, run blockchain-specific nodes.

### 5. **Developer Dashboard**

A developer dashboard is required for granular control of meta transactions and showing statistics for developers to do analytics on top of the usage data. Developers will have the option to limit meta transaction usage per dapp, per method, and user. Limits can be put based on gas usage or the number of transactions.

# Use cases that Biconomy can unlock for dApps

Gasless transactions from the Biconomy SDK allow dApp developers to absorb gas fees, providing end-users with a seamless Web2-like experience. After enabling this feature within OKX Chain, various compelling on-chain use cases can be utilized, enabling unique services to be built on top. Any dApp will be able to offer a smooth UX without requiring crypto knowledge or gas payments at each step. The list of benefits includes:

1. Seamless acquisition and onboarding of new users. For example, 100Thieves, UNXD, and IndiGG onboarded 640K new users onto Web3.0 to claim NFTs ([https://twitter.com/biconomy/status/1538848702260969473](https://twitter.com/biconomy/status/1538848702260969473)).
2. Increased engagement with existing users and generating product love. For example, the Zedrun game increased its daily active users by 40% ([https://medium.com/biconomy/how-zed-run-provided-over-212k-in-gas-savings-thousands-of-cross-chain-transfers-with-biconomy-9791d3ee65d8](https://medium.com/biconomy/how-zed-run-provided-over-212k-in-gas-savings-thousands-of-cross-chain-transfers-with-biconomy-9791d3ee65d8)).
3. 100% guaranteed transaction confirmations without any failures. Our infrastructure works 24x7 to ensure your users are delighted ([https://status.biconomy.io/status](https://status.biconomy.io/status)).
4. Tremendous savings on gas spending. For example, Decentraland saved 10% on gas costs ([https://medium.com/biconomy/how-decentraland-users-saved-over-32-000-with-gasless-6e5557079e61](https://medium.com/biconomy/how-decentraland-users-saved-over-32-000-with-gasless-6e5557079e61)) in its metaverse.

In the second phase, we will start working on supporting the new SDK on OKX Chain, unlocking even more use cases, such as:

1. Social Sign-in - Even Web2.0 users can simply use the dApp with just an email secured by multi-party computation (MPC).
2. Fiat on-ramps and checkouts - Allow your users to buy crypto or NFTs with Wire Transfers or Credit cards.
3. Gas-less transactions - Improve user onboarding and engagement with a gasless flow.
4. Transactions and gas payments in non-native tokens - Allow users to pay for transactions and gas in their token or any other ERC20 token.
5. Transaction Batching - Group common transactions to offer gas-light execution and one-click experiences.
6. Cross-chain Message and Token transfers - You can execute any contract on Chain B from Chain A without asking the user to change the RPC provider.

# Go-live timelines

### PHASE 1 - Enabling gasless transactions on OKX Chain (2 months)

1. Development (3 - 4 weeks)
    - Code development
    - SDK Changes/ Compatibility with OKX
    - Development of Backend Modules
    - Dashboard Development
2. Product Testing (3 -4 weeks)
    - Unit testing
    - Integration Testing
3. Buffer time (1-2 weeks)

### PHASE 2 - Enabling AA SDK on OKX Chain (4 months)

1. Development (10 - 12 weeks)
    - Code development for AA backend and UserOps
    - SDK Changes/ Compatibility with OKX
    - Development of SDK Modules
    - Dashboard Development
2. Product Testing (3 - 4 weeks)
    - Unit testing
    - Integration Testing
3. Buffer time (1-2 weeks)

# Product Pricing

Biconomy relayers will charge a 12% premium on all settled transactions. This premium will be covered by the same pool of gas tokens that the dApp or developer deposits in our gas tank to cover the gas costs. The premium will be settled on a pay-as-you-go basis, per transaction.

# Required Support

### Community and Event Access

We require priority access and branding at online and offline events for OKC and OKX. This will help us gain the right attention for the SDK we are offering and enable us to reach and assist more developers building on the OKX Chain.

This can include, but is not limited to:

1. Priority access and coverage at all offline events, with branding provided without requiring extra sponsorships.
2. Access to the OKX Community in Southeast Asia via events, AMA’s, speaker sessions, and co-marketing.

### Co-Marketing and Business Development Support

We need strong support from the OKX marketing team to ensure that dApps and developers within the ecosystem are aware of Gasless being live on the chain. This can include, but is not limited to:

1. Regular joint announcements on all social channels.
2. Adding Biconomy to the official developer documentation of the OKX chain.
3. Connections to quality projects building on the OKX Chain.
4. A Twitter AMA to discuss the benefits and use cases of UX.
5. A blog post or case study highlighting how we can create more value for the OKX ecosystem.

---