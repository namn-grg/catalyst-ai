# Various Pricing Mechanisms

## **~~Flat Fee~~**

1. We charge a fixed fee across multiple pricing tiers irrespective of the usage.
    1. Since we are in the transaction infrastructure business, our average revenue per user (ARPU) should increase with increased usage. 
    2. Suppose our burn rate is 125K/month, then at $250/month we will need 500 paying customers just to break even.
    3. Services like Alchemy, Pokt, and Infura which are core dependencies and have a large TAM still charge less so it will be very difficult to justify the pricing of more than $250/month.
    4. In this model, we won't grow with the increasing adoption of Web3 dapps because we won't get a piece of the increasing pie, which is our primary thesis behind MEXA. This is a contradiction.
    

## **Charge on basis of usage**

1. **~~% of gas fee relayed~~**
    1. Since most of our traction is on L2 for the reason that L2's have low fees, it is stupid to use this as a pricing metric. It'll be like we're charging a % of something that even the user does not want to pay.
    2. Over the last 12 months, we have relayed $175K in total fees on Polygon, ETH, and BSC. This figure is too little to even look up to for break even.
    3. And we cannot ask our customers on ETH layer 1 to pay a markup on the ETH fees. This will be like shooting ourselves in the foot.
    
2. **~~% of the total dollar value of transactions~~**
    1. On average, we do $41M worth of transactions/month
    2. At 125K/month burn rate, we need to charge $125K*100/41M % = 0.3 % of total volume relayed
    3. Charging on total transaction value defeats the purpose of blockchain. This is how banks charge their customers.
    
3. **~~fix cost per API call~~**
    1. On average, our relayer infrastructure makes 15 API calls/transaction (failed + successful) - not every API call works towards a transaction [trxn is the output]
    2. On average, we facilitate 4M API calls/month, with a CAMR of 99%
    3. At 125K/month burn rate, to break even, we need to charge $125K/4M per API call = $0.03125 per API call.
    4. Just like total transactions relayed is our north star metric to measure growth, total API calls is the north star metric to measure the load on our infrastructure and that is what we are charging for.

**API can be differentiated.

1. **fix cost per transaction**
    1. On average, we do 265K transactions/month [approx. 6 transactions fail for every 100 transactions sent]
    2. At 125K/month burn rate, we need to charge $125K/265K per transaction = $0.47 per transaction [for break even]
    3. Since we're also charging for failed transactions, turnaround is that we only charge for 95% of all the transactions that were made plus recover the entire gas fees.
    

## **Pricing using amount of tokens staked [after decentralization]**

1. [https://docs.pokt.network/home/resources/references/protocol-parameters#baserelaysperpokt](https://docs.pokt.network/home/resources/references/protocol-parameters#baserelaysperpokt)