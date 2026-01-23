---
sidebar_position: 8
---

# Optimistic Oracle

Trueo uses a dispute resolution implementation which follows the [Truth Oracle](https://truth-oracle.gitbook.io/truth-oracle) framework.

Like most optimistic oracles, Trueo treats proposed resolutions as valid by default unless they are disputed. If a proposed resolution is challenged, the protocol's enshrined oracle system is activated. This system features a multi-stage escalation process that progressively incorporates broader and more intersubjective perspectives.

An initial dispute may be filed permissionlessly during the challenge window by anyone willing to post a bond equal to the resolver's bond. Once disputed, the Oracle Council arbitrates the resolution by selecting an outcome and determining the slashing conditions for both the resolver's and disputer's bonds.

Following an Oracle Council decision, a new challenge window opens. During this period, the outcome may be disputed again by posting a larger bond, escalating the decision to TRUE token holders. TRUE holders vote on both the correct market outcome and the associated slashing conditions.

If the community remains dissatisfied with the token holder decision, the dispute may be escalated one final time to the highest arbiters in the protocol: Attesters. 

Attesters are a pool of provably reputable individuals. When escalation reaches this stage, a random subset of 11 attesters is selected to render a final verdict on the market's true outcome, as well as all applicable slashing conditions.

## Oracle Progression

### Stage 0 — Resolution Proposal

- A resolver proposes an outcome and posts a $250 bond.

### Stage 1 — Initial Dispute (12-hour challenge window)

- A participant disputes the proposal by posting an equal bond.

### Stage 2 — Oracle Council Arbitration

- The Oracle Council votes on the market outcome.
- The Oracle Council determines slashing conditions for both resolver and disputer.

### Stage 3 — Token Holder Escalation (12-hour challenge window)

- A participant escalates the dispute by posting a $2,500 bond.

### Stage 4 — TRUE Holder Vote

- TRUE holders vote on the market outcome.
- TRUE holders vote on slashing conditions.

### Stage 5 — Final Escalation (12-hour challenge window)

- A participant holding at least 3,500 TRUE tokens disputes the token holder decision.

### Stage 6 — Attester Verdict

- 11 attesters are randomly selected from the attester pool.
- Non-responsive attesters are replaced.
- Attesters vote on the final market outcome.
- Attesters vote on slashing conditions for the resolver, first disputer, and second disputer.

![](/img/optimistic-oracle.png)



