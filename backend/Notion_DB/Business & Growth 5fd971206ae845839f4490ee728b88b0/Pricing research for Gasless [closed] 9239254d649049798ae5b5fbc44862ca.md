# Pricing research for Gasless [closed]

- [ ]  **Think More on**
    - [ ]  Penalizing Strategy - can stop the gasless way and instead enable the regular with-gas option. Will have to make changes in the SDK.
    - [x]  Goto Market Strategy - Can launch first for the only Polygon and see feedback.
    - [x]  Take feedback on this model with new and old clients. Start pitching this new model to clients.
    - [ ]  How to convince T1 clients to pay us extra based on custom pricing? - We're offering a service, and we're making onboarding easier for them.
    - [x]  How to capitalize on the extra delta that we might get on various chains? Possible sol - Individual pricing for every chain we integrate

<aside>
💡 **Vision** - We are the first mover in this space, so we need to set up a habit in the industry. We will push towards settling two invoices at the start of each month - one for subscription fees and the other for the minimum gas tank top-up.

</aside>

## Scatter Plot for our Customer Volumes [per month]

We have made tiers based on a scatter plot of our customer's average volumes in the last six months.

---

![Screen Shot 2021-08-18 at 7.19.20 PM.png](Pricing%20research%20for%20Gasless%20%5Bclosed%5D%209239254d649049798ae5b5fbc44862ca/Screen_Shot_2021-08-18_at_7.19.20_PM.png)

[Customer Split](Pricing%20research%20for%20Gasless%20%5Bclosed%5D%209239254d649049798ae5b5fbc44862ca/Customer%20Split%205943dfca0e7b4d23b69b3569aa5c0837.md)

## Pricing Mechanisms

---

[Various Pricing Mechanisms](Various%20Pricing%20Mechanisms%20eb8471f88492436c8eb3aa7dbc259b48.md)

[Master Data - Dapps and Fees.xlsx](Pricing%20research%20for%20Gasless%20%5Bclosed%5D%209239254d649049798ae5b5fbc44862ca/Master_Data_-_Dapps_and_Fees.xlsx)

1. Based on the above mechanisms, we have decided to charge our customers on a per-transaction basis. [Forget API for now]
2. We have done 6,413,086 transactions in the last six months across mainnets. Assuming our previous six months burn to be $180K only for Gasless product, per transaction costs comes out to be $0.028. **Since $0.028 is too high for each transaction, we can establish that we'll not be able to break even from Gasless product. Now the goal is to extract the maximum that we can.**
3. On average, our clients have paid $0.007 in gas fees on Polygon [and $45 on Ethereum]. **From here, $0.007 is one upper bound for per-transaction cost for us.**
4. Industry Spending Capacity per transaction is max $0.00033 per API for Blocknative [$0.002 per transaction] and $0.002 per relay for Pokt Network.

<aside>
💡 **Healthy Range is  $0.0020 ≤ , Our Price per transaction ≤ $0.0070. For calc purposes, we have taken $0.005 for now.**

</aside>

![image.png](Pricing%20research%20for%20Gasless%20%5Bclosed%5D%209239254d649049798ae5b5fbc44862ca/image.png)

<aside>
💡 **Final Gas Fees** **=** **Gas Cost** of the transaction [depends on operations called] **x** **Gas Price** of Network [Fast, Med, Slow]

</aside>

[Parameters [Must Haves]](Pricing%20research%20for%20Gasless%20%5Bclosed%5D%209239254d649049798ae5b5fbc44862ca/Parameters%20%5BMust%20Haves%5D%208b5f7b6eaea94d948b815ee650551de0.md)

---

[Parameters [Extras]](Pricing%20research%20for%20Gasless%20%5Bclosed%5D%209239254d649049798ae5b5fbc44862ca/Parameters%20%5BExtras%5D%202e08e90c050a410186ff0d4c45cc325f.md)

## Making sense of $BICO Token

---

1. Can offer APY on top of gas tank deposit to incentivize users to give us more Native tokens.
2. Can charge subscription fees in BICO and give a discount if paid in BICO. The BICO earned from APY can be used to pay subscription fees.

## Revenue Projection

---

[Finding Revenue Factor](Pricing%20research%20for%20Gasless%20%5Bclosed%5D%209239254d649049798ae5b5fbc44862ca/Finding%20Revenue%20Factor%201ea0e43ddc2942f7b101a620b2385333.md)

> If the number of transactions is X, then the expected revenue would be 0.00517*X.
> 

If the volume is 100M in the next year, the expected revenue would be  100M * $0.00517 =  $517K.

<aside>
💡 For Forward product - We charge a 5% cut on the gas fees paid in the desired token.

</aside>

<aside>
💡 For Hyphen product - We charge a 0.1% transaction fee on the entire transfer amount.

</aside>