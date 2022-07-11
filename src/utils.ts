export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function formattedDate(date: Date): string {
  return date.toLocaleDateString("en-us");
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
