# Metamask Snaps Research

## What’s a Snap?

A snap is a plugin, a JavaScript program run in an isolated environment, that customises the wallet experience. Snaps have access to a limited set of capabilities, determined by the permissions the user granted them during installation.

A snap can add new API methods to MetaMask, add support for different types of blockchains, or modify existing functionalities using the [Snaps JSON-RPC API](https://docs.metamask.io/snaps/reference/rpc-api/).

For example, you can:

- [Display a custom confirmation screen](https://docs.metamask.io/snaps/reference/rpc-api/#snap_dialog) in MetaMask.
- [Notify users](https://docs.metamask.io/snaps/reference/rpc-api/#snapnotify) in MetaMask.
- [Securely store and manage data](https://docs.metamask.io/snaps/reference/rpc-api/#snap_managestate) on your device.
- [Control non-EVM accounts and assets](https://docs.metamask.io/snaps/reference/rpc-api/#snap_getbip44entropy) in MetaMask.
- [Provide transaction insights](https://docs.metamask.io/snaps/reference/exports/#ontransaction) in MetaMask's pre-transaction window.
- [Schedule periodic actions](https://docs.metamask.io/snaps/reference/exports/#oncronjob) for your users.
- [Display custom UI](https://docs.metamask.io/snaps/how-to/use-custom-ui/) in MetaMask using a set of pre-defined components, including inline Markdown.

### Timelines

- June tentative for Accounts APIs to be available in Flask for us to start working (ETH CC hard deadline)
- August- September to ship Snaps V1 in prod on the metamask extension
- October is when they plan to ship the Accounts APIs in prod with Snaps V2. This is when you can select "Add Snap Account" in metamask UI to add an AA wallet (or other non-EVM wallets)

## Ideas for a Biconomy Snap

We want to use Metamask Snaps to distribute our core infra, or generate awareness for it

- Snap to do AA transactions
    - UI shows the Biconomy Smart Account address - Needs accounts APIs
    - Can add / withdraw / transfer directly by UI from SA
    - Parse the userOp sign transaction to show the data user is signing
    - Connect Smart Account to any dApp and use per usual - pay gas in ERC20
    - How would transaction batching be handled here?
- Metamask ID snap
    - v1 - A name service .metamask for all EOA, which will resolve to EOA and EOA to name.
    - v2 - Add the smart-account resolver to the .metamask name.
- Transaction Automation Snap
    - Setup recurring or subscription payments within metamask
    - Set transactions with Gas price triggers (only send txn once gas is below ****X**** gwei)

### Snaps in the wild

- AA Snap (ETH India) - [https://devfolio.co/projects/aa-snap-c064](https://devfolio.co/projects/aa-snap-c064)
    - They had to do all this in their own UI but we can have some components in MM itself in V2
- Notifications using Push (ETH India) - [https://devfolio.co/projects/push-snap-4471](https://devfolio.co/projects/push-snap-4471)
- Social Security Snap (ETH Tokyo) - [https://ethglobal.com/showcase/socialsecuritysnap-b5vyt](https://ethglobal.com/showcase/socialsecuritysnap-b5vyt)
    - Checks if anyone in your Lens network has interacted with this contract before
    - Gives insights using ChatGPT
- Name-snap (ETH Lisbon) - [https://ethglobal.com/showcase/name-snap-jdsrn](https://ethglobal.com/showcase/name-snap-jdsrn)
    - Resolves domain names and hex addresses across different chains
    - Uses address abstraction protocol ‘Everyname.xyz’
- 2FA Snap for auth by web3auth (Bogota) - [https://metamask.io/news/developers/mpc-snap-integrating-multi-factor-authentication-into-metamask/](https://metamask.io/news/developers/mpc-snap-integrating-multi-factor-authentication-into-metamask/)