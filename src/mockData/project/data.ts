type ProjectType = {
  title: string;
  period: string;
  company: string;
  description: string;
  images: {
    url: string;
    thumbnail?: boolean;
  }[];
};

type ProjectDataType = {
  id: number;
  projects: ProjectType[];
};

export const ProjectData: ProjectDataType[] = [
  {
    id: 1,
    projects: [
      {
        title: '발전소 모니터링 개발',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 \n산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
      {
        title: '디자인 시스템 개발',
        period: '2023.12 - 2024.06',
        company: '원프레딕트',
        description:
          '- 프로젝트 설명 \n디자이너가 피그마로 컴포넌트를 만들면 토큰을 통해 컴포넌트 개발 \n\n-담당업무\nPopover, Tooltip, List, Menu, Loading 라이브러리 없이 개발\n리스트나 메뉴의 경우 사용자가 여러 Depth로 된 메뉴를 키보드 방향키로 움직일 수 있게 UX\n생각하여 개발 하였습니다.\n팝오버나 툴팁의 경우, 스크롤과 리사이즈를 고려 하여 개발 하였고, 화면 끝에 닿았을때 플립이 되게 개발 하였습니다.\n\n- 사용기술\nReact, Typescript, Vite, vanilla-extract, MUI',
        images: [],
      },
      {
        title: '발전소 모니터링',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 \n산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
      {
        title: '발전소 모니터링',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 \n산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
      {
        title: '발전소 모니터링',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 \n산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
      {
        title: '발전소 모니터링',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 \n산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
      {
        title: '발전소 모니터링',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 \n산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
      {
        title: '발전소 모니터링',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 \n산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
      {
        title: '발전소 모니터링',
        period: '2022.11 - 2024.06',
        company: '원프레딕트',
        description:
          '발전소에 들어가는 대형터빈의 데이터와 차트 및 이미지를 React로 화면에 렌더링 산업 발전소에 현장 특수한 상황을 고려하여 기획에 맞게 개발 했습니다.\n각종 차트들을 고객과 PM의 요구사항에 맞게 개발\n레거시 코드를 서버드리븐UI로 화면 Layout \n에 대한 JSON을 백엔드 팀에게 제공하고 그에 맞는 화면을 개발 하였습니다.\nLayout에 맞는 데이터를 number 코드로 된 ID를 모아서 서버에 요청을 보내서\nLayout 내부의 데이터를 효과적으로 갱신할 수 있게 개발 하였습니다.',
        images: [
          {
            url: '/assets/images/project/turbo1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/turbo2.webp',
          },
          {
            url: '/assets/images/project/turbo3.webp',
          },
          {
            url: '/assets/images/project/turbo4.webp',
          },
        ],
      },
    ],
  },
];
