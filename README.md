# movie_app_2020

**React로 만든 영화 목록 앱 + Todo 앱** 학습 프로젝트입니다. (2020년, Create React App)
YTS 영화 API에서 평점순 영화를 가져와 카드로 보여 주고, 영화를 누르면 제목 상세 화면으로 이동합니다. `/todo` 화면에서는 할 일을 추가·리셋할 수 있습니다.

## 화면 구성

| 주소 (HashRouter) | 파일 | 내용 |
| --- | --- | --- |
| `#/` | `src/routes/Home.js` | YTS API(`list_movies.json?sort_by=rating`) 호출 → 영화 카드 목록. 로딩 중에는 `Loading...` 표시 |
| `#/about` | `src/routes/About.js` | 조지 오웰 『1984』 인용문 |
| `#/movie-detail` | `src/routes/Detail.js` | 선택한 영화 제목 표시 (카드를 거치지 않고 직접 접속하면 `/`로 이동) |
| `#/todo` | `src/routes/Todo.js` | 할 일 입력·등록, 리셋 버튼 |

## 사용 기술

| 구분 | 내용 |
| --- | --- |
| 화면 | React 16.13, react-router-dom 5.2 |
| 통신 | axios 0.19 |
| 검증 | prop-types |
| 개발 환경 | Create React App (`react-scripts` 3.4.1) |
| 설치만 되어 있고 화면에 연결 안 됨 | redux, redux-logger, react-router-redux (`src/store/index.js`, `src/reducers/tasks.js`는 어디서도 불러오지 않음) |

## 폴더 구조

```
movie_app_2020/
├── package.json
├── public/
└── src/
    ├── index.js            # 시작점
    ├── App.js              # 라우터와 메뉴 연결
    ├── components/         # Movie, Navigation, Todo 입력/목록/항목
    ├── routes/             # Home, About, Detail, Todo
    ├── reducers/, store/   # Redux 연습 코드 (미사용)
    └── BlackHole.js, Potato.js  # 초반 학습용 컴포넌트 (미사용)
```

## 실행 명령

| 명령 | 설명 |
| --- | --- |
| `npm start` | 개발 서버 (http://localhost:3000) |
| `npm run build` | 배포용 파일 생성 (`build/`) |

## 실행 방법

```bash
git clone https://github.com/jeong-jihyun/movie_app_2020.git
cd movie_app_2020
npm install --legacy-peer-deps
npm start
```

- Node.js 17 이상에서 `react-scripts` 3.x를 쓰면 OpenSSL 오류가 나므로 `NODE_OPTIONS=--openssl-legacy-provider`를 붙여 실행하세요. (Node 22에서 이 옵션으로 빌드 성공을 확인했습니다.)
- 영화 목록은 외부 API(`yts.mx`)가 응답해야 보입니다. 이 작업 환경에서는 외부 사이트 접속이 막혀 있어 실제 화면 표시까지는 확인하지 못했습니다.

## 개선 내역 (2026-10)

| 구분 | 문제 | 수정 내용 |
| --- | --- | --- |
| 빌드 경고 | `App.js`에서 `history` 변수를 만들고 쓰지 않음 (빌드 시 no-unused-vars 경고) | 사용하지 않는 코드와 import 제거, 경고 없이 빌드 확인 |
| 로딩 멈춤 | API 호출이 실패하면 예외 처리가 없어 `Loading...`에서 영원히 멈춤 | `try/catch` 추가, 실패 시 빈 목록 표시 |
| 안내 | 기본 CRA 설명 README | 프로젝트 내용 기준으로 재작성 |

## 앞으로 손보면 좋은 점

- `history` 5.x가 `package.json`에 있으나 react-router 5와 맞지 않아 쓰지 않습니다. 제거해도 됩니다.
- Redux 관련 코드와 라이브러리가 연결되지 않은 상태입니다. 쓸 계획이 없다면 정리하세요.
- `package.json`에 `test` 명령이 없고 테스트 코드도 없습니다.
- 영화 카드에서 `Detail`은 제목만 보여 줍니다. 포스터·요약 등을 더 보여 줄 수 있습니다.
