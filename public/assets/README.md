# Lambda Protocol - Assets Directory

이 디렉토리에 모든 UI 에셋(이미지, SVG)을 배치합니다.

## 폴더 구조

```
assets/
├── hero/               # Hero 섹션 배경 에셋
│   ├── machinery.svg   (또는 .png) - 우상단 산업용 기계/기어
│   └── pipes.svg       (또는 .png) - 좌하단 파이프 구조
│
├── protocol/           # Protocol 섹션 배경 에셋
│   └── gauges.svg      (또는 .png) - 게이지, 측정 도구
│
├── mechanics/          # Mechanics 섹션 배경 에셋
│   └── structures.svg  (또는 .png) - 산업 구조물
│
└── systems/            # Systems 섹션 배경 에셋
    └── gears.svg       (또는 .png) - 기어, 머신
```

## 파일 형식

### 추천: SVG
- ✅ 투명 배경 지원
- ✅ 축소/확대 시 고품질 유지
- ✅ 파일 크기 작음
- ✅ 색상 조정 가능

### 대안: PNG
- 투명 배경 필수 (24-bit PNG with alpha)
- 1920x1080 이상 해상도
- 인터레이스 방식 권장

## 파일명 규칙

- 소문자만 사용
- 하이픈으로 단어 구분 (예: `machinery-gears.svg`)
- 의미있는 이름 사용

## 에셋 배치 위치

페이지 코드에서 사용되는 위치:

### Hero Section
```
- 우상단: w-1/2 h-full opacity-30 (machinery-style)
- 좌하단: w-2/5 h-3/4 opacity-20 (pipes-style)
```

### Protocol Section
```
- 우상단: w-1/2 h-full opacity-25 (gauges-style)
```

### Mechanics Section
```
- 좌상단: w-3/5 h-full opacity-15 (structures-style)
```

### Systems Section
```
- 우하단: w-1/3 h-full opacity-20 (gears-style)
```

## 파일 크기 가이드

- SVG: 50KB 이하
- PNG: 200KB 이하

## 에셋 준비 팁

1. **배경 투명화**
   - 모든 에셋은 투명 배경이어야 함
   - 배경색 없음

2. **색상**
   - 다크 톤 권장 (검정, 진회색)
   - 밝은 배경에 어두운 에셋이 시각적 대비 좋음

3. **복잡도**
   - 너무 복잡하면 가독성 떨어짐
   - 반투명 처리되므로 적당히 심플하게

4. **테스트**
   - 실제 페이지에서 스크롤하며 확인
   - 반투명 처리되는 옵션 확인
