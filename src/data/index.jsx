export const portPolioData = {
   // 사이드 바
   sidebar: [
      { key: 'profile', value: 'Profile' },
      { key: 'project', value: 'Project' },
   ],
   // 프로필
   picture_data: [
      { key: 0, value: '/portpolio/images/profile/profile_picture_1.jpg' },
      { key: 1, value: '/portpolio/images/profile/profile_picture_2.jpg' },
      { key: 1, value: '/portpolio/images/profile/profile_picture_3.jpg' },
   ],
   skill_data: [
      { keyword: 'HM', lang: 'HTML5', color: 'green', explanation: 'HTML5등 DOCTYPE을 이해하고 문서에 맞춰 작업이 가능합니다.' },
      {
         keyword: 'CS',
         lang: 'CSS3',
         color: 'blue',
         explanation: '어떤 디자인 시안이 와도 CSS3를 이용하여 100% 퀄리티로 구현할 수 있습니다.',
      },
      {
         keyword: 'SC',
         lang: 'SCSS',
         color: 'blue',
         explanation: 'SCSS를 이용하여 효율적이며 코드의 재사용성을 높고 가독성이 높은 CSS를 작성할 수 있습니다.',
      },
      {
         keyword: 'JS',
         lang: 'Javascript',
         color: 'green',
         explanation: 'Javascript 언어의 기본문법과 사용법, 함수, 객체 등의 개념을 이해하여 동적인 프로그래밍을 할 수 있습니다.',
      },
      { keyword: 'JQ', lang: 'Jquery', color: 'red', explanation: '다양한 메소드를 사용해 기능을 구현할 수 있습니다..' },
      {
         keyword: 'ES',
         lang: 'ES6',
         color: 'green',
         explanation: 'let, const, 스프레드 연산자, Arrow Function과 같은 ES6 기초를 이해합니다.',
      },
      {
         keyword: 'NJ',
         lang: 'Node Js',
         color: 'yellow',
         explanation: 'Node JS의 기초를 이해하고, Node JS를 이용하여 프론트엔드 개발환경을 구축해 코로나맵 클론을 만들 수 있습니다.',
      },
      {
         keyword: 'EX',
         lang: 'Express',
         color: 'red',
         explanation: 'Express의 기초를 이해하고, Express를 이용하여 코로나맵 클론을 만들 수 있습니다.',
      },
      {
         keyword: 'WP',
         lang: 'Webpack',
         color: 'yellow',
         explanation: '웹팩의 동작 원리를 이해하고 직접 개발환경을 구성해봤습니다. 로더를 직접 구현해 보았습니다.',
      },
      {
         keyword: 'BB',
         lang: 'Babel',
         color: 'yellow',
         explanation: '바벨의 원리를 이해하고 직접 사용해 보아 프로젝트에 최적화된 환경을 구축해봤습니다.',
      },
      {
         keyword: 'RT',
         lang: 'React',
         color: 'green',
         explanation: 'React를 이용하여 정적페이지, CMS페이지, 플랫폼 등 여러 React 프로젝트 경험이 있습니다.',
      },
      { keyword: 'RD', lang: 'Redux', color: 'red', explanation: 'Redux를 이용하여 효율적으로 형상관리를 할 수 있습니다.' },
      {
         keyword: 'TS',
         lang: 'Typescript',
         color: 'yellow',
         explanation: 'Typescript 기초를 이해하여 넷플릭스 클론 사이트를 만들 수 있습니다.',
      },
      { keyword: 'NJ', lang: 'Next Js', color: 'green', explanation: 'Next JS를 이용하여 프로젝트를 구현할 수 있습니다.' },
      {
         keyword: 'ST',
         lang: 'Styled components',
         color: 'blue',
         explanation: 'Styled Component를 주로 사용하며, 보다 효율적으로 CSS를 작성할 수 있습니다.',
      },
      { keyword: 'MU', lang: 'Material UI', color: 'blue', explanation: 'Material UI라는 UI 프레임워크를 자주 씁니다.' },
      { keyword: 'RW', lang: 'Responsive Web', color: 'red', explanation: '반응형 웹을 구현할 수 있습니다.' },
      {
         keyword: 'RW',
         lang: 'Interactive Web',
         color: 'green',
         explanation: 'Javascript를 이용하여 애플 클론 페이지를 구현할 수 있습니다.',
      },
      { keyword: 'WS', lang: 'Web Standards', color: 'yellow', explanation: '웹 표준을 지키며 코딩할 수 있습니다.' },
      {
         keyword: 'CB',
         lang: 'Cross Browsing',
         color: 'red',
         explanation: '모든 브라우저에서 제가 맡은 프로젝트가 크로스 브라우징이 잘 되게 할 수 있습니다.',
      },
      { keyword: 'GT', lang: 'Git', color: 'yellow', explanation: 'Git을 이용하여 형상관리를 할 수 있습니다.' },
      {
         keyword: 'JR',
         lang: 'Jira',
         color: 'yellow',
         explanation: '칸반과 스크럼을 이해하고 Jira를 이용하여 프로젝트 관리를 할 수 있습니다.',
      },
      { keyword: 'PS', lang: 'Photoshop', color: 'blue', explanation: '포토샵을 이용하여 프로젝트 시안을 만들 수 있습니다.' },
      {
         keyword: 'IL',
         lang: 'Illustrator',
         color: 'red',
         explanation: '일러스트를 이용하여 간단한 아이콘, 로고 등을 만들 수 있습니다.',
      },
      { keyword: 'PY', lang: 'Python', color: 'green', explanation: '파이썬을 이용하여 알고리즘을 풉니다.' },
   ],
   history_data: [
      { years: '#2018', history: ['송곡고등학교 졸업'] },
      {
         years: '#2019',
         history: [
            '이젠컴퓨터학원(상봉) - 하이브리드 UI UI 웹 퍼블리셔 교육 이수',
            'SV GROUP 입사',
            'SV VIBA 정적페이지 리뉴얼 개발',
            'SAMSUNG SSAFY UI 구현',
            '파이어니 이벤트 페이지 개발',
         ],
      },
      {
         years: '#2020',
         history: [
            'SV DATA 정적페이지 개발',
            'XY UI 정적페이지 개발',
            'ULTRA PRIVACY CMS UI 구현',
            'YOUR CERTY CMS UI 구현',
            '셔틀비 CMS 프론트엔드 개발',
            '에그플레너 정적페이지 개발',
            '플레이조커 프론트엔드 개발',
            '손사찾기 프론트엔드 개발',
            '동네선수CMS 프론트엔드 개발',
            '배달의딜러CMS 프론트엔드 개발',
            '플레이조커CMS 프론트엔드 개발',
         ],
      },
   ],
   certificate_data: [
      { title: '웹디자인 기능사', date: '2019.09', img: '/portpolio/images/profile/design_icon.png' },
      { title: '정보처리 기능사', date: '2020.07', img: '/portpolio/images/profile/code_icon.png' },
   ],
   contact_data: [
      { key: 'Phone', value: '010-3395-4623' },
      { key: 'Email', value: 'piouy_@naver.com' },
      { key: 'Git', value: 'https://github.com/Dongheok' },
   ],
   // 프로젝트
   main_project_data: [
      {
         project_title: 'Donflix',
         project_text_1: 'React를 이용한 외국 영화 사이트 클론 구현',
         link: 'https://dongheok.github.io/dongflix/',
      },
      {
         project_title: '플레이 조커',
         project_text_1: 'React와 Typescript를 이용한 플랫폼 사이트 구현',
         link: 'http://www.playjoker.kr',
      },
      // 애플 클론 CMS
   ],
   sub_project_data: [
      // 플레이조커 CMS
      // 배달의딜러CMS
      {
         project_title: '배달의딜러CMS',
         project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
         project_text_2: 'Redux를 이용한 전역 상태 관리와 Api 통신 구현',
         // 임시
         link: '',
      },
      // 동네선수CMS
      {
         project_title: '동네선수CMS',
         project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
         project_text_2: 'Redux를 이용한 전역 상태 관리와 Api 통신 구현',
         // 임시
         link: 'http://as-prod-cms.s3-website-ap-northeast-1.amazonaws.com/post-list',
      },
      // 손사찾기
      {
         project_title: '손사찾기',
         project_text_1: 'Nextjs를 이용한 홈페이지의 전체 UI 완벽 구현',
         project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
         link: 'https://www.sonsafind.com',
      },
      // 에그플래너
      {
         project_title: '애그플래너',
         project_text_1: '홈페이지의 전체 UI 구현',
         project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
         link: 'https://www.eggteachers.com',
      },
      // SV VIBA
      {
         project_title: 'SV VIBA',
         project_text_1: '홈페이지의 전체 UI 구현',
         project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
         link: 'http://www.svviba.com/',
      },
      // SV Data
      {
         project_title: 'SV DATA',
         project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
         project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
         link: 'http://www.sv-data.com/',
      },
      // SSAFY
      {
         project_title: 'SSAFY',
         project_text_1: '프로젝트 UI 전체 구현',
         link: '',
      },
      // SHUTTLEB
      {
         project_title: 'SHUTTLE_B CMS',
         project_text_1: 'React로 CMS페이지 프론트엔드 작업 완벽 구현',
         project_text_2: 'Redux를 이용한 전역 상태 관리와 Api 통신 구현',
         link: '',
      },
      // XY
      {
         project_title: 'XY Web',
         project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
         project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
         link: 'https://www.xydating.app/',
      },
      // 파이어니
      {
         project_title: 'PION',
         project_text_1: '직접 디자인하여 React를 이용한 이벤트 페이지 구현',
         // project_text_2: '',
         link: '',
      },
      {
         project_title: '맥도날드',
         project_text_1: '직접 디자인 하여 HTML5, CSS3 , Jquery를 이용한 모바일 웹 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/mcdonald/index.html',
      },
      {
         project_title: '서브웨이',
         project_text_1: 'HTML5, CSS3 , Jquery를 이용한 모바일 웹 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/subway/index.html',
      },
      {
         project_title: 'CJ Hello',
         project_text_1: 'HTML5, CSS3 , Jquery를 이용한 모바일 웹 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/cj-hello/index.html',
      },
      {
         project_title: '현대글로비스',
         project_text_1: 'HTML5, CSS3 , Jquery, JS를 이용한 반응형 웹 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/hyundai/index.html',
      },
      {
         project_title: '캐논',
         project_text_1: 'HTML5, CSS3 , Jquery, JS를 이용한 정적페이지 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/canon/index.html',
      },
      {
         project_title: '삼양식품',
         project_text_1: 'HTML5, CSS3 , Jquery, JS를 이용한 정적페이지 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/samyang/index.html',
      },
      {
         project_title: '넷마블',
         project_text_1: '직접 디자인한 페이지를 HTML5, CSS3 , Jquery를 이용한 정적페이지 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/netmarble/index.html',
      },
      {
         project_title: '커핀그루나루',
         project_text_1: 'HTML5, CSS3 , Jquery를 이용한 정적페이지 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/coffine-gurunaru/index.html',
      },
      {
         project_title: '도미노',
         project_text_1: 'HTML5, CSS3 , Jquery를 이용한 정적페이지 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/domino/index.html',
      },
      {
         project_title: '포스코 사회공헌',
         project_text_1: 'HTML5, CSS3 , Jquery, JS를 이용한 정적페이지 구현',
         link: `http://sn237x.cafe24.com//web/personal-project/posco/index.html`,
      },
      {
         project_title: '포도팟',
         project_text_1: 'HTML5, CSS3 , Jquery, JS를 이용한 인터렉티브 웹 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/podopod/index.html',
      },
      {
         project_title: '레스포삭',
         project_text_1: 'HTML5, CSS3 , Jquery, JS를 이용한 정적페이지 구현',
         link: 'http://sn237x.cafe24.com/web/personal-project/lesportsac/index.html',
      },
   ],
};
