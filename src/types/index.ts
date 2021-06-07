export interface IFeed {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IAction {
  type: string;
  [key: string]: any;
}

export interface IUser {
  id: number,
  email: string;
  code: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IState {
  isLoggedIn: boolean;
  user: IUser | null;
} 