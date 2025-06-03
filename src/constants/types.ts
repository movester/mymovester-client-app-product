export type colorsType =
  | "r000"
  | "softPrimaryColor"
  | "vividPrimaryColor"
  | "f300"
  | "f200"
  | "f100"
  | "f000"
  | "g300"
  | "g200"
  | "g100"
  | "g000";

export type sizesType = "xs" | "sm" | "md" | "lg" | "xl";

export type variantsType = "primary" | "secondary";

export type typographyType =
  | "title1"
  | "heading1"
  | "heading2"
  | "heading3"
  | "body1"
  | "body2"
  | "body3"
  | "caption";

export type StretchingMainCategoryType = "UPPER_BODY" | "LOWER_BODY";

export type StretchingSubCategoryType =
  | "NECK"
  | "ARM"
  | "BACK"
  | "HIP_JOINT"
  | "CALF"
  | "KNEE";

export type StretchingEffectType =
  | "RELIEF_PAIN"
  | "IMPROVE_POSTURE"
  | "RELAX_MUSCLE"
  | "BLOOD_CIRCULATION"
  | "RELIEF_TURTLE_NECK"
  | "RELIEF_ROUND_SHOULDER";

export type StretchingListOrderFilter = "RECENT" | "VIEW";

export type StretchingQueryItemType = {
  id: number;
  title: string;
  mainCategory: StretchingMainCategoryType;
  subCategory: StretchingSubCategoryType;
  createdAt: string;
  effect: StretchingEffectType;
  imageUrl: string;
};

export type StretchingDetailQueryItemType = {
  id: number;
  title: string;
  mainCategory: StretchingMainCategoryType;
  subCategory: StretchingSubCategoryType;
  effectList: StretchingEffectType[];
  imageList: string[];
  techniqueList: string[];
  collect: number;
  set: number;
  precautionList: string[];
  videoUrl: string;
  isLike: false;
};

export type myPageTabType = "PROFILE" | "LIKES" | "EDIT";
