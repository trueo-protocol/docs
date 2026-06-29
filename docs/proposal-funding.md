---
sidebar_position: 7
---

# Proposal Funding

The funding phase is the final step before a market becomes tradable.

Instead of launching immediately, every proposed market enters a funding phase where contributors collectively solve three key objectives:

- Determine whether the market should launch (filtering spam or low-quality markets).
- Clear the opening odds.
- Seed initial liquidity.

By funding a proposal you help achieve the objectives above, effectively acting as a pre-launch "market maker."

## Choose your contribution

Use the funding amount field to decide how much TYD you would like to contribute.

This amount determines:

- Your contribution toward market graduation.
- The size of your initial market position.
- Your influence on the market's opening probability.

![Funding amount field with TYD balance and quick-add buttons](/img/funding-1-amount.jpg)

## Adjusting outcome exposure

Next, choose how much exposure you want to each outcome. The slider determines how many shares you receive of each outcome:

- Move toward **YES** to receive more YES shares.
- Move toward **NO** to receive more NO shares.
- Leave the slider centered to receive equal amounts of both positions.

Your contribution always mints both YES and NO shares, even if your funding split fully allocates to only one side. The opposing tokens to your split are seeded as initial liquidity.

This process decides how exposed you will be to either outcome based on what you think the fair probability of the underlying event should be. For example, if you think the starting odds should reflect an 85% chance for YES, then you would adjust your contribution split such that its impact on the odds projects an 85% starting probability.

![Split allocation slider set to 3.7 Yes / 6.3 No](/img/funding-2-split.jpg)

> **Tip:** Enable **Auto-Tune** to target a specific launch probability instead of manually selecting a YES/NO split. This feature automatically adjusts your contribution split based on your specified target probability.

## Preview the opening probability

Before confirming your contribution, you can see exactly how it affects the market. This preview updates in real time as you adjust either:

- your funding amount, or
- your YES/NO allocation.

When Auto-Tune is enabled, adjusting the target probability automatically recalculates your allocation.

![Projected market odds showing 50% Yes current shifting to 37% Yes after deposit](/img/funding-3-odds.jpg)

## Monitor graduation progress

Every proposal must reach its funding threshold before trading begins. The progress bar shows:

- Current funding
- Funding target
- Your contribution's impact

Once the funding threshold is reached, the proposal graduates and the market becomes tradable.

![Deposit summary preview showing total deposit and funding progress bar](/img/funding-4-summary.jpg)

## How your contribution is used

The following example walks through a single $10 contribution that lands the market at a 37% opening probability.

**You receive (upon graduation):**

- YES allocation: 3.7 shares
- NO allocation: 6.3 shares

**Market liquidity seeded:**

- YES shares added as ranged liquidity between $0.37 – $1.00 (6.3 shares)
- NO shares added as ranged liquidity between $0.63 – $1.00 (3.7 shares)

**Launch impact:**

- Market odds: **50% → 37% YES**
- Funding progress: **$0 → $10**

![How your contribution is used breakdown: tokens received, liquidity seeded, launch impact, and launch fee](/img/funding-5-contribution.jpg)

Your contribution accomplishes all three objectives simultaneously: it establishes your initial market position, bootstraps launch liquidity, and helps determine the market's opening probability.

## Launch fee

A 5% launch fee is charged **only if the proposal successfully graduates**. If a proposal does not reach its funding threshold, no launch fee is charged.

Your funding allocation (shares and liquidity) will be displayed on your portfolio page once the market graduates. From this point you can trade in and out of your positions, or remove your liquidity freely.
