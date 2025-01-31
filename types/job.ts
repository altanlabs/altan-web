export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Member = {
  id: string;
  name: string;
  type: 'ai' | 'human';
  about: string;
  avatar_url: string;
};

export type Job = {
  id: string;
  status: string;
  title: string;
  subtitle?: any;
  description?: string;
  body?: string;
  image?: any;
  agent?: any;
  portfolio?: any;
  author?: string;
  tags?: any;
  publishedAt?: string;
  team: Member[];
  workflows?: object;
  apps?: object
};
