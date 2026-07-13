---
sidebar_position: 12
---

# Bonds and Slashing

Bond amounts are configured per market. Current manager defaults are 250 TYD for resolution, 250 TYD for the initial dispute, and 750 TYD for escalation to TRUE holders. Each market snapshots these values when it is initialized, so read its `resolverBondAmount()`, `disputerBondAmount()`, and `escalatorBondAmount()` before acting. Older markets may retain earlier defaults.

## Accepted Disputes

When a dispute is accepted, the Oracle Council evaluates both the correctness of the proposed resolution and whether the resolver acted in good faith. One of four outcomes may occur:

1. Resolver slashed; market resolves to a different outcome
2. Resolver not slashed; market resolves to a different outcome
3. Resolver slashed; market resolution is reset
4. Resolver not slashed; market resolution is reset

If the real-world event has conclusively resolved and the resolver proposed an incorrect outcome, the Oracle Council will select either (1) or (2). If the event has not yet resolved in the real world, the Council will select either (3) or (4).

Notably, in two of these cases the resolver is not slashed. This flexibility exists to avoid over-penalizing participants who act in good faith, even when their proposed resolution is premature or incorrect. This level of granularity is essential for enabling the oracle to operate credibly and at scale.

## Rejected Disputes

If a dispute is rejected, the Oracle Council may choose between two outcomes:

- Uphold the proposed resolution and slash the disputer
- Uphold the proposed resolution without slashing the disputer

The same philosophy of restraint applies to disputers as to resolvers. Trueo is designed to reward honest participation, not punish good-faith challenges—even when those challenges ultimately fail.

## Escalated Disputes

If a participant disagrees with an Oracle Council decision, the dispute may be escalated by posting the market's `escalatorBondAmount()`. Under current manager defaults, this is 750 TYD. Older markets may have snapshotted an earlier 2,500 TYD amount.

Once escalated, TRUE token holders arbitrate the dispute. Token holders vote on:

- The correct market outcome
- The appropriate slashing conditions for all involved parties

Under normal conditions, TRUE holders are expected to largely defer to the Oracle Council's judgment. The Oracle Council is a governance-selected body specialized in prediction market resolution, and its decisions are expected to reflect the market's original intent and optimal outcome.

The token holder vote primarily serves as a safeguard against Oracle Council collusion, manipulation, or failure. Absent new evidence or clear misconduct, TRUE holders should generally align with the Oracle Council's determination.

As with earlier stages, if an escalated dispute is deemed to have merit, the market's escalation bond should not be slashed—regardless of whether the dispute ultimately succeeds.

## Final Verdict: Attesters

Attesters are the final arbiters of disputes within Trueo. They are provably reputable individuals whose credibility is independent of the protocol, selected based on demonstrated onchain governance participation, social reputation, or industry experience.

Once admitted, attesters may opt into jury duty and be randomly selected to resolve escalated disputes.

Escalation to attesters may only be triggered by a wallet controlling at least 250,000 TRUE tokens. During the genesis phase of the protocol, no additional bond is required to initiate an attester vote.

Rather than relying solely on large bonds for spam resistance, Trueo uses token ownership requirements to gate access to attester escalation.

At this stage, attesters do not rule on an additional bond. They determine:

- The final market outcome
- The appropriate slashing conditions for prior dispute participants

## Precedence and Deference in Arbitration

The primary role of attesters is to prevent token holder collusion or manipulation—not to reinterpret market intent. Market intent is principally assessed by the Oracle Council.

Accordingly, under healthy protocol conditions:

- Attesters should generally defer to TRUE holder decisions
- TRUE holders should generally defer to Oracle Council decisions

This principle of hierarchical deference mirrors long-standing judicial systems, where higher courts typically uphold lower court rulings absent clear error or deviation from accepted norms. Trueo adopts this model to balance efficiency, decentralization, and credible neutrality throughout the dispute resolution process.



