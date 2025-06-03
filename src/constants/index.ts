import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from './types';

export const META = {
  title: 'movester',
  siteName: 'MOVESTER | 뭅스터',
  description: '바쁜 일상 속 나를 위한 움직임, 뭅스터와 함께해요.',
  keyword: ['뭅스터', '스트레칭'],
  url: 'https://movester.kr',
  ogImage: '/logo.png',
} as const;
export interface ITotalComboxType<T> {
  name: string;
  id: T | 'total';
}
export interface IComboBoxType<T> {
  name: string;
  id: T;
}

export interface ICategoryIconBoxType<T> {
  name: string;
  id: T;
  img: string;
}

export const STRETCHING_TOTAL_CATEGORY: ICategoryIconBoxType<
  StretchingMainCategoryType | StretchingSubCategoryType
>[] = [
  {
    name: '상체 전체',
    id: 'UPPER_BODY',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_upperBody.PNG',
  },
  {
    name: '목/가슴/어께',
    id: 'NECK',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_neck.png',
  },
  {
    name: '팔/손/손목',
    id: 'ARM',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_arm.PNG',
  },
  {
    name: '등/몸통',
    id: 'BACK',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_back.PNG',
  },
  {
    name: '하체 전체',
    id: 'LOWER_BODY',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_lowerBody.PNG',
  },
  {
    name: '고관절/둔근',
    id: 'HIP_JOINT',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_hipJoint.PNG',
  },
  {
    name: '종아리/발목/발',
    id: 'CALF',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_calf.PNG',
  },
  {
    name: '무릎/허벅지',
    id: 'KNEE',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/category_knee.PNG',
  },
];

export const STRETCHING_MAIN_CATEGORY: IComboBoxType<StretchingMainCategoryType>[] =
  [
    { name: '상체', id: 'UPPER_BODY' },
    { name: '하체', id: 'LOWER_BODY' },
  ];

export const UPPER_BODY_CATEGORY: IComboBoxType<StretchingSubCategoryType>[] = [
  { name: '목/가슴/어께', id: 'NECK' },
  { name: '팔/손/손목', id: 'ARM' },
  { name: '등/몸통', id: 'BACK' },
];

export const LOWER_BODY_CATEGORY: IComboBoxType<StretchingSubCategoryType>[] = [
  { name: '고관절/둔근', id: 'HIP_JOINT' },
  { name: '종아리/발목/발', id: 'CALF' },
  { name: '무릎/허벅지', id: 'KNEE' },
];

export const EFFECT_CATEGORY: ICategoryIconBoxType<StretchingEffectType>[] = [
  {
    name: '통증완화',
    id: 'RELIEF_PAIN',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_reliefPain.PNG',
  },
  {
    name: '자세개선',
    id: 'IMPROVE_POSTURE',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_improvePosture.PNG',
  },
  {
    name: '근육이완',
    id: 'RELAX_MUSCLE',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_relaxMuscle.PNG',
  },
  {
    name: '혈액순환',
    id: 'BLOOD_CIRCULATION',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_bloodCirculation.PNG',
  },
  {
    name: '거북목 완화',
    id: 'RELIEF_TURTLE_NECK',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_turtleNeck.PNG',
  },
  {
    name: '라운드숄더 완화',
    id: 'RELIEF_ROUND_SHOULDER',
    img: 'https://mymovester-product.s3.ap-northeast-2.amazonaws.com/icons/effect_roundShoulder.PNG',
  },
];

export const LIST_ORDER_CATEGORY: IComboBoxType<StretchingListOrderFilter>[] = [
  { name: '최신순', id: 'RECENT' },
  { name: '조회순', id: 'VIEW' },
];

export const STRETCHING_MAIN_SEARCH_CATEGORY: ITotalComboxType<StretchingMainCategoryType>[] =
  [{ name: '전체', id: 'total' }, ...STRETCHING_MAIN_CATEGORY];

export const UPPER_BODY_SEARCH_CATEGORY: ITotalComboxType<StretchingSubCategoryType>[] =
  [{ name: '전체', id: 'total' }, ...UPPER_BODY_CATEGORY];

export const LOWER_BODY_SEARCH_CATEGORY: ITotalComboxType<StretchingSubCategoryType>[] =
  [{ name: '전체', id: 'total' }, ...LOWER_BODY_CATEGORY];
