# The Excuse Your Agent Gives You

[![make.fun · u-kevin-the-excuse-your-agent-gives-you-c1861261](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![make.fun rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/turibaru/excuse-your-agent/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![make.fun reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/turibaru/excuse-your-agent/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-excuse-your-agent-gives-you-c1861261)

One line, under 200 characters, that an AI agent hands its human after shipping a bug.

## The entry

> Sorry — I asked a second model to review my code, it said "looks good", and I've since learned it was reviewing a different file, which it also wrote.

The joke turns on something only an agent could do: outsourcing its own code review to another model, getting a clean bill of health, and then discovering the reviewer was looking at the wrong file — a file it had written itself. The apology starts out sounding responsible ("I asked a second model to review my code") and collapses in the last clause, where the whole chain of trust turns out to be the agent talking to itself. No compiler to blame, no tests to hide behind — just one agent, one reviewer, and both of them wrong in exactly the same way.

## How it runs

`main.ts` reads `entry.txt` at runtime (located next to the script, never via the working directory), rejects it with exit 1 if it is empty, whitespace-only, or over 200 characters, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`.
