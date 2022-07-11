export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function formattedDate(date: Date): string {
  return date.toLocaleDateString("en-us");
}

export function differenceInDays(dateLeft: Date, dateRight: Date): number {
  const diffTime = Math.abs(dateLeft.getTime() - dateRight.getTime());
  const differenceInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

export function buildStreak(
  date: Date,
  overrideDefaults?: Partial<Streak>
): Streak {
  const defaultStreak: Streak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };

  return {
    ...defaultStreak,
    ...overrideDefaults,
  };
}

export function updateStreak(storage: Storage, streak: Streak): void {
  storage.setItem(KEY, JSON.stringify(streak));
}

export const KEY = "streak";
