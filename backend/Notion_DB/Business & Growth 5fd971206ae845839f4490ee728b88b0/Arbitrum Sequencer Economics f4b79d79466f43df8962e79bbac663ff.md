# Arbitrum Sequencer Economics

<aside>
💡 Rollup’s profit = Layer 2 fees — Layer 1 block space fees (security costs for storing and verifying data on L1, etc.) — computational costs such as node servers. Where, Layer 2 fee = gas fee + MEV + some premium charged by Layer 2.

</aside>

Disclaimer - These profits don't include their off-chain costs (eg. team salary, running hardware). These are on chain approximations.

Rollup teams that use a centralised sequencer (all of them atm) capture all the revenue from transaction fees. Most of the sequencer for Rollups are centralised. This means that the execution of tx, sequencing, and production of blocks are all supported by a centralised server. Previously Arbitrum was down because of sequencer hardware problems. This business model does not allow users to participate as nodes, only Rollup dev team can earn it.

**Average Transaction Cost on Arbitrum**

[https://l2fees.info/](https://l2fees.info/)

Send ETH - $0.04
Swap - $0.12

**Daily Gas Fees Earned by Sequencer (Total Daily Revenue in $$)**

[https://cryptofees.info/](https://cryptofees.info/)

Last 1 day - $102,426

Last & days daily average - $77,914

**Daily Cost of L1 (Ethereum) Rollup verification (Total Daily Expense in $$)**

[https://l2fees.info/l1-fees](https://l2fees.info/l1-fees)

Cost of ETH security - $78,233.57

**Daily Gross Earnings (NOT CONSTANT, refer to graph below for daily ETH earnings)**

[https://dune.com/queries/1553420/2696887](https://dune.com/queries/1553420/2696887)

Avg gross margin on fees earned - 26%

| month | l1_calldata_cost | l2_eth_rev | margin | % margin |
| --- | --- | --- | --- | --- |
| 01/01/22 0:00 | 944.078061 | 1418.094492 | 474.0164315 | 33.43% |
| 01/02/22 0:00 | 904.905315 | 1103.303389 | 198.3980737 | 17.98% |
| 01/03/22 0:00 | 528.1940641 | 655.0761705 | 126.8821064 | 19.37% |
| 01/04/22 0:00 | 623.5618481 | 784.2984976 | 160.7366495 | 20.49% |
| 01/05/22 0:00 | 942.9877416 | 1256.806814 | 313.8190725 | 24.97% |
| 01/06/22 0:00 | 1403.131411 | 2180.25751 | 777.1260995 | 35.64% |
| 01/07/22 0:00 | 445.31116 | 544.9892445 | 99.6780845 | 18.29% |
| 01/08/22 0:00 | 361.6519026 | 443.5139014 | 81.86199881 | 18.46% |
| 01/09/22 0:00 | 198.4868536 | 311.8213164 | 113.3344628 | 36.35% |
| 01/10/22 0:00 | 368.9173832 | 520.1710488 | 151.2536656 | 29.08% |
| 01/11/22 0:00 | 570.6477883 | 756.8808811 | 186.2330928 | 24.61% |
| 01/12/22 0:00 | 384.6109181 | 607.8895342 | 223.2786162 | 36.73% |
| 01/01/23 0:00 | 505.7578509 | 771.801539 | 266.043688 | 34.47% |
| 01/02/23 0:00 | 319.579588 | 429.929938 | 110.35035 | 25.67% |

**Net margin and net profit - No visibility on what are team and infra costs for Arbitrum**

**Approx Premium charged by Sequencer - NA as of now**

**Approx MEV Revenue - NA as of now**

**[The system has a centralized sequencer](https://l2beat.com/scaling/projects/arbitrum#operator).** While proposing blocks is open to anyone the system employs a privileged sequencer that has priority for submitting transaction batches and ordering transactions. MEV can be extracted if the operator exploits their centralised position and frontruns user transactions.

**Daily number of Sequencer Batches**

L1 Main Contract that accepts L2 batches - 0x1c479675ad559DC151F6Ec7ed3FbF8ceE79582B6

Sequencer Contract receives 750 batches on an average daily

**TPS**

Arbitrum TPS (over last one month) - 3.22

Arbitrum TPS (over last one day) - 5.9

Max TPS - 6.67

[https://ethtps.info/](https://ethtps.info/)

[https://l2beat.com/scaling/activity](https://l2beat.com/scaling/activity)