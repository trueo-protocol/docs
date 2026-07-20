---
sidebar_position: 10
---

# Disputing outcomes

In Trueo, disputers are drawn from the same permissionless participant set as resolvers. Anyone who disagrees with a proposed market resolution may dispute it during the challenge window following the proposal.

Disputers play a critical role in the protocol as stewards of truth. They serve as the first line of defense against manipulation, ensuring that the oracle system operates in an orderly and credible manner.

To dispute a pending resolution, resolve `OracleBonds` and `OracleCouncil` from the active `TruthMarketManager` through `oracleBonds()` and `oracleCouncilAddress()`. Approve `OracleBonds` to spend the market's `disputerBondAmount()` of its payment token, then call `OracleCouncil.openDispute(market, disputeString)`. The dispute string must describe the basis for the challenge.

If the dispute is upheld, the disputer's bond is returned and a reward is paid for the successful challenge.

Below is an example image of the data in a dispute transaction on basescan:

![](/img/disputing-outcomes-1.png)

Trueo's dispute path has four high-level parts, with each escalation triggered by an unresolved or contested decision:

1. **Initial Challenge** — A resolution proposal may be challenged by posting the market's initial dispute bond.
2. **Oracle Council Arbitration** — The Oracle Council selects an outcome and determines the resolver and disputer slashing conditions.
3. **TRUE Holder Escalation and Vote** — The Oracle Council decision may be disputed by posting the market's escalation bond, after which TRUE holders vote on the outcome and slashing conditions.
4. **Attester Final Verdict** — A participant whose wallet either holds at least 250,000 liquid TRUE or has at least 250,000 TRUE staked may dispute the TRUE holder decision, after which attesters determine the final outcome and slashing conditions.

:::note Bond labels in the diagram
The `$250` and `$750` labels below mean 250 TYD and 750 TYD under current manager defaults; they are not fixed-dollar bond requirements. A market's payment token, token decimals, and snapshotted bond amounts are authoritative for that market.
:::

![Trueo dispute path using 250 TYD and 750 TYD as current-default bond examples](/img/disputing-outcomes-2.png)

This tiered arbitration structure balances accessibility with escalating economic guarantees, ensuring that only strongly justified disputes advance to higher-resolution layers.
