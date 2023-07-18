# Paymaster & Bundler Research for TW

# About Biconomy

Biconomy is a web3 infrastructure company that strives to simplify the blockchain experience and bring the power of decentralized technology to the masses. Our mission is to onboard the next billion users by making blockchain technology accessible, user-friendly, and efficient.

Our robust SDK and APIs are live on major platforms including Ethereum, Polygon, BNB Chain, Gnosis Chain, Avalanche, Optimism, Arbitrum, Fantom, and Moonbeam. With over four years of proven performance, we have established partnerships with over 300 dApps, including industry giants like JPMorgan, 100 Thieves, Dolce & Gabbana, and Mercedes Benz, as well as top DeFi and NFT platforms such as DYDX, Perpetual Finance, Curve Finance, Aavegotchi, Decentraland, Sandbox, Animoca Brands, and Zed Run.

Biconomy currently processes over 100,000 daily transactions and has successfully relayed more than 31 million transactions to date, catering to a diverse user base of over 3 million individuals.

Our latest SDK, the Biconomy Account Abstraction SDK, revolutionizes user onboarding by leveraging EIP-4337 and Smart Contract Wallets. This SDK enables developers to design a fully personalized transaction journey for their users, from creating a wallet using social logins to batching multiple transactions and submitting them as a single transaction. This results in an unparalleled user experience that is both seamless and efficient.

# Services Requested by Trust Wallet

Token Paymaster to allow SCW users to transact by paying fees in any token that they have.

# User Actions and flows on TW

![Paymaster%20&%20Bundler%20Research%20for%20TW%20a40a3ccc2ce345bbafd613decfd0c042/83A8BE99-F6B7-4941-8A43-2AD09F1ABF04.jpeg](Paymaster%20&%20Bundler%20Research%20for%20TW%20a40a3ccc2ce345bbafd613decfd0c042/83A8BE99-F6B7-4941-8A43-2AD09F1ABF04.jpeg)

# **On Chain and Off chain Data Metrics**

- **Avg gas fees for a txn on BSC Chain** = 0.0008 - 0.00085 BNB (~0.2-0.25 USD)
- **Expected monthly volumes from TW** = 1-10M txns (avg case 500k txns)
- **Daily cumulative gas fees on BSC** - **approx $100K daily**
- **Total gas paid by users on BSC Chain 30 days** - $34M
- **Avg gas fees by Trust Wallet** - total txns in the network is 130K/pm, so if Trust does 10-15M in a month, then at 10% max, it is $3.5M txns per month
- **Top 25 tokens held or traded in by end-users**
    - [https://bscscan.com/tokens-volume?q=7d](https://bscscan.com/tokens-volume?q=7d)
- **Top 20 coins with deep dex, cex liquidity in BNB chain**
    - [https://pancakeswap.finance/info/v3/tokens?chain=eth](https://pancakeswap.finance/info/v3/tokens?chain=eth)
    - 
- **Gas fees per op on SCW vs. EOA (op mean swap, normal sending)**
    - EOA
        - Transfer - 21K gas used
            - 0.0189 USD
    - SCW
        - Deploy - 250K gas used
        - Transfer - 150K gas used
            - 0.135 USD
    - Network gas - 3 Gwei

# Reference

**Pimlico** - Gas markup of 10%- 20% on some tokens.

**Stackup** - $0.002 / API call

# Models

- ****Fix Markup on total gas, charged in the BEP20 token****
    1. 10%
    
    ```
    Flat 10%
    
    at 500K monthly transactions assuming the base fee at 0.25$
    = 500K * 0.25 * 10%
    = approx 12.5K per month
    
    ```
    
- ****We fix a $$ value and charge the equivalent in the BEP20 token****
    1. Flat 0.015-0.02 USD
    
    ```
    Flat 0.015-0.02 USD
    
    at 500K monthly transactions
    = 500K * 0.02 (equals 8% markup on gas)
    = approx 10K per month
    
    ```
    
- ****Define a % token-wise, charged in the BEP20 token,****
    
    we can play on a very variable scape for risky tokens but volume will still be skewed towards blue chips, hence we’ll say < 10% on an aggregated level.
    
    1. WETH - 2%
    2. TWT - 0%
    3. CAKE - 5%
- ****Slider/MAUs****
    
    where the first 10 txns will charge 10%, and then we charge 5%.
    
    ```
    
    at 500K monthly transactions, how many user's will exhaust the quota of 10
    transactions.
    
    Assuming 20% break and 80% are within.
    
    80%*10% + 20%*5%
    = approx 9%
    
    at 500K monthly transactions, at 500K monthly transactions assuming the base fee at 0.25$
    = 500K * 0.25 * 9%
    = approx 12K per month
    
    We charge the same but we get a marketing spin-off.
    
    ```
    
- ****Paymaster is free if you use Bundler****
    1. 7%
    
    ```
    Paymaster no cost
    At Bundlers, we make 6-8% of the total gas collected.
    
    at 500K monthly transactions, at 500K monthly transactions assuming the base fee at 0.25$
    = 500K * 0.25 * 7%
    = approx 9K per month
    
    ```
    
- ****1) Paymaster has a fixed fee for illiquid token, else is free if you use bundlers****
    
    ```
    Paymaster for illiquid tokens, say bottom 50% at roughly 7%
    At Bundlers, we make 6-8% of the total gas collected.
    
    at 500K monthly transactions, at 500K monthly transactions assuming the base fee at 0.25$
    = 500K * 0.25 * 7%*50% + 500K * 0.25 * 7%
    = approx 18K per month
    
    ```
    
- ****2) Variable Markup on total gas, charged in the BEP20 token****
    1. If the BEP20 token 1-day average volume is > 1M, then 5%
    2. Else, 10%, and if super illiquid say <250K daily, then 15%
        
        ```
        30 tokens are above 1M daily volume, 70 are below.
        The bottom 50 have less than 250K daily volume.
        
        = 30*5% + 20*10% + 50*15%
        approx 11%
        
        at 500K monthly transactions assuming the base fee at 0.25$
        = 500K * 0.25 * 11%
        = approx 14K per month
        
        ```
        

# **Final Pricing Model**

Our pricing model for the top 10 BEP20 tokens on BNB aims to provide users with convenient transaction options while mitigating token price risks. Here is how our pricing structure works:

1. Collection and Dusting:
    - We collect the top 10 BEP20 tokens on BNB and allow users to transact by paying in BNB.
    - At the end of each 6-hour epoch, we completely convert our token collection into BNB and replenish the BNB in our paymaster wallet.
    - **We will implement circuit automation. If the price of a token falls by more than half of the daily variance within a 6-hour span, we will trigger an automated process to dump our entire token collection.**
2. Base Paymaster Premium:
    - For each of the 10 supported tokens, we charge a base paymaster premium of 10%.
    - This premium covers the operational costs and ensures sustainable service provision.
3. Variance Fee:
    - We calculate the median daily variance for each token, considering price fluctuations.
    - To safeguard against token price risks, we add the calculated variance on top of the base fee for that token.
    - For example, if the median daily variance for a token (e.g., USDT) is 0.133%, we will charge a total premium of 10.133% for transactions paid in USDT.
4. Absorbing Slippages and Costs:
    - We absorb any swapping slippages and associated costs incurred during the transactions.
    - This ensures that users do not bear these additional expenses.

### Top 10 Tokens and Variance for Swaps

[Untitled](Paymaster%20&%20Bundler%20Research%20for%20TW%20a40a3ccc2ce345bbafd613decfd0c042/Untitled%20Database%20471ba8d9d2e645f2af7a60fe8f0c7762.md)

# Analysis of Potential Earnings

**Scenario 1: SCW Transfer (4337 + Paymaster)**

Gas Calculation:

- Gas required for the BEP20 transfer: 150,000 units (minimum)
- Gas price: 3 Gwei (average)
- Total gas cost: 150,000 * 3 Gwei = 450,000 Gwei = 0.00045 BNB

Revenue Calculation:

- Assuming a monthly volume of 1 million transactions, the total gas fees generated would be: 1,000,000 * 0.00045 BNB = 450 BNB
- Assuming an average fee of 12.5% on the gas fees: 450 BNB * 12.5% = 56.25 BNB
- Considering the price of BNB at $300: 56.25 BNB * $300 = $16,875 USD

**Scenario 2: Comparison with EOA (Externally Owned Account)**

Gas Calculation:

- Maximum gas used for a normal EOA transaction: 30,000 units (minimum)
- Gas price: 3 Gwei (average)
- Total gas cost: 30,000 * 3 Gwei = 90,000 Gwei = 0.00009 BNB

Revenue Calculation:

- Assuming a monthly volume of 1 million transactions: 1,000,000 * 0.00009 BNB = 90 BNB
- Assuming an average fee of 12.5% on the gas fees: 90 BNB * 12.5% = 11.25 BNB
- Considering the price of BNB at $300: 11.25 BNB * $300 = $3,375 USD

## **Operating Costs and EBITA**

**Revenue:**

- Revenue from SCW transfers: 56.25 BNB

**DEX Fees:**

- Average DEX swap fee: 0.25% of the dollar value
- Monthly gas volume across 1 million transactions (0.00045 BNB/txn): 450 BNB
- DEX fees paid: 0.25% * 450 BNB = 1.125 BNB

**Slippage:**

- Maximum slippage: 2%
- Burn percentage of total trade volume: 1% of 450 BNB = 4.50 BNB

**Gas Costs for Swaps:**

- Cost per swap: 0.00075 BNB
- Number of trades in 30 days (6*4*30): 1200
- Total cost for swaps: 0.00075 BNB * 1200 = 0.9 BNB

**EBITA Calculation:**

- Revenue from SCW transfers: 56.25 BNB
- DEX fees: -1.125 BNB
- Slippage: -4.50 BNB
- Additional swap costs: -0.9 BNB

**Net EBITA:**
56.25 BNB - 1.125 BNB - 4.50 BNB - 0.9 BNB = 49.725 BNB per month

**Revenue Sharing: At 50/50 sharing**

Considering a 50/50 sharing model, the net EBITA of 49.725 BNB per month would be divided equally.

**Conversion to USD:**

Assuming the price of BNB at $300, the monthly earnings in USD would be:

24.8625 BNB * $300 = $7,458.75 USD