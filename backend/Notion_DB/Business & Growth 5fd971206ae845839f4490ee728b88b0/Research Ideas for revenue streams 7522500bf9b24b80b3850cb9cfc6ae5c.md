# Research/Ideas for revenue streams

I think the consumer facing revenue sharing options that we were discussing on the reatil UI like cut on swaps (Metamask style) are all possible on paymaster. 

For example we can offer swaps and fiat onramps while gas deposits to enable dapps to pay in fiat and other erc20 tokens.

Other avenues that are not live yet are gas arbitrage in bundlers, MEV and PFOF in userops flow and revenue share from value added services on wallet and paymaster.

[Biconomy Revenue Categories](Research%20Ideas%20for%20revenue%20streams%207522500bf9b24b80b3850cb9cfc6ae5c/Biconomy%20Revenue%20Categories%20370d28d87781492dac1eb1bc3ba61115.md)

### Questions

- Does our paymaster require stake? Will we stake on behalf of dApps? @Shruti Gandhi
- Why does Unity Games want our institutional gasless service? @Rhic Chowdhury
- Is there a product in the institutional offering for companies like Mercedes Benz, etc? Or, they will prefer to fill their own gas tanks, handle development, etc?
- Where does metamask send their swaps? How about other leading wallets?

### Considerations

- Services that do not directly generate revenue have been left out of the Wallet SDK entries in the table above. A separate entry for MAU pricing could capture those services. However, that would be an additional cost to dApps already paying tx premiums for paymaster, cross chain txs, and batch txs. In this sense, wallet SDK MAU pricing may make more sense, as we can justify a higher per unit price.
- Biconomy SDK userOps may flow through the BRN. In this case, any explicit fee (i.e., gas premiums) will flow to the network and not Biconomy. However, Biconomy may charge an additional fee on top of this for the SDK. This fee could be MAU or tx premiums, and can be thought of as a fee for paymaster services and other value add services offered through the SDK.