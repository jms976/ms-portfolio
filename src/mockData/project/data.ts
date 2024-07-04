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
        title: '발전소 모니터링 웹 개발',
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
        title: '챗봇 빌더 화면 개발',
        period: '2020.04 - 2022.11',
        company: '엠비아이솔루션',
        description:
          '- 프로젝트 설명 \n카카오톡이나 웹채팅에서 룰베이스형 시나리오 제작을 위한 캔버스 및 대시보드 제작,\nDB에 저장한 시나리오를 바탕으로 버튼이나 사용자 입력을 통한 발화 발생시 해당 블록을 볼수있음\n실제 채팅을 바탕으로 통계데이터 그래프로 화면 생성\n\n- 담당업무\n전반적 시나리오 생성에 사용자 에디터 화면 제작 생성\n시나리오 제작을 위한 Restful API 생성 및 Redux 상태 관리 생성\n\n- 사용기술\n프래임워크 : React, Redux, styled-components, react-table, recharts, react-diagrams',
        images: [
          {
            url: '/assets/images/project/bot1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/bot2.webp',
          },
          {
            url: '/assets/images/project/bot3.webp',
          },
          {
            url: '/assets/images/project/bot4.webp',
          },
        ],
      },
      {
        title: '챗봇 발화 API 개발',
        period: '2020.04 - 2022.11',
        company: '엠비아이솔루션',
        description:
          '- 프로젝트 설명\n챗봇 에디터를 통해 만들어진 챗봇 블록들을 End-User 채팅창에 전송\nEnd-User 사용자가 발화한 채팅을 바탕으로 서버에 저장및 새로운 블록 전송\n\n- 담당업무\n주로 메인 서버개발자가 개발한 소스에서 API추가 및 운영에 쓰이는 특수한 기능을 추가 개발\n새로 생성된 데이터의 스키마 생성\n(봇 사용시 변수 생성하여 저장, 변수의 조건에 따라 블록을 분기하는 로직 개발)\n\n-사용기술\nJavascript, Typescript, Mongodb, Express',
        images: [
          {
            url: '/assets/images/project/chat1.webp',
          },
          {
            url: '/assets/images/project/chat2.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/chat3.webp',
          },
        ],
      },
      {
        title: '카카오 설문조사용 문답형 웹 개발',
        period: '2022.04 - 2022.10',
        company: '엠비아이솔루션',
        description:
          '- 프로젝트 설명\n챗봇 진행중 url로 설문지 링크 제공, 에디터에서 설문지 제작 및 설문지 통계활용\n\n- 담당업무\n설문지 내용을 넣을 수 있는 시나리오 커스텀 진행\n설문지를 실제 서버에서 전환 할 수 있는 링크로 변경 설문완료시 서버를 통해 DB에 저장\n저장된 내용으로 실 사용자가 문답한 내용 및 통계 화면으로 출력\\nn- 사용기술\n언어 : Javascript, Typescript, HTML, CSS, MongoDB\n프래임워크 : React, Redux-Toolkit, React-Query, styled-components, Express',
        images: [
          {
            url: '/assets/images/project/survey1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/survey2.webp',
          },
          {
            url: '/assets/images/project/survey3.webp',
          },
          {
            url: '/assets/images/project/survey4.webp',
          },
        ],
      },
      {
        title: '챗봇 에디터 백오피스 개발',
        period: '2021.08 - 2022.11',
        company: '엠비아이솔루션',
        description:
          '- 프로젝트 설명\n챗봇 에디터를 사용하는 고객들을 관리할 백오피스 제작\n사용자 설정 및 에디터 블록형태 생성\n\n- 담당업무\n서버 및 프론트 전반적으로 기획 단계부터 제작\n\n- 사용기술 : Javascript, Typescript, HTML, CSS, MongoDB, React, Redux-Toolkit, React-Query, styled-components, Express, Google Oauth',
        images: [
          {
            url: '/assets/images/project/back1.webp',
            thumbnail: true,
          },
          {
            url: '/assets/images/project/back2.webp',
          },
          {
            url: '/assets/images/project/back3.webp',
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
