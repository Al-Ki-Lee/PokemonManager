export interface RequestGeneration {
  count: number;
  next: string | null;
  previous: string | null;
  results: Generation[];
}
