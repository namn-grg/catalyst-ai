# SDK Pricing Meeting Notes

# August 4th, 2022 - Meeting Notes

### Attendees:

Aditya, Chirag, Sachin, Adrienne, Tommy, Aniket, Ahmed, Trevor

### **End goal:**

Build a blockchain agnostic, decentralized relayer network

### **Likely Highest ROI for us:**

Focus on incentivizing behaviors that support the way we want our network to operate. For instance, we want cheap, flexible, and reliable transaction processing for dApps or automation tasks? Then we need to design a mechanism that doesn’t add undue overhead to tx processing and incentivizes relayer nodes to incorporate modules that support an array of transactions (i.e., xchain, privacy, automation, etc.) and maintain their uptime. 

### **Actors:**

- Users
- Smart contract wallets
- Relayers, playing multiple roles:
    - dApp tx processing
    - Automation
    - Privacy
    - Cross chain
- dApps

### **Similar Decentralized Networks:**

- Pocket
    - Highly inflated asset that validators are now questioning
- GSN
    - Decentralized, but not used
- The Graph
    - Questions regarding value alignment between actors through GRT
- Livepeer
- Chainlink
- Arweave
    - Are we similar enough to decentralized storage? They focus on data availability.
- KeeperDAO (or other keeper networks)
    
    

In terms of comparable networks, all of the above have some similarities to what we want to do. However, each of the above (except Arweave) has questionable token engineering models. 

### **Path to Decentralization:**

1. Centralized - Biconomy
2. Open Source - OZ Defender, Gelato, GSN
3. Decentralized - GSN and Gelato

### **Relayer Value Adds**

- End user/dApp doesn’t have to hold gas tokens
- Complexity (e.g., xchain) can be abstracted away from end users and dApps
- dApps that have protocol operated relayers must maintain availability. Instead, they could rely on our relayers and not have to worry about it.

### **Relayer Risks**

- Exposed to IL when accepting protocol tokens
- Cross chain message passing must rely on partially secure validator networks.

### **Assumptions**

- Relayers cannot abscond funds
- Relayers have to be sophisticated (i.e., programmable in order to facilitate automation)
- Relayers must be secure.
- Relayers compete on service (i.e., accept project tokens, offer privacy features, offer MEV protection, etc.) and amount of staked BICO
- Relayers must configure their setup for the use cases they plan to support.
- dApps can run our open source relayers, but must maintain availability

### Harm to Network Actors

[https://github.com/opengsn/gsn-protocol/blob/master/gsn-protocol.md#attacks-and-mitigations](https://github.com/opengsn/gsn-protocol/blob/master/gsn-protocol.md#attacks-and-mitigations)

### **Questions**

- How generalizable should our relayer architecture be? Should they be programmable such that use cases we haven’t thought about yet are possible?
- Would our relayers plug in RPC endpoints for blockchain data, or do we see Pocket nodes running our relayer infrastructure as an add on to their current work?
- How does MEV affect our relayer network? Should this be part of the “service” offered by Biconomy Relayers?
- Should we allow for

### **Action Items**

- [x]  Aniket to set meeting with Woodstock capital and Joel for token engineering brainstorming
- [x]  Chirag to share architecture diagrams we have so far
- [x]  Trevor to set next meeting and provide agenda

# August 10th, 2022 - Meeting Notes

## Attendees:

Aditya, Chirag, Sachin, Trevor, Rohan, Yash

## Comparable Protocol Review (ongoing)

Research Summary - See notes for more detail. We can add to this table as we research more protocols.

[Comparable Protocols](SDK%20Pricing%20Meeting%20Notes%20ac637412f5ef4b81983a5db6e42cda20/Comparable%20Protocols%201300923ee8384d77a9c126fd8806dcd4.md)

## Network Objective

Maximize the number of relays in the network. The higher the tx count the healthier the network. Security, of course, must be prioritized. 

Our designs should be built on this objective. We will always consider which features create the best developer experience, which may in part be determined by how we ensure relayer performance. 

## Event vs. Direct Txs

We identified two kinds of relayer txs: 

- Event based txs: some on chain event is captured by a listener, which then triggers a tx to be executed by a relayer. This is likely cross chain, but can be single chain (liquidation events, etc.). We have this for Hyphen (our watchtowers).
- Direct communication txs: txs are sent directly to a relayer who carries out the tx request when it arrives. This is likely single chain. (we have this for gasless, forward).

We are currently open-sourcing this tech, which should be completed before we get to decentralization. Scheduled to be complete end of August. 

## Steps to decentralization

- Identify network objectives
    - This will determine how we use BICO
- Design staking model
    - delegated or not,
    - min stakes,
    - cooldown period,
    - slashing,
    - etc.
- Design relayer discovery mechanism
    - Can relayers compete?
    - If so, how do they compete? Reputation, staked amount, performance?
- BICO token engineering model
    - First priority is using BICO to ensure we achieve network objectives
    - A second priority can be maximizing value accrual to BICO

## **Action Items**

- [x]  Aniket to set meeting with Woodstock capital and Joel for token engineering brainstorming
- [x]  Chirag to share architecture diagrams we have so far
- [x]  Chirag and Trevor to research MEV-boost architecture
- [x]  Trevor to add tokenomic research to the above table for: (1) The Graph, (2) Pocket, (3) The Keeper Network (if it still exists), (4) KeeperDAO
- [x]  Trevor to read GSN whitepaper to review reputation mechanism

# August 16th/17th, 2022 - Meeting Notes (Network Objectives)

### Attendees:

Ahmed, Trevor, Sachin, Chirag

### Meeting agenda:

Define network objectives and core attributes

### Stakeholders

- End User: original message sender/tx signer
    - user of dApps/SCW,
    - automation services (can also be a dApp)
- Node operator
- Developer: responsible for funding gas tanks

### Network Objectives/Core Attributes (ordered by priority)

1. Node-UX
    1. Easy to deploy a new node (can we make it one click? this could be a future bounty) 
    2. Upgrades are easy to implement and shouldn’t cause downtime/network disruption
    3. Ample user docs, FAQs, and tech forum activity
    4. Staking is easy and straightforward: min staking amount is within reach, but also substantial enough that there is an incentive to follow protocol
    5. Efficient market exists for staking tokens
    6. Delegated staking so that more people can participate in the network
2. Node Flexibility
    1. Transaction management; nodes can handle a variety of configurations at the SDK level for gas bumping and priority bids, as well as multiple routes to validators (i.e., public mempool vs flashbots). Gas efficiency: 1) pricing data; 2) price bumps; 3) smart batching 
    2. Nodes support a broad array of use cases, and can easily integrate new use cases
3. Profitable
    1. Maximize the number of txs on the network
    2. Are minted BICO rewards per relay required to make it worth while for a user to join the network?
    3. Do network users have access to MEV opportunities? Can they be captured without harming end-users? 
    4. Efficient market exists for fee tokens
4. Liveness
    1. Node uptime/online 
    2. Maintains balance in paymaster, if gasless tx (i.e., proves ability to pay fees)
    3. Highly available (i.e., reachable for communication w/network)
5. Scalability
    1. Throughput. Need to balance throughput requirements with tech overhead. The higher the tech requirements the higher the throughput, but the heavier the lift of operating a node. 
6. End user experience
    1. txs cannot be censored
    2. The relayer network is not imposing undue cost or time overhead for end-user txs. This does not mean the third-party relayer cannot charge a premium. This is more about hidden costs such as front-running (i.e., MEV)

### Notes on Payment Flows

- Gasless use case - dApp fills tank on source chain and paymaster reimburses relayer from the tank.
- Non-gasless use case - end user (i.e., message sender/tx signer) selects tx fee token, signs tx, sends to the relayer, relayer simulates tx, executes tx, and reimburses themselves from the Entry Point smart contract.
- Entry Point smart contract - current implementations of entry point smart contracts reimburse relayers in source chain native tokens only. But, modified version are in development that can reimburse in ERC 20. Biconomy can potentially implement Forward solution or fee conversion module for swapping ERC 20 to native.
- Cross chain relayer reimbursement - destination fees collected on source chain. Therefore, destination chain relayer is exposed to IL.
    - This is true for both gasless and non-gasless use cases
    - Can we implement fee conversion module?
    - Collecting fees in stablecoins may alleviate IL, as it removes one dimension of variance. Also, relayer premiums in this case would be denominated in stablecoins. This may be a better node-UX.
        - We would need to define (and allow for configuration) thresholds for swapping. Considering gas and bridge fees, it can be expensive to swap stables received on source chain for destination chain native periodically.
- dApp run relayers - can accept protocol tokens.
    - if cross chain, the dApp would have to operate relayer on both chains.
- 

### General Notes

- arbitrary messages will be able to be sent to the network, and the relayer should be general enough to accept and execute the tx
- The general idea of our relayer network is:
    - A decentralized executor (relayer) picks up a general message on chain A and executes that message on chain A, or on chain B, or on chains A & B & C.
- We haven’t defined Executor vs. Relayer; should there be a clear distinction?
- dApps should have the ability to run their own relayer. It is up to the network to outcompete them.
- Use cases include:
    - SCW originating message
    - Bridge ops (abicus and hyphen use cases)
    - Automations
    - Scheduled txs (maybe L2 fits here)
    - Flashbots

### Action Items

- [ ]  Trevor to check in with Ahmed & Aniket on setting node operator interviews. This would include prospective node operators, as well as node operators in similar networks.
- [ ]  Trevor to set architecture meeting for next week. Beginning of recurring meetings.
- [ ]  Aniket to set meeting with Woodstock capital and Joel for token engineering brainstorming
- [ ]  Chirag to share architecture diagrams we have so far
- [ ]  Chirag and Trevor to research MEV-boost architecture
- [ ]  Trevor to add tokenomic research to the above table for: (1) The Graph, (2) Pocket, (3) The Keeper Network (if it still exists), (4) KeeperDAO
- [ ]  Trevor to read GSN whitepaper to review reputation mechanism

# August 23rd, 2022 - Meeting Notes (Network Objectives, continued)

### Attendees:

Ahmed, Trevor, Sachin, Chirag, Shruti, Kunal, Yash

### Meeting agenda:

Finalize network objectives/core attributes, and discuss high level project planning.

### Finalize Network Objectives Document

The below link is to the first draft network objectives document. This doc is meant to guide our decision making. However, we may update the doc from time-to-time as we progress our understandings. 

[Network Objectives](https://www.notion.so/Network-Objectives-a7c39ca158da4313a82ef806daa47271)

### High Level Project Planning

- Architectural designs for automation use cases has not begun. However, Hyphen is considered an automation use case, which we have architecture for.
- Phase 1 release scope:
    - Forward use case tx flows
    - Cross chain tx flows
    - Gasless tx flows
    - Open source relayers
    - Public facing documents for decentralization plans
- Phase 2 release scope:
    - Decentralized relayer protocol
    - Relayer discoverability mechanism (first iteration)

 

### Discoverability Mechanism

- Need to have a list of discoverability options documented and ready to share with community by launch of phase 1
- Shruti will coordinate the creation of this document with tech/econ teams
- Chirag mentioned we can explore a mechanism similar to bundlers in 4337
- Shruti (?) questioned if we need a flat fee, or some categorization of relayers into segment based on premium so that a dApp can ensure a relayer is available for the dApps preferences.
- Pocket uses a 1 hour timelock for the dApp <> relayer node. This is for determining who will actually relay the txs, not which nodes participate in consensus.
- For the phase one release, the SDK will map directly the dApp <> relayer node.

### Documenting the Decentralized Relayer Design

- Need community facing documents ready for phase one release
- Shruti will coordinate. Tech team and econ team will produce docs

### Node Interview

- Not discussed on the call, but @Trevor James Jacka and @Shruti Gandhi and a member of the tech team will start coordinating calls with prospective nodes. These will be requirement gathering calls.
- @Ahmed Al-Balaghi and @Aniket Jindal will generate leads

### Action Items

- [ ]  @Sachin Tomar and @Chirag Titiya to develop “actor” diagrams for each flow and share with team
- [ ]  Trevor to add tokenomic research to the above table for: (1) The Graph, (2) Pocket, (3) The Keeper Network (if it still exists), (4) KeeperDAO
- [ ]  Chirag and Trevor to research MEV-boost architecture
- [ ]  Trevor to read GSN whitepaper to review reputation mechanism
- [x]  Trevor to check in with Ahmed & Aniket on setting node operator interviews. This would include prospective node operators, as well as node operators in similar networks.
- [x]  Trevor to set architecture meeting for next week. Beginning of recurring meetings.
- [x]  Aniket to set meeting with Woodstock capital and Joel for token engineering brainstorming
- [x]  Chirag to share architecture diagrams we have so far

# August 25th, 2022 - Meeting Notes

### Attendees:

Ahmed, Trevor, Sachin, Chirag, Shruti

### Meeting agenda:

High level walk-through of architecture, with a focus on actors

## Actors, Incentives/Behaviors, and Rules

- Three actors identified at the infrastructure layer:
    - Relayer node - receives txs from SDK and executes at the blockchain layer
    - Backend node - supports client side SDK for tasks such as displaying account balances across chains
    - Indexer - fetches data from blockchain layer for relayer/backend nodes
- As of now, only the relayer node will be decentralized
- Backend/indexer nodes can be centralized—run by Biconomy or the dApp
    - This makes sense if these nodes have nothing to do with actually executing txs, as they shouldn’t be able to censor txs
- Our infrastructure layer nodes will support gasless, forward, and cross chain in v1. dApps and other third parties can develop new tx bundles that relayer nodes will be able to handle.
    - Automation use cases may require an additional actor, or more customization at the infrastructure node layer. Still TBD.
- All three infrastructure layer nodes will be open sourced.
    - We will continually open source updates to nodes, as developed by the foundation or the community in an open way
    - Node operators are free to innovate privately for competitive reasons, as long as it conforms to standards set by the open source version and doesn’t break protocol rules.

## Actor Incentives & Behaviors

- dApps don’t pay premiums, end-users do. Except for gasless use case.
- dApps can self-host and contribute their relayer to the network at the same time
- dApps have an incentive to self-host as long as:
    - the cost/tx of self-hosting is cheaper than the cost/tx of the third party network
    - dApp use cases are not supported by the third party network
    - node setup/maintenance time and effort is not substantial concern for the dApp

## Use cases

- decentralized relayer network replaces bundler in 4337 style AA
- L2 state updates on L1
- Flashbots MEV-boost relayers
- Data availability modularity (i.e., celestia, avail)
- Biconomy SDK flows

## Tx Discovery Mechanism

There are three options: 

- 1 to 1 communication between dApp <> relayer
    - Constraints:
        - Requires dApp to select a relayer
        - High performing nodes can take on only so many txs, so we would need to create a way to indicate to dApp that a node is at capacity
            - Could be solved with node providers running multiple nodes and employing a load balancer to distribute the load
        - Node may go offline
            - we can build auto rerouting (i.e., redundancy) into the client, where a new node would resume if node is down.
- Offline mempool
    - Constraints:
        - Must develop a consensus mechanism to ensure fair ordering
        - May require an economic model that is not based on reputation
        - Tx finality is slowed, since txs first queue in the mempool
- Round Robin
    - Constraints:
        - Needs a central registry, which could be either on-chain (gas overhead) or off-chain (needs consensus)
        - Tx finality is slowed, since txs first routed to a central registry
        

### Action Items

- [ ]  @Sachin Tomar and @Chirag Titiya to develop “actor” diagrams for each flow and share with team
- [ ]  Trevor to add tokenomic research to the above table for: (1) The Graph, (2) Pocket, (3) The Keeper Network (if it still exists), (4) KeeperDAO
- [ ]  Chirag and Trevor to research MEV-boost architecture
- [ ]  Trevor to read GSN whitepaper to review reputation mechanism
- [x]  Trevor to finalize first draft of Actors, Incentives/Behaviors, and Rules doc
- [x]  Trevor to check in with Ahmed & Aniket on setting node operator interviews. This would include prospective node operators, as well as node operators in similar networks.
- [x]  Trevor to set architecture meeting for next week. Beginning of recurring meetings.
- [x]  Aniket to set meeting with Woodstock capital and Joel for token engineering brainstorming
- [x]  Chirag to share architecture diagrams we have so far

# September 1st/2nd, 2022 - Meeting Notes

### Attendees:

Ahmed, Trevor, Sachin, Chirag, Shruti, Aniket

### Meeting agenda:

Relayer Network SBI

## Actors, Behaviors, Incentives

[Network Stakeholders, Behaviours & Incentives](https://www.notion.so/Network-Stakeholders-Behaviours-Incentives-69550dc7cd68444995804c61c906cf3e)

- Specific comments/questions can be found in the Relayer Network SBI doc.
- tx discover can happen in one of two ways:
    - dApps discover relayers that they want to work with. Txs route in priority to selected relayers. In [GSN](https://github.com/opengsn/gsn-protocol/blob/master/gsn-protocol.md#the-process-of-sending-a-relayed-transaction), the sender lists preferred relayers (if any) in a configuration file.
    - txs are broadcast to a registry of relayers who are then allotted txs using a tx management algo or consensus mechanism, a la [Chainlink](https://docs.chain.link/docs/chainlink-keepers/overview/#how-it-works).
- Some questions and discussion around allowing dApps to run Biconomy relayer nodes that prioritize the dApp’s txs, as well as contributing that relayer node to the Biconomy Relayer Network.
    - Aniket brought up the good point about no precedent in L1s for this. Trevor mentioned this is how GSN works, so it is possible.
    - Shruti brought up the question of isn’t it censoring if a dApp can prioritize txs of any kind?
    - We left it at this comes down to nuances of our protocol design and what we want to optimize for. This should be sorted out as we are considering incentives and tradeoffs in more depth.
- Trevor described his idea on an [idealistic reputation based system](https://www.notion.so/Network-Optimization-through-Reputation-Based-Tx-Discovery-50276758fab2489592aa9dd1425b5895).
    - Reputation system could be:
        - Bi-directional: Node reputation can be upvoted, as well as down voted. Or,
        - One directional: Node reputation can only be down voted
    - Aniket mentioned Graph and POKT may have reputation systems.
    - Trevor mentioned [GSN has](https://github.com/opengsn/gsn-protocol/blob/master/gsn-protocol.md#the-process-of-sending-a-relayed-transaction) a reputation system. However, from initial review it appears the sender maintains their own reputation score (or it is maintained for them), and appears to be one directional.
        
        ![Screen Shot 2022-09-02 at 11.12.46 AM.png](SDK%20Pricing%20Meeting%20Notes%20ac637412f5ef4b81983a5db6e42cda20/Screen_Shot_2022-09-02_at_11.12.46_AM.png)
        

![Screen Shot 2022-09-02 at 11.11.06 AM.png](SDK%20Pricing%20Meeting%20Notes%20ac637412f5ef4b81983a5db6e42cda20/Screen_Shot_2022-09-02_at_11.11.06_AM.png)

- Had a quick discussion about next steps.
    - Trevor and Sachin will begin meeting regularly to develop:
        - Relayer network roadmap
        - Taxonomy of (similar) protocol design

## Action Items

- [ ]  @Sachin Tomar and @Chirag Titiya to develop “actor” diagrams for each flow and share with team
- [ ]  Trevor to add tokenomic research to the above [table](SDK%20Pricing%20Meeting%20Notes%20ac637412f5ef4b81983a5db6e42cda20.md) for: (1) The Graph, (2) Pocket, (3) The Keeper Network (if it still exists), (4) KeeperDAO
- [ ]  Chirag and Trevor to research MEV-boost architecture
- [x]  Trevor to set meeting with Sachin for Relayer Network roadmap
- [x]  Trevor to read GSN whitepaper to review reputation mechanism
- [x]  Trevor to finalize first draft of Actors, Incentives/Behaviors, and Rules doc
- [x]  Trevor to check in with Ahmed & Aniket on setting node operator interviews. This would include prospective node operators, as well as node operators in similar networks.
- [x]  Trevor to set architecture meeting for next week. Beginning of recurring meetings.
- [x]  Aniket to set meeting with Woodstock capital and Joel for token engineering brainstorming
- [x]  Chirag to share architecture diagrams we have so far

# September 8th, 2022 - Meeting Notes

### Attendees:

Ahmed, Trevor, Chirag, Shruti, Aniket, Lovejeet

### Meeting agenda:

Relayer Protocol deliverables, priorities, and resources

### Deliverables

For phase one, we will write a protocol blueprint document. This doc will describe at a high level the protocol and major design decisions that we have made. This would be released to the community in mid October along with phase one. 

### Priorities & Resources

- Relayer protocol total addressable market is large considering:
    - account abstraction & SCWs
    - Automation
    - MEV-boost relays
    - L2 paymasters
    - L2 state writes to L1 (require a relay)
- At this time, the primary utility of BICO is as a work token in the Relayer Protocol
- The question was raised if we should bring more resources into the project given the potentially large TAM and disproportionate impact on BICO. Positions could include:
    - PM
    - Growth lead
- Could we mock up a go to market where we estimate size and tx volume?