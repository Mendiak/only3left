export type Pattern = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  severity: 1 | 2 | 3 | 4 | 5;
  psychology: string[];
  examples: string[];
  ethicalAlternative: string;
  origin: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
};
