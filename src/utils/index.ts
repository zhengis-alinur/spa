export const wait = (milliSeconds: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), milliSeconds));