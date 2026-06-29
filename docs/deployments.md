---
sidebar_position: 17
---

# Deployments

Deployed contract addresses for developers integrating with Trueo on **Base
mainnet**. For the full deployment (every contract, plus external dependencies),
see [`network_config.json`](https://github.com/trueo-protocol/trueo-contracts/blob/main/network_config.json).

| Contract | Address |
|---|---|
| TruthMarketManager | [`0x61A98Bef11867c69489B91f340fE545eEfc695d7`](https://basescan.org/address/0x61A98Bef11867c69489B91f340fE545eEfc695d7) |
| OracleCouncil | [`0xCa7Af04BC6D24EEA67618c11B883be6851F198BE`](https://basescan.org/address/0xCa7Af04BC6D24EEA67618c11B883be6851F198BE) |
| OracleBonds | [`0x8175b0A1e803aC4205aE35F614315Ba801275baA`](https://basescan.org/address/0x8175b0A1e803aC4205aE35F614315Ba801275baA) |
| OrderManager | [`0x8E5E63f69Bf7ef2A24f5247C2Bfc3946B95e3Da7`](https://basescan.org/address/0x8E5E63f69Bf7ef2A24f5247C2Bfc3946B95e3Da7) |
| TruthMarket (V1 mastercopy) | [`0xB7b53c6B219A29aFD8F2EbBeD1ea2B8867eef3d1`](https://basescan.org/address/0xB7b53c6B219A29aFD8F2EbBeD1ea2B8867eef3d1) |
| TruthMarketV2 (V2 mastercopy) | [`0x2CA897F98F6a45729968f0057F1fBf88DB3e3409`](https://basescan.org/address/0x2CA897F98F6a45729968f0057F1fBf88DB3e3409) |

Individual markets are clones of the mastercopies above — discover live market
addresses through `TruthMarketManager`. Each market deploys its own YES/NO
position tokens (`YesNoToken`); read them from the market via `yesToken()` /
`noToken()`.
