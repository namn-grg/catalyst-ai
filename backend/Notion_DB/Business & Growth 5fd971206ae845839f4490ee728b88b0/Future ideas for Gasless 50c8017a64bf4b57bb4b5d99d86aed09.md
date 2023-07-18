# Future ideas for Gasless

### Existing Chains

Ethereum, Polygon, BSC, ~~xDAI, Moonriver,~~ Avalanche, Arbitrum, Fantom, Moonbeam, ~~Edgeware~~

### Next Chains

Neon EVM, Near Aurora, Optimism, OEC by OKEX, Terra, Solana, Cosmos, Evmos, Thorchain, Cronos

For specific methods, gasless is already plug and play and can be implemented on specific methods but we do not offer a lot of controls at the method() level, limit controls are on a dapp level for now (global variable). Among the controls that we can give for any method(), in priority order i'll say -

1. Whitelist to allow only a certain set of users get gasless for calling that method() [The onus of identification of such users is on client, they can be stakers, early adopter, alpha users, token holders, NFT holders whatever, the client can pass a list/string/json]
2. Dollar Value/Token Number to provide gasless on the basis of token value for that method(). [for dollar value based transfers we will need a price oracle so the dollar value is a limited use case since not all tokens will have stable oracles]

Next - Ver 2.0

1. Build more customisability for some super common methods like ERC20Transfer(), these method are widely used and we can give granular level controls specific to that method. If we wanna do this for 10 method, then we will need 10 Biconomy method (customised to inherit the base methods with controls)

### Customisability

1. Allow the dApp owner to choose the max gas fee for sending the transaction via biconomy relayer. Rather than taking input in Gwei, we can say 50% more than the medium price from the gas station.
    1. If the gas limit is reached, the user can pay for the gas instead of failing the transaction.
2. Allow the dApp owner to choose the bump up % and number of retries if the transactions are not confirmed.
3. Allow only a specific set of whitelisted addresses to get the gasless benefit. The onus of identification of user addresses is on the dApp owner, and we can accept a list.
    1. Dapps can reward their power users or any other identifier.
    2. The onus of identification of such users is on client, they can be stakers, early adopter, alpha users, token holders, NFT holders whatever, the client can pass a list/string/json
4. Transaction nature/logic-based gas sponsorship. Logic-based gas sponsoring (this is also a type of whitelist)
    1. It will help incentivize specific actions and increase loyalty & usage. The dApp owner can incentivize the user to drive the desired behavior at the correct transaction.
    2. If a wallet does action x, sponsor gas where x can be:
        1. ppl who staked
        2. token holders
        3. users above “y” number of transactions/vol 
        4. NFT holders
        5. Transaction value over a specific limit
        6. gas is free b/w exact time interval (specify the start and end date and time)
5. Sponsor a variable % of gas.
    1. dApp owner can define the % split and subsidize the gas for the user.
    2. This can work so that the first five transactions are free and the next ones are, say, 50% subsidized.
    3. A condition-based subsidy can be given on top of point 2.
        1. Examples of conditions:
            1. 100% gas sponsor for first five transactions (incentivize new users) 
            2. 50% gas sponsor if vol of tx is >1000$
            3. 20% gas sponsorship for all transactions
            4. x depends on some lucky draw
            5. 100% till 20$ gas fee
            6. certain holders of an NFT get x% off their first five transactions
6. Product Pricing
    1. can deduct the subscription amount from the gas tank itself per transaction.
    2. Receive cashback for gas fees spent in protocol tokens.
    3. Fixed gas price per transaction is a kind of a hedging strategy where we make money if we predict correct and lose if we predict the wrong amount.
7. Gas usage limits on a method() level instead on an dapp level. Different methods can have different limits around using gasless.
    
     
    
8. Build more customisability for some super common methods like ERC20Transfer(), these method are widely used and we can give granular level controls specific to that method. If we wanna do this for 10 method, then we will need 10 Biconomy method (customised to inherit the base methods with controls)

### Other Upgrades

1. Reduction of integration time
    1. Boilerplate code
    2. Common issues threads on forums
    3. Code example for various use cases.
2. Custom Message in the transaction signature popup (EIP 721).
    1. Make sure the UX/visibility is same across all wallets because we don’t know which wallet the end-user will use
    2. Parameters to be listed inside that message with EIP 712 support
        
        ![Untitled](Future%20ideas%20for%20Gasless%2050c8017a64bf4b57bb4b5d99d86aed09/Untitled.png)
        
3. Gas fee optimization
    1. efficient gas pricing where do not use external APIs and use data analysis on gas history for the optimum bump up like average of fast and medium.
        
        [Gas Cost Analysis - Polygon Data](Future%20ideas%20for%20Gasless%2050c8017a64bf4b57bb4b5d99d86aed09/Gas%20Cost%20Analysis%20-%20Polygon%20Data%20d33830854d3c40d3ad7b4ab63225a9c0.md)
        
4. Set gas price based on the type of transaction
    - Swaps that require faster transaction confirmation can send those transactions with higher gas prices.
    - Asset-based transactions that are important but don't require very quick confirmations

5. Gas tank notifications

1. Collect alternative emails or other channel handles (Slack/Telegram) and provide them real-time messaging for deposit and low amounts
1. Allow the dapp owners to deposit in any ERC20 token. A good way to do this is to integrate a DEX. If they’re depositing any native token that’s fine else the DEX API will be used to do a swap.
2. Account Roles and Access Control for Dashboard - using the same account multiple members can perform multiple tasks on the biconomy dashboard.
3. Allow our clients to sell gas tank to *their* clients, so that their clients can be responsible for their own gas. 
4. Swap for Gas token can actually become a product in itself. You basically allow a user to swap some bluechip tokens for gas tokens on that chain gaslessly and this can be added as a widget on the Web UI. - Example Stellaswap [https://docs.google.com/document/d/1gZx3_DFbIirAUQIc8Tbrm5TNpvg6QB2qlBNtsqrjh-Y/edit](https://docs.google.com/document/d/1gZx3_DFbIirAUQIc8Tbrm5TNpvg6QB2qlBNtsqrjh-Y/edit)