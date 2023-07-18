# Biconomy AA SDK x Polygon SuperNets

<aside>
💡 Boost user experience through account abstraction smart wallets and SDKs for Polygon Supernets.

</aside>

## Introduction

---

Biconomy simplifies the blockchain experience, making it accessible, user-friendly, and efficient. Our SDK and APIs are available on major platforms, including Ethereum and Polygon. We have over 300 dApp partnerships, including JPMorgan, Dolce & Gabbana, and Mercedes Benz, as well as top DeFi and NFT platforms like DYDX, Perpetual Finance, Curve Finance, Aavegotchi, Decentraland, Sandbox, Animoca Brands, and Zed Run.

## Benefits

---

- Smart accounts/wallets are available for all end-users. One smart account and its benefits work across all dApps on the Supernet.
- Gasless transactions for seamless execution
- Transactions and gas payments in non-native tokens for a seamless experience
- Transaction batching for efficient processing
- Cross-chain transfers for easy execution
- Social recovery for lost private keys
- Custom signature schemes for secure digital signatures
- Session keys for convenient dApp usage
- Social sign-in for non-crypto users
- Limits, allowlists, and access control for flexible transaction execution
- Fiat on-ramps and checkouts for easy crypto purchase

## Tech Stack for Biconomy SDK with Smart Wallets using EIP 4337

---

1. Smart wallets -  Programmable and self-custodial wallets that leverage smart contracts to manage user funds and assets on the blockchain.
2. Bundlers: Nodes that bundle multiple UserOperations to ensure efficient transaction processing and fee-prioritization.
3. EntryPoint Contract: a global singleton contract that serves as the universal entry point for all ERC-4337 compliant smart contract wallets, simplifying wallet logic and ensuring safety in the transaction process.
4. Off-chain Architecture: An alternative UserOps mempool that coexists with the standard mempool, enabling a smooth interaction between bundlers, block-building nodes, and the EntryPoint contract.
5. Paymasters: a system that sponsors transactions for users, enabling use cases such as fee subsidies, ERC-20 token payments, off-chain payment methods, and on-chain credit services.
6. Developer Dashboard: We will offer a developer dashboard that provides granular control over user operations, paymasters, and bundlers, as well as detailed statistics. This will allow developers to have a single view for all aspects of their work.
7. Aggregators: Helper contracts that validate aggregated UserOperation signatures, enhancing efficiency and scalability in transaction processing whilst reducing cost. 

## **Integration Model and Pricing**

---

We offer SDKs and APIs for developers to integrate our solutions within their projects or applications and they can manage all these services via our developer dashboard. You can checkout our technical [documentation here](https://docs.biconomy.io/introduction/overview). To get in touch with our team, you [can schedule a meeting here.](https://www.biconomy.io/book-a-demo)

### **Pay-As-You-Go**

Biconomy operates on a pay-as-you-go basis. There are no upfront costs or hidden fees. At the end of each month, a detailed invoice is sent and your card is charged accordingly. A self-serve dashboard for managing billing and invoicing will be launched soon.

[Biconomy SDK Pricing](Biconomy%20SDK%20Pricing%206f4537a645af4b8985f4d43f2b045865.md)

### **Custom Pricing Options**

Biconomy offers custom pricing options tailored to your needs, including service level agreements and volume-based discounts.

## Useful **Links**

---

- Provider Website: [http://biconomy.io/](http://biconomy.io/)
- Provider Documentation: [https://docs.biconomy.io/introduction/overview](https://docs.biconomy.io/introduction/overview)
- Demo: [https://sdk-dev.biconomy.io/](https://sdk-dev.biconomy.io/)
- Github: [https://github.com/bcnmy](https://github.com/bcnmy)