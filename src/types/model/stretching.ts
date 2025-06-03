export interface StretchingItem {
  id: number;
  title: string;
  mainCategory: string;
  subCategory: string;
  effect: string;
  createdAt: string;
  imageUrl: string;
}

export interface StretchingListResponse {
  total: number;
  stretchingList: StretchingItem[];
}
