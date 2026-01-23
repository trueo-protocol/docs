---
sidebar_position: 4
---

# Minting YES/NO Tokens

In Trueo, anyone can permissionlessly mint YES and NO tokens for a market once it has been initialized, allowing the free market to determine the circulating supply of outcome tokens and provide liquidity accordingly.

YES and NO tokens are minted by depositing TYD into the market. For every 1 TYD deposited, the protocol mints exactly 1 YES token and 1 NO token.

At any time prior to resolution, 1 YES token and 1 NO token can be redeemed together for 1 TYD, ensuring a strict parity between collateral and outstanding outcome tokens.

Once a market has resolved, only the token corresponding to the correct outcome remains redeemable. Each winning YES or NO token can be redeemed for 1 TYD, while the opposing token expires worthless.

Each market is supported by two dedicated Uniswap liquidity pools: a YES–TYD pool and a NO–TYD pool. In both pools, liquidity is mathematically constrained between zero and one TYD per outcome token, effectively reproducing the behavior of a traditional prediction market order book entirely onchain.


