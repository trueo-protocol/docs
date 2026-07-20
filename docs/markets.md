---
sidebar_position: 5
---

# Markets

The lifecycle of a market begins with its creation.

Each market is defined by three immutable string fields that are committed onchain within the market creation transaction:

- `_marketQuestion` — A string representing the exact market question.
- `_marketSource` — The authoritative source(s) used to verify the market's resolution. This field may include URLs referencing the precise data sources that must be consulted.
- `_additionalInfo` — A detailed description of the market and its resolution rules.

Because these fields are stored as onchain strings, they cannot be modified once a market has been initialized. 

This immutability provides strong guarantees around the subject and scope of disputes, ensuring that market resolution is not vulnerable to retroactive rule changes or reinterpretation.

All of the market defining strings can be easily identified and read on Basescan. Below is an example market creation transaction for Fed interest rates in November 2024:

![](/img/markets.jpg)

In addition to these descriptive fields, each market is configured with a set of parameters derived from its inherent properties:

- `_endOfTrading` — The earliest timestamp at which a market may be resolved. This does not represent a trading cutoff; trading may continue indefinitely, including after resolution.
- `_yesNoTokenCap` — An optional discretionary cap on the total supply of YES and NO tokens for the market.
- `_rewardToken` — The address of the token used to incentivize resolvers and disputers for the market (either TRUE or USDC).
- `_rewardAmount` — The amount of reward tokens distributed upon successful market resolution.

