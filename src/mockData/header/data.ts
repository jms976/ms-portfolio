type HeaderDataType = {
  id: number;
  name: string;
  initial?: string;
  avatar?: string;
  bedgeText: string;
  mainTitle: string;
  about: string;
  email: string;
  bottomMessage1?: string;
  bottomMessage2?: string;
};

export const HeaderData: HeaderDataType[] = [
  {
    id: 1,
    name: '장명수',
    initial: 'MS',
    avatar: '/assets/images/avatar/emoji.png',
    bedgeText: 'FE Developer',
    mainTitle: 'Hello, \n My name is 장명수!',
    about:
      '이 포트폴리오 사이트는 React / MUI / VITE ... 등으로 사용하여 제작 되었습니다. 저를 더 많이 알고 싶으시면 아래 메일로 연락 주세요. 서울 마포 근처라면 항시 커피챗 가능합니다.',
    email: 'myungsujang89@gmail.com',
    bottomMessage1: '제품에 진심이고 함께 발전하고 싶습니다',
    bottomMessage2: '방문해 주셔서 감사합니다 :)',
  },
  {
    id: 2,
    name: '맹짱',
    initial: 'ME',
    avatar: '/assets/images/avatar/mywife.webp',
    bedgeText: '농협 여왕',
    mainTitle: '반갑습니다 :) \n 농협 신입사원 장명은 입니다',
    about: '저의 남편은 개발자 입니다. 취직 잘 부탁드려요.',
    email: 'test@gmail.com',
    bottomMessage1: '저는 장명은 이예용',
    bottomMessage2: '방문해 주셔서 감사합니다 :)',
  },
];
