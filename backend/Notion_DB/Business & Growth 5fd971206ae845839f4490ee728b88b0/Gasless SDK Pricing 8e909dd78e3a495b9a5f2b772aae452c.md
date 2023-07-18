# Gasless SDK Pricing

At Biconomy, we believe in simplifying the user experience for all decentralized applications (dApps) and making Web3 mainstream. We apply this ethos to design easy-to-understand and fair pricing for our products. This allows you to focus on innovating and creating kick-ass dapp experiences.

Our pricing model is flexible and modular, matching our tools and solutions. We provide a free quota for individual developers and small teams, and we never charge for usage on testnets.

### Pay as you go pricing

A gas price premium is added to each blockchain operation in the Biconomy SDK.

We have mapped out percentage premiums for each chain with maximum caps.

![Untitled](Gasless%20SDK%20Pricing%208e909dd78e3a495b9a5f2b772aae452c/Untitled.png)

### Example

Let's say you have deposited 100 MATIC on Polygon into the Biconomy gas tank contract to sponsor gasless transactions for your end-users.

Assuming that the method() you are sponsoring costs 21,000 units of gas, and the current Polygon network gas price is 200 Gwei, then your gas fees would normally be 21,000 x 200 Gwei = 4,200,000 Gwei or 0.0042 MATIC.

Under the new pricing model with a 12% premium, you will also need to pay an additional amount, which is calculated as 12% of the gas fees. Therefore, your premium will be 0.0042 MATIC x 12% = 0.000504 MATIC.

However, Biconomy always uses the lower bound of gas price for the premium calculation, so in this case, we will use the lower bound of 20 Gwei instead of 24 Gwei. Thus, your new premium will be 21,000 x 220 Gwei = 4,620,000 Gwei or 0.00462 MATIC.

Therefore, the total fees deducted from your gas tank will be 0.0042 MATIC + 0.00462 MATIC = 0.00882 MATIC.

After deducting the fees, your gas tank will have a remaining balance of 100 MATIC - 0.00882 MATIC = 99.99118 MATIC.

To summarize:

- Gas for the method(): 21,000 x 200 Gwei = 4,200,000 Gwei or 0.0042 MATIC
- Premium: 21,000 x 220 Gwei = 4,620,000 Gwei or 0.00462 MATIC (using the lower bound of 20 Gwei)
- Total fees deducted: 0.0042 MATIC + 0.00462 MATIC = 0.00882 MATIC
- Remaining balance in gas tank: 100 MATIC - 0.00882 MATIC = 99.99118 MATIC

> We offer custom pricing options tailored to your needs. Our team can help you establish service level agreements and arrange volume-based discounts. Please reach out to us to learn more about how we can help you find the perfect pricing plan. Get in touch [here.](https://www.biconomy.io/book-a-demo)
> 

## FAQ’s

### **Why the new pricing structure?**

We’re committed to offering high quality products and services and this new pricing is a step in the right direction for us to ensure that we deliver superior experience, onboarding and value creation for our partners.

### **Will I be charged upfront or is there some minimum subscription?**

No you won’t be charged upfront, nor there is any subscription or lock-in. We’re aligned on creating value for our users and we only want to charge there is actual product usage. When ever a new transaction happens, in the same transaction, a premium will be charged from the gas tank. If you do 1 transaction then we charge premium on 1 transaction and if you do 100K transactions we charge premium on 100K transactions.

### **How am I as a dApp benefit from this?**

We’re very serious and accountable for the value that we create for all our partners. Using gasless, what we’ve found out is that our partners typically save 15%-20% in gas using Biconomy’s intelligent relayers and with this pricing we’ll be retaining a percentage of those savings. As a customer and close partner you still save on your net gas spends, while offering your customer a superior UX.

### **Who is impacted by the new pricing?**

All existing partners using our gasless meta transactions are impacted. All new partners onboarding this service in future will also be impacted.

### **What is the impact on an existing partner?**

Earlier, whatever gas tokens you were depositing in the gas tank contract to sponsor the transactions were being used to fund the end-users gas. Once this pricing is implemented, a small premium will also be allocated to Biconomy from the same gas tank.

### **Is there any impact on the dApp end-users?**

No, there is no impact on the end-users. They will continue enjoying a superior UX on your dApp just like before.

### **What are the next steps for an existing partner?**

As an existing partner, you do *not* need to do anything. You can continue to use the gasless product as you were using before.