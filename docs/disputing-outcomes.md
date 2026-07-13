---
sidebar_position: 10
---

# Disputing outcomes

In Trueo, disputers are drawn from the same permissionless participant set as resolvers. Anyone who disagrees with a proposed market resolution may dispute it during the challenge window following the proposal.

Disputers play a critical role in the protocol as stewards of truth. They serve as the first line of defense against manipulation, ensuring that the oracle system operates in an orderly and credible manner.

To dispute a pending resolution, a participant posts a bond equal to the resolver's bond and calls the `openDispute` function on the unresolved market. The disputer must also submit a `_disputeString` describing the basis for the dispute.

If the dispute is upheld, the disputer's bond is returned and a reward is paid for the successful challenge.

Below is an example image of the data in a dispute transaction on basescan:

![](/img/disputing-outcomes-1.png)

Trueo supports a multi-stage arbitration process, with each escalation triggered by an unresolved or contested dispute:

1. **Initial Challenge** — A resolution proposal may be challenged by posting the market's initial dispute bond.
2. **Oracle Council Arbitration** — The Oracle Council selects an outcome and determines the resolver and disputer slashing conditions.
3. **TRUE Holder Escalation and Vote** — The Oracle Council decision may be disputed by posting the market's escalation bond, after which TRUE holders vote on the outcome and slashing conditions.
4. **Attester Final Verdict** — A wallet controlling at least 250,000 TRUE may dispute the TRUE holder decision, after which attesters determine the final outcome and slashing conditions.

![](/img/disputing-outcomes-2.png)

*The diagram's 250 and 750 bond figures show current TYD-denominated manager defaults. A market's snapshotted bond amounts are authoritative for that market.*

This tiered arbitration structure balances accessibility with escalating economic guarantees, ensuring that only strongly justified disputes advance to higher-resolution layers.



