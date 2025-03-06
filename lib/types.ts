export interface Comment {
  _id: string;
  game: string;
  user_name: string;
  content: string;
  status: "1" | "2";
  created_at: string;
  parent_id: string | null;
  root_id: string | null;
}

export type GroupedComments = {
  [key: string]: {
    main: Comment;
    replies: Comment[];
  };
};

export interface Codes {
  _id: string;
  game: string;
  code: string;
  reward?: string;
  status: "1" | "2";
  update: string;
  url: string;
}

export interface SiderBarCodes {
  _id: string;
  game: string;
  code: string;
  reward?: string;
  status: "1" | "2";
  update: string;
  url: string;
  imageUrl: string;
}

