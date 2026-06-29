---
sidebar_position: 9
---

# Resolving markets

Once a market has been created, it may be resolved at any time after the criteria defined in its market description have been met. 

Each market includes explicit resolution rules, which are evaluated against the sources specified in the _marketSource field to determine whether the market is eligible for resolution.

Note: Markets should be resolved primarily using their listed sources. However, alternative sources may be used if the listed sources are unavailable, faulty, or superseded by new, verifiable information revealed through a dispute.

When the resolution criteria have been satisfied, any participant may permissionlessly propose a resolution by posting a bond behind their chosen outcome. This action initiates a 12-hour challenge window during which the proposed resolution may be disputed by others.

If no valid disputes are raised and the resolution criteria are met, the market finalizes to the proposed outcome at the end of the challenge period.

Resolvers who correctly finalize a market to YES or NO receive a protocol-defined reward specified by the market’s _rewardAmount. Both the resolver’s bond and reward are automatically released in the first redemption transaction, which may be executed by any participant redeeming YES or NO tokens.

The resolver role is fully permissionless. Anyone monitoring the real-world events relevant to a market may post a bond and propose a resolution once the market question has been answered.

![](/img/resolving-markets.png)

In the vast majority of cases, markets resolve to either YES or NO. In rare circumstances—such as event cancellation, a draw, or a “push”—a cancelled/draw outcome may be proposed. If a market is successfully cancelled, all YES and NO tokens are redeemable at their minted value of $0.50 each.

Because cancellation eliminates upside for participants whose tokens traded above $0.50, cancelled or draw outcomes should be proposed only in narrowly defined circumstances, such as true event cancellation or an unambiguous draw.

