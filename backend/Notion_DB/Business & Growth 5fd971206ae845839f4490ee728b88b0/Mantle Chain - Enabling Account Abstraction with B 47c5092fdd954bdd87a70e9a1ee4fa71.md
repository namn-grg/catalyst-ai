# Mantle Chain - Enabling Account Abstraction with Biconomy

# About Biconomy

Biconomy is a web3 infrastructure company that strives to simplify the blockchain experience and bring the power of decentralized technology to the masses. Our mission is to onboard the next billion users by making blockchain technology accessible, user-friendly, and efficient.

Our robust SDK and APIs are live on major platforms including Ethereum, Polygon, BNB Chain, Gnosis Chain, Avalanche, Optimism, Arbitrum, Fantom, and Moonbeam. With over four years of proven performance, we have established partnerships with over 300 dApps, including industry giants like JPMorgan, 100 Thieves, Dolce & Gabbana, and Mercedes Benz, as well as top DeFi and NFT platforms such as DYDX, Perpetual Finance, Curve Finance, Aavegotchi, Decentraland, Sandbox, Animoca Brands, and Zed Run.

Biconomy currently processes over 100,000 daily transactions and has successfully relayed more than 31 million transactions to date, catering to a diverse user base of over 3 million individuals.

Our latest SDK, the Biconomy Account Abstraction SDK, revolutionizes user onboarding by leveraging EIP-4337 and Smart Contract Wallets. This SDK enables developers to design a fully personalized transaction journey for their users, from creating a wallet using social logins to batching multiple transactions and submitting them as a single transaction. This results in an unparalleled user experience that is both seamless and efficient.

# Use cases unlocked with Biconomy SDKs

---

The Biconomy SDK simplifies blockchain development for dApp developers, providing an array of features that offer a seamless Web2-like experience to end-users. Once enabled within the Mantle Chain, developers can build a wide range of use cases, from token transfers to smart contract interactions. The SDK is secure and reliable, ensuring dApps are safe from attacks and hacks. It is an essential tool for developers looking to build superior dApps on the Mantle blockchain.

1. **Social Sign-in** - Even Web 2.0 users can use the dApp with just an email secured by multi-party computation (MPC). This means that users who are not familiar with crypto can still use the dApp without much hassle.
2. **Fiat on-ramps and checkouts** - Allow users to buy crypto or NFTs with Wire Transfers or Credit Cards. This makes it easier for users to use their fiat money to buy crypto, without having to go through the traditional and sometimes complicated crypto purchase process.
3. **Gas-less transactions** - Improve user onboarding and engagement with a gasless flow. With Biconomy, users can enjoy a gasless flow, making transaction execution faster and more straightforward.

![Near%20Protocol%20-%20Enabling%20Account%20Abstraction%20with%20%20d58ea888839c4e9787c631e664f3e7b5/Untitled.png](Near%20Protocol%20-%20Enabling%20Account%20Abstraction%20with%20%20d58ea888839c4e9787c631e664f3e7b5/Untitled.png)

1. **Transactions and gas payments in non-native tokens** - Allow users to pay for transactions and gas in your token or any other ERC20 token. This feature makes it easier for users to have a seamless transaction experience without having to go through the hassle of exchanging their tokens into native tokens.
2. **Transaction Batching** - Group common transactions to offer gas-light execution and one-click experiences. With Biconomy, common transactions can be batched to offer a gas-light execution that saves users gas fees, thereby making the transaction process more efficient.
    
    ![Near%20Protocol%20-%20Enabling%20Account%20Abstraction%20with%20%20d58ea888839c4e9787c631e664f3e7b5/Untitled%201.png](Near%20Protocol%20-%20Enabling%20Account%20Abstraction%20with%20%20d58ea888839c4e9787c631e664f3e7b5/Untitled%201.png)
    
3. **Cross-chain Message and Token transfers** - You can execute any contract on Chain B from Chain A without asking the user to change the RPC provider. This feature allows for seamless cross-chain transfers without any need for the user to change the RPC provider.
4. **Social Recovery** - If you lose your private key, you can set up a recovery mechanism. With Biconomy, users can be assured of the safety of their funds, as a recovery mechanism is put in place in case of a lost private key.
5. **Custom Signature Schemes & Biometric Passkeys** - Biometric logins, BLS signature aggregation, and quantum-resistant digital signatures such as Schnorr can be supported with Biconomy. Users can enjoy a more secure and robust digital signature scheme that is simpler and less susceptible to attack vectors.
6. **Session Keys** - You can create a login session for your user, within which the user can use the dApp without repeatedly signing in. This feature makes it more convenient for users to use dApps without having to sign in repeatedly.
7. **Limits, Allowlists, and Access Control** - You can apply custom transaction execution limits and whitelist/blacklist addresses at the contract level. With Biconomy, users can enjoy more flexibility and control over their transactions, allowing them to customize their transaction execution limits and whitelist or blacklist addresses at the contract level.

> We offer 100% guaranteed transaction confirmations, no failures ever. Our infrastructure works 24x7 to ensure your users are delighted.
> 

# Case Studies with other dApps that we helped

---

- J.P. Morgan conducted the first deposit-backed stablecoin transaction with the help of Biconomy. [Link to Case Study](https://www.biconomy.io/post/how-j-p-morgan-conducted-the-first-deposit-backed-stablecoin-transaction-with-biconomy)
- Biconomy facilitated the onboarding of 640K new users onto Web 3.0 for 100Thieves, UNXD, and IndiGG. We helped the dApps to offer seamless NFT claiming to onboard users. [Link to Case Study](https://www.biconomy.io/post/how-we-added-640-000-new-web3-users-with-3-nft-drops)
- Zedrun, a game on Polygon PoS, increased its daily active users by generating more engagement with existing users. Biconomy helped them make the experience gasless. [Link to Case Study](https://www.biconomy.io/post/how-biconomy-helped-zed-run-get-more-active-players)
- Decentraland users saved over $32,000 in gas costs in the metaverse, while DYDX helped traders save $738K in gas fees. [Link to Decentraland Case Study](https://www.biconomy.io/post/how-decentraland-users-saved-over-32-000-with-gasless), [Link to DYDX Case Study](https://www.biconomy.io/post/how-dydx-traders-saved-738k-in-gas-fees)

# Our roadmap and Go-live timelines for Mantle Chain

---

Our goal is to revolutionize the UX for Web3.0 dApps by implementing Account Abstraction, which bridges the gap between traditional Web2 applications and the blockchain ecosystem. We use EIP-4337 and EIP-2771 to create a seamless, user-friendly experience that lowers the barriers to entry for new users and encourages widespread adoption.

EIP-4337 introduces Smart Wallets, which allow users to interact with the blockchain using familiar operations. This approach simplifies the user experience by abstracting away the complexities of the blockchain and presenting a streamlined experience similar to traditional web applications. Bundlers and paymasters ensure that transactions are processed efficiently and securely, reducing network congestion and enhancing transaction throughput.

EIP-2771 complements EIP-4337 by enabling gasless transactions through relayers for EOA’s (without using Smart Contract wallets), which facilitate transactions on behalf of users and cover associated gas fees. This approach eliminates the need for users to manage gas fees, making it more accessible for those unfamiliar with blockchain technology. 

Together, these technologies make decentralized applications more user-friendly and promote widespread adoption.

## Tech Stack for Gasless SDK with Relayers using EIP-2771

---

Our goal is to create a comprehensive meta-transaction system that runs efficiently on Mantle. 

Gasless SDK will include the following components - 

**1. Scalable relayer infrastructure:** Develop a relayer engine that is auto-scalable, secure, and provides low latency and high throughput for relaying blockchain transactions. This engine will include a relayer manager, transaction listener, internal nonce tracker, and long-pending transaction handler.

**2. Client-side SDK:** Create a client-side SDK that makes it easy for developers to leverage our relayer infrastructure for meta transactions.

**3. Smart contracts for meta-transaction use cases:** Develop smart contracts that enable different meta-transaction use cases on Mantle, such as gasless transactions.

![Celo%20-%20Enabling%20Account%20Abstraction%20with%20Biconomy%20f99af9f57a1949cabbb740c7308f4b43/Untitled.png](Celo%20-%20Enabling%20Account%20Abstraction%20with%20Biconomy%20f99af9f57a1949cabbb740c7308f4b43/Untitled.png)

**4. Establishing node connectivity:** Set up RPC node connectivity to connect to the blockchain to relayers for read and write calls.

**5. Developer dashboard:** Provide a developer dashboard that offers granular control over meta transactions and detailed statistics, allowing developers to perform analytics on usage data.

**6. Establishing meta-transaction standards:** Develop and adhere to meta-transaction standards to ensure interoperability across different dApps.

**7. Creating robust documentation:** Provide clear and comprehensive documentation for developers on how to integrate our infrastructure and use meta transactions.

**8. Through Testing to optimize the system:** We will continuously test and optimize the system to ensure that it runs efficiently and provides a seamless user experience.

### **Gasless SDK Go-live Timelines (2 months)**

1. Core Development (3 - 4 weeks)
    - Code development (Relayer and SDK backend)
    - SDK Optimisation for compatibility with Mantle
    - Development of service and utility modules and interfaces
    - Dashboard Development
2. Product Testing (3 -4 weeks)
    - Unit testing
    - Integrated Testing
3. Buffer time (1-2 weeks)

## Tech Stack for Biconomy AA SDK with Smart Wallets and Bundlers using EIP 4337

---

EIP-4337 Account Abstraction introduces a more flexible and efficient transaction processing system that separates the execution of transactions from the management of accounts. It promotes greater innovation and adoption by providing a standardized interface for third-party developers to easily integrate with the Ethereum network. It enhances security, scalability, and privacy features, enabling the support of new use cases and applications. 

Our stack will include the following components -

1. **Smart wallets** -  Programmable and self-custodial wallets that leverage smart contracts to manage user funds and assets on the blockchain. They offer advanced features, such as customizable security measures, multi-signature capabilities, and seamless integration with various decentralized applications (dApps).
2. **Bundlers:** Implement nodes that listen to the **`UserOperation`** mempool, bundle multiple **`UserOperations`** together, and send the bundle to the EntryPoint contract for execution. Bundlers ensure efficient transaction processing and fee-prioritization.
3. **EntryPoint Contract:** Develop a global singleton contract that serves as the universal entry point for all ERC-4337 compliant smart contract wallets. This simplifies wallet logic and ensures safety in the transaction process.
4. **Off-chain Architecture:** Integrate an alternative UserOps mempool to coexist with the standard mempool, enabling a smooth interaction between bundlers, block-building nodes, and the EntryPoint contract.
5. **Aggregators:** Introduce helper contracts that validate aggregated **`UserOperation`** signatures, enhancing efficiency and scalability in transaction processing whilst reducing cost. 
6. **Paymasters:** Develop a system that sponsors transactions for users, enabling various use cases such as fee subsidies, ERC-20 token payments, off-chain payment methods, and on-chain credit services.
7. **Node Connectivity:** Establish a robust connection to the blockchain for efficient read and write calls.
8. **Developer Tools & Documentation:** Provide clear and comprehensive documentation along with essential tools to help developers integrate EIP-4337 infrastructure and leverage its features effectively.
9. **System Testing & Optimisation:** Continuously test and refine the system to ensure optimal performance, security, and a smooth user experience.
10. **Developer Dashboard:** We will offer a developer dashboard that provides granular control over user operations, paymasters, and bundlers, as well as detailed statistics. This will allow developers to have a single view for all aspects of their work.
    
    ![Untitled](Near%20Protocol%20-%20Enabling%20Account%20Abstraction%20with%20%20d58ea888839c4e9787c631e664f3e7b5/Untitled%202.png)
    

### **Account Abstraction SDK Go-live Timelines (5 months)**

1. Development (10 - 12 weeks)
    - Code development for AA backend and UserOps
    - SDK Changes for compatibility with Mantle
    - Development of SDK Helper Modules
    - Dashboard Development
2. Product Testing (4 - 6 weeks)
    - Unit testing
    - Integration Testing
3. Buffer time (1-2 weeks)

# Product Pricing

---

For using the Biconomy Gasless SDK, our relayers will charge a 12% premium on all transactions. The dApp or developer does not need to pay this fee separately; instead, the premium will be settled from the same pool as the gas costs, which are covered by gas tokens deposited in our gas tank. This will be done on a pay-as-you-go basis, per transaction.

For pricing details on the Account Abstraction SDK, please refer to [this page](Biconomy%20SDK%20Pricing%206f4537a645af4b8985f4d43f2b045865.md).

# Integration/Support Grant

---

To successfully deploy the SDK on the Mantle Chain in the coming months and to sustain it, we require an estimated grant of **$500,000 which can be disbursed in BIT tokens or stablecoins.** 

These funds will be allocated towards enabling our products on the Mantle Chain and running adoption campaigns after going live. 

To support the development of the SDK, we will assemble a team of experienced developers who will work full-time on the integration and support. This team includes:

1. Two Backend Developers: Responsible for building the scalable backend and the client-side SDK for easy integration.
2. Two Smart Contract Developers: Responsible for deploying smart contracts tailored to different use cases, such as gasless transactions and ERC20 token transfers.
3. One Quality Assurance Developer: Responsible for ensuring that the SDK runs efficiently and provides a seamless user experience.

With a dedicated team of developers, we can ensure that the SDK is built to the highest standards and is optimized for the Mantle Chain. With the grant funding and this team, we are confident that we can successfully deploy the SDK on the Mantle Chain and drive widespread adoption of Account Abstraction SDK.

# Co-marketing and Business Development Support

---

To raise awareness and adoption of Biconomy SDK on the Mantle Chain, we need support from the Mantle team for business development, marketing, and community evangelism which includes

1. Developing regular joint announcements on all social channels to keep the community informed about the benefits of the SDK and its capabilities on the Mantle Chain.
2. Connecting us with quality projects building on the Mantle Chain to build a strong community and showcase the potential of the SDK.
3. Adding SDK providers to the official developer documentation of the Mantle Chain to provide developers with a clear understanding of how to integrate the SDK into their dApps and the benefits it can offer.
4. Prioritizing access and coverage at all offline events and branding opportunities to showcase the advantages of the SDK and how it can benefit developers.
5. Hosting a Twitter AMA to discuss the benefits and use cases of the SDK, providing a platform for developers and users to ask questions and learn more about it.
6. Writing a blog post or case study highlighting the potential of the SDK integration for the Mantle ecosystem, outlining real-world examples of successful use cases.

Through these initiatives, we can promote the integration of the SDK into the Mantle Chain, educate dApps and developers about its benefits, and build a strong community committed to the success of the Mantle Chain, ultimately driving widespread adoption.