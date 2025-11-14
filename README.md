# PAD - 커뮤니티 게시판 플랫폼

PAD는 React 기반의 프론트엔드와 Express 기반의 백엔드로 구성된 커뮤니티 게시판 플랫폼입니다.
**단일 URL로 통합 배포 가능**합니다.

## 📋 프로젝트 개요

이 프로젝트는 사용자들이 게시글을 작성하고, 공유하며, 소통할 수 있는 커뮤니티 플랫폼을 제공합니다.

### 주요 기능

- 📝 게시글 작성 및 관리 (CKEditor 기반 리치 텍스트 에디터)
- 👤 회원가입 및 로그인 시스템
- 🔐 세션 기반 사용자 인증
- 📱 카테고리별 게시판
- 🔖 북마크 기능
- 👨‍💼 마이페이지 (내 게시글, 비밀번호 변경, 회원탈퇴)
- 🖼️ 이미지 업로드
- 📢 공지사항

## 🛠 기술 스택

### Frontend (pad)
- **React** 18.2.0
- **Redux Toolkit** - 상태 관리
- **React Router DOM** - 라우팅
- **CKEditor 5** - 리치 텍스트 에디터
- **React Slick** - 캐러셀 슬라이더
- **Create React App** - 프로젝트 보일러플레이트

### Backend (node_server)
- **Node.js**
- **Express** - 웹 프레임워크
- **MySQL2** - 데이터베이스
- **Socket.io** - 실시간 통신
- **Multer** - 파일 업로드
- **Express Session** - 세션 관리
- **CORS** - Cross-Origin Resource Sharing
- **Sanitize-HTML** - HTML 새니타이제이션

## 📁 프로젝트 구조

```
PAD_FE/
├── pad/                    # React 프론트엔드
│   ├── public/            # 정적 파일
│   ├── src/
│   │   ├── Front/         # UI 컴포넌트
│   │   │   ├── Body/      # 페이지 컴포넌트
│   │   │   │   ├── Account/       # 계정 관리
│   │   │   │   ├── Hboard/        # 게시판
│   │   │   │   ├── Mainmenu/      # 메인 페이지
│   │   │   │   ├── Sign-In-Up/    # 로그인/회원가입
│   │   │   │   └── ViewBoard/     # 게시글 보기/작성
│   │   │   ├── Footer/    # 푸터
│   │   │   └── Menubar/   # 메뉴바
│   │   ├── Redux/         # Redux 스토어 및 슬라이스
│   │   ├── App.js         # 메인 앱 컴포넌트
│   │   └── index.js       # 진입점
│   └── package.json
│
├── node_server/           # Node.js 백엔드
│   ├── server.js          # 서버 메인 파일
│   ├── image/             # 업로드된 이미지
│   └── package.json
│
└── deploy.sh              # 통합 배포 스크립트
```

## 🚀 설치 및 실행 방법

### 사전 요구사항

- Node.js (v14 이상 권장)
- npm 또는 yarn
- MySQL 데이터베이스

### 1. 저장소 클론

```bash
git clone https://github.com/yongqyu49/PAD_FE.git
cd PAD_FE
```

## 실행 모드

### ⚡ 빠른 시작 (단일 URL 배포)

**가장 쉬운 방법**: 배포 스크립트를 사용하여 프론트엔드와 백엔드를 하나의 URL로 실행

```bash
chmod +x deploy.sh
./deploy.sh
```

이 스크립트는 자동으로:
1. 프론트엔드 의존성을 설치하고 빌드
2. 백엔드 의존성을 설치
3. 백엔드 서버를 시작하여 `http://localhost:7223`에서 실행

서버가 시작되면 브라우저에서 `http://localhost:7223`으로 접속하세요.

### 개발 모드 (Development)

개발 중에는 프론트엔드와 백엔드를 별도로 실행합니다.

#### 2-1. 백엔드 설정 및 실행

```bash
cd node_server
npm install
npm start
```

백엔드 서버는 기본적으로 포트 `7223`에서 실행됩니다.

#### 2-2. 프론트엔드 설정 및 실행

```bash
cd pad
npm install
npm start
```

프론트엔드는 기본적으로 `http://localhost:3000`에서 실행됩니다.
프론트엔드는 프록시 설정을 통해 백엔드 API와 통신합니다.

### 프로덕션 모드 (Production) - 수동 배포

프로덕션 환경에서 수동으로 배포하려면:

#### 3-1. 프론트엔드 빌드

```bash
cd pad
npm install
npm run build
```

이 명령은 최적화된 프로덕션 빌드를 `pad/build` 폴더에 생성합니다.

#### 3-2. 백엔드 서버 실행

```bash
cd node_server
npm install
npm start
```

백엔드 서버가 `http://localhost:7223`에서 실행되며, React 앱도 동일한 URL에서 제공됩니다.

**주의**: React 빌드가 완료되어야 하나의 URL로 접근할 수 있습니다.

### 4. 환경 설정

#### 백엔드 (node_server)
- MySQL 데이터베이스 연결 설정
- 이미지 저장 경로 설정
- 포트 설정 (기본값: 7223)

#### 프론트엔드 개발 모드 (pad)
개발 모드에서는 `src/setupProxy.js`에서 프록시 설정을 확인하세요.
로컬 백엔드 서버 주소를 설정할 수 있습니다.

## 📝 사용 가능한 스크립트

### 프론트엔드 (pad 디렉토리)

#### `npm start`
개발 모드로 앱을 실행합니다.
브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

#### `npm test`
인터랙티브 워치 모드로 테스트 러너를 실행합니다.

#### `npm run build`
프로덕션용 앱을 `build` 폴더에 빌드합니다.

### 백엔드 (node_server 디렉토리)

#### `npm start`
Node.js 서버를 시작합니다.

## 🔌 API 엔드포인트

### 이미지 업로드
- `POST /node/board/image` - 게시글 이미지 업로드

### 회원 관련
- `POST /proxy/member/session` - 세션 확인

### 게시판 관련
- `POST /proxy/board/latestBoard` - 최신 게시글 조회
- `POST /proxy/notice/mainNotice` - 메인 공지사항 조회

## 🔑 주요 기능 설명

### Redux 상태 관리
세션 정보를 Redux로 관리하여 전역 상태로 사용자 정보를 관리합니다.

```javascript
// Session 상태 예시
{
  memNN: "사용자명",
  memID: "아이디",
  memTel: "전화번호",
  memMail: "이메일"
}
```

### 라우팅
React Router DOM을 사용하여 다음과 같은 페이지들을 관리합니다:
- 메인 페이지
- 게시판 목록
- 게시글 보기/작성
- 로그인/회원가입
- 마이페이지
- 북마크
- 문의하기
