#!/bin/bash

# PAD 프로젝트 배포 스크립트
# 프론트엔드를 빌드하고 백엔드 서버를 시작하여 단일 URL로 실행합니다.

set -e

echo "================================================"
echo "PAD 프로젝트 배포 스크립트"
echo "================================================"
echo ""

# 프론트엔드 빌드
echo "1. 프론트엔드 빌드 중..."
cd pad
if [ ! -d "node_modules" ]; then
  echo "   - 프론트엔드 의존성 설치 중..."
  npm install
fi
echo "   - React 앱 빌드 중..."
CI=false npm run build
cd ..
echo "   ✓ 프론트엔드 빌드 완료"
echo ""

# 백엔드 의존성 설치
echo "2. 백엔드 설정 중..."
cd node_server
if [ ! -d "node_modules" ]; then
  echo "   - 백엔드 의존성 설치 중..."
  npm install
fi
echo "   ✓ 백엔드 설정 완료"
echo ""

# 서버 시작
echo "3. 서버 시작 중..."
echo "   - 서버가 http://localhost:7223 에서 실행됩니다"
echo "   - 프론트엔드와 백엔드가 하나의 URL로 통합되었습니다"
echo "   - 종료하려면 Ctrl+C를 누르세요"
echo ""
echo "================================================"
echo ""

npm start
