# `@mzelinka17/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo - written in TypeScript and meant for the browser (uses `localstorage`).

## Install

```shell
npm install @mzelinka17/streak-counter
```

## Usage

```typescript
import { streakCounter } from "@mzelinka17/streak-counter";

const today = new Date();
const streak = streakCounter(localStorage, today);
// streak returns an object:
// {
//   currentCount: 1,
//   lastLoginDate: "11/11/2021",
//   startDate: "11/11/2021"
// }
```
