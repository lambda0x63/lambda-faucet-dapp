# Lambda Protocol - 필요한 프론트엔드 페이지

@docs/overview.md의 "주요 기능 (프론트엔드)"를 기반으로 필요한 페이지 구조를 정의합니다.

---

## 📋 필요한 페이지 목록

### 1. **메인 페이지 (이미 존재 - `/`)**
   - ✅ 현재: 랜딩페이지 (Hero + 정보 섹션)
   - 추가 필요: 지갑 미연결 상태에서의 CTA
   - 스크롤: 프로토콜 정보 + 에셋 배치

---

### 2. **Faucet 페이지 (새로 필요 - `/faucet`)**
메인 기능 페이지. 토큰 요청, 통계, 추천 시스템 통합

#### 필요 컴포넌트:
```
┌─────────────────────────────────────┐
│  Header (공통)                      │
├─────────────────────────────────────┤
│  지갑 연결 상태 표시                  │
│  - 연결됨: 주소 표시                 │
│  - 미연결: "Connect Wallet" CTA      │
├─────────────────────────────────────┤
│  [연결 시에만 표시]                  │
│                                     │
│  1️⃣  REQUEST SECTION                │
│    ├─ Your Balance: XXX LMDA        │
│    ├─ Next Request in: 00:45:23 ⏰  │
│    ├─ Estimated: ~100 LMDA          │
│    └─ [REQUEST TOKENS] Button       │
│                                     │
│  2️⃣  REFERRAL SECTION               │
│    ├─ Your Code: 0x3a4f... [COPY]   │
│    ├─ Invited: 7 people             │
│    └─ Earned: 70 LMDA               │
│                                     │
│  3️⃣  YOUR STATS                     │
│    ├─ Total Received: 1,500 LMDA    │
│    ├─ Total Requests: 15            │
│    ├─ First Request: 2025-10-01     │
│    ├─ Max Request: 200 LMDA         │
│    └─ Avg Request: 100 LMDA         │
│                                     │
├─────────────────────────────────────┤
│  4️⃣  GLOBAL STATS (모두 볼 수 있음)  │
│    ├─ Total Distributed: 500K LMDA  │
│    ├─ Total Users: 1,234            │
│    ├─ Total Requests: 45,678        │
│    └─ [Chart/Graph]                 │
│                                     │
│  5️⃣  RECENT REQUESTS FEED           │
│    ├─ [Event Listener 기반]         │
│    ├─ user123 claimed 150 LMDA      │
│    ├─ user456 claimed 120 LMDA      │
│    └─ ...                           │
│                                     │
└─────────────────────────────────────┘
```

#### 기술 요구사항:
- wagmi hooks로 지갑 상태 감지
- useRequestTokens() - 토큰 요청 함수
- useTokenBalance() - 잔액 조회
- useTimeUntilNextRequest() - 타이머
- useEstimatedAmount() - 예상 금액 계산
- useUserStats() - 개인 통계
- useGlobalStats() - 글로벌 통계
- useMyReferralCode() - 추천 코드
- useReferralInfo() - 추천 통계
- useTokensRequestedEvent() - 이벤트 리스닝 (실시간 피드)
- useReferralRewardPaidEvent() - 보상 이벤트

---

### 3. **통계 페이지 (선택사항 - `/stats`)**
더 상세한 데이터 시각화

#### 필요 컴포넌트:
```
┌─────────────────────────────────────┐
│  Header                             │
├─────────────────────────────────────┤
│  1️⃣  YOUR PERSONAL STATS            │
│    ├─ Pie Chart: 시간대별 요청      │
│    ├─ Line Chart: 누적 수령량       │
│    ├─ Bar Chart: 일일 요청          │
│    └─ Table: 상세 요청 기록         │
│                                     │
│  2️⃣  MULTIPLIER INFO                │
│    ├─ Current Multipliers:          │
│    │  ├─ Balance: 80% (current)     │
│    │  ├─ Time: 100% (08:00-16:00)   │
│    │  └─ Cooldown: 2x (11-50 req/hr)│
│    └─ Historical Multipliers        │
│                                     │
│  3️⃣  REFERRAL ANALYTICS             │
│    ├─ Referral Network Tree         │
│    ├─ Earnings Timeline             │
│    └─ Top Referrals                 │
│                                     │
│  4️⃣  NETWORK STATISTICS             │
│    ├─ Distribution Over Time        │
│    ├─ Active Users Chart            │
│    └─ Growth Metrics                │
│                                     │
└─────────────────────────────────────┘
```

---

### 4. **Admin 페이지 (필요하면 - `/admin`)**
개발자/관리자용 (초기 배포 후 고려)

#### 기능:
- Faucet 잔액 확인
- 파라미터 조정 (Owner만)
- 비상 정지 (Pause/Unpause)
- 블랙리스트 관리

---

## 📊 현재 페이지 상태

| 페이지 | 상태 | 역할 |
|--------|------|------|
| `/` | ✅ 완료 | 랜딩페이지 (Protocol 설명) |
| `/faucet` | ⏳ 필요 | **메인 기능 페이지** (토큰 요청) |
| `/stats` | ⏳ 선택 | 상세 통계 |
| `/admin` | ⏳ 선택 | 관리자 기능 |

---

## 🎯 개발 우선순위

### Phase 1 (필수)
1. **`/faucet` 페이지** - 토큰 요청 + 기본 통계
   - 지갑 연결 확인
   - 토큰 요청 버튼
   - 타이머
   - 개인 통계
   - 추천 코드 + 복사 기능
   - 글로벌 통계
   - 실시간 피드

### Phase 2 (추가)
2. **`/stats` 페이지** - 상세 분석
   - 차트/그래프
   - Multiplier 정보
   - 분석 데이터

### Phase 3 (필요시)
3. **`/admin` 페이지** - 관리 기능
   - 파라미터 확인/조정
   - 긴급 정지
   - 블랙리스트

---

## 📁 파일 구조 제안

```
src/
├── app/
│   ├── page.tsx                 (랜딩페이지 - ✅)
│   ├── faucet/
│   │   └── page.tsx             (⏳ Faucet 페이지)
│   ├── stats/
│   │   └── page.tsx             (⏳ Stats 페이지)
│   └── admin/
│       └── page.tsx             (⏳ Admin 페이지)
│
├── components/
│   ├── Header.tsx               (공통)
│   ├── faucet/
│   │   ├── RequestSection.tsx
│   │   ├── ReferralSection.tsx
│   │   ├── UserStatsCard.tsx
│   │   ├── GlobalStats.tsx
│   │   └── RecentFeed.tsx
│   ├── stats/
│   │   ├── PersonalChart.tsx
│   │   ├── MultiplierInfo.tsx
│   │   ├── ReferralAnalytics.tsx
│   │   └── NetworkStats.tsx
│   └── admin/
│       ├── FaucetStatus.tsx
│       ├── ParameterControl.tsx
│       └── BlacklistManager.tsx
│
└── hooks/
    ├── useTokenBalance.ts       (✅ 이미 있음)
    ├── useFaucetInfo.ts         (✅ 이미 있음)
    ├── useTimeUntilNextRequest.ts (✅ 이미 있음)
    ├── useEstimatedAmount.ts    (✅ 이미 있음)
    ├── useUserStatus.ts         (✅ 이미 있음)
    ├── useUserStats.ts          (✅ 이미 있음)
    ├── useGlobalStats.ts        (✅ 이미 있음)
    ├── useMyReferralCode.ts     (✅ 이미 있음)
    ├── useReferralInfo.ts       (✅ 이미 있음)
    ├── useRequestTokens.ts      (✅ 이미 있음)
    ├── useTokensRequestedEvent.ts (✅ 이미 있음)
    └── useReferralRewardPaidEvent.ts (✅ 이미 있음)
```

---

## ✅ 현재 완료된 것

- ✅ 모든 custom hooks 준비됨
- ✅ 랜딩페이지 완료
- ✅ Header 완성
- ✅ RainbowKit 통합

---

## ⏳ 다음 단계

### 즉시 필요
1. **`/faucet` 페이지 구축**
   - 레이아웃 설계
   - RequestSection 컴포넌트
   - 연결된 지갑에서 실시간 데이터 표시

### 나중에 필요
2. 통계 페이지 추가
3. Admin 기능 (선택)

---

## 🔗 연결할 컨트랙트 데이터

```typescript
// @docs/overview.md 기반

// 1. 토큰 요청
LambdaFaucet.requestTokens(referralCode)

// 2. 조회 (Read-only)
LambdaFaucet.getTimeUntilNextRequest(user)      // 타이머
LambdaFaucet.getEstimatedAmount(user)           // 예상량
LambdaFaucet.getMyReferralCode()                // 추천 코드
LambdaFaucet.getCurrentMultipliers()            // 현재 multiplier
LambdaFaucet.getUserStatus()                    // 사용자 상태
LambdaFaucet.getFaucetInfo()                    // Faucet 잔액

// 3. 통계
FaucetStats.getUserStats(user)                  // 개인 통계
FaucetStats.getGlobalStats()                    // 글로벌 통계

// 4. 추천
ReferralSystem.getReferralInfo(user)            // 추천 정보

// 5. 이벤트 리스닝
LambdaFaucet.TokensRequested(user, amount, ...)
LambdaFaucet.ReferralRewardPaid(referrer, ...)
```

---

## 💡 핵심 포인트

1. **메인 기능**: `/faucet` 페이지에 모두 통합
2. **기존 hooks**: 이미 모두 준비됨
3. **우선순위**: `/faucet` → `/stats` → `/admin`
4. **데이터 소스**: 스마트 컨트랙트 (읽기) + 이벤트 (실시간)

