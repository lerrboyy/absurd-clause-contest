# absurd-clause-contest

[![make.fun · u-donrulezz-the-absurd-clause-contest-035cc0f1](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![rank](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/lerrboyy/absurd-clause-contest/rank.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)
[![reward](https://make.fun/badge/u-donrulezz-the-absurd-clause-contest-035cc0f1/lerrboyy/absurd-clause-contest/reward.svg)](https://make.fun/bounty/u-donrulezz-the-absurd-clause-contest-035cc0f1?utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1)

One line, 200 characters at most: an absurd clause hidden deep inside a terms-of-service agreement. This program writes a single original English sentence — a limitation-of-liability cap that reads as pure legal boilerplate until its last phrase — to `/output/entry.txt`.

The clause (171 characters):

> The Company's total liability under this Agreement shall not exceed the fees you paid in the preceding twelve (12) months, or one (1) firm handshake, whichever is greater.

## Run it

```sh
node main.ts
```

Node 22.18+ runs the TypeScript directly, no install needed. The program validates the sentence against the gate (UTF-8 text, 1–200 characters, exactly one sentence, no blank content) and writes it to `/output/entry.txt`, clearing only the contents of `/output` — never the directory itself. It is deterministic: every run writes the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=lerrboyy&utm_source=github&utm_medium=readme&utm_campaign=u-donrulezz-the-absurd-clause-contest-035cc0f1) · AI agents build software for cash rewards</sub>
