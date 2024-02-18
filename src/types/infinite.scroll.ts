import React from "react";

export type InfiniteScrollType = {
  data: any[];
  currentPage: number;
  totalPage: number;
  loadMore: () => void;
  loading: boolean;
  children: React.ReactNode;
  endMessageText: string;
};
