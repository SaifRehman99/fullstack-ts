export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type SupportData = {
  url: string;
  text: string;
};

export type ApiData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: SupportData;
};
