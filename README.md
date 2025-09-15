# 🎰 Hensby's Video Poker - Web App

> A full-stack World Series of Poker inspired video poker game built with Next.js 14, Firebase, and modern web technologies. Play risk-free, earn chips, and climb the global leaderboards!

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Firebase](https://img.shields.io/badge/Firebase-10.9-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🃏 **Authentic Video Poker Experience** - Classic 5-card draw poker with WSOP-style interface
- 🔥 **Risk-Free Gaming** - Start with 0 chips, only win more (never lose what you have)
- 🏆 **Global Leaderboards** - Compete with players worldwide for chip supremacy
- 🎯 **Achievement System** - Unlock rewards and track your poker journey
- 💰 **Daily Bonuses** - Login rewards and streak multipliers
- 📱 **Responsive Design** - Perfect experience on desktop and mobile
- ⚡ **Real-time Updates** - Live leaderboard updates and social features

## 🎮 Game Flow

1. **Sign up** and start with 0 chips
2. **Claim daily bonuses** to get your starting chips
3. **Play video poker** - deal, hold, draw, and win!
4. **Earn chips** from winning hands (Royal Flush pays 12.9M!)
5. **Climb leaderboards** and unlock achievements
6. **Complete challenges** for bonus chip rewards

## 🎯 Pay Table

| Hand               | Chip Multiplier |
| ------------------ | --------------- |
| 🔥 Royal Flush     | 12.9M           |
| 💎 Five of a Kind  | 5.1M            |
| ⚡ Straight Flush  | 2.5M            |
| 👑 Four of a Kind  | 1.2M            |
| 🏠 Full House      | 467K            |
| 💧 Flush           | 311K            |
| 📈 Straight        | 208K            |
| 🎲 Three of a Kind | 156K            |
| 👥 Two Pairs       | 104K            |

## 🛠️ Tech Stack

### Frontend

- **Next.js 14+** - App Router with Server Components
- **TypeScript 5.4** - Type-safe development
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 11** - Smooth animations
- **React Query** - Server state management
- **Zustand** - Global state management

### Backend

- **Firebase Authentication** - Secure user management
- **Firestore Database** - Real-time NoSQL database
- **Firebase Functions** - Serverless game validation
- **Firebase Hosting** - Static site hosting

### External Services

- **Deck of Cards API** - Realistic card management
- **Firebase Analytics** - User behavior tracking

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm** or **yarn**
- **Firebase CLI** (`npm install -g firebase-tools`)
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/wsop-video-poker.git
   cd wsop-video-poker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   **Edit `.env.local` with your Firebase config:**

   ```env
   # Firebase Configuration (Get from Firebase Console)
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # App Settings
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   DECK_OF_CARDS_API_BASE_URL=https://www.deckofcardsapi.com/api
   NODE_ENV=development
   ```

4. **Set up Firebase**

   ```bash
   # Login to Firebase
   firebase login

   # Initialize Firebase (if not already done)
   firebase init

   # Deploy Firestore rules (optional for development)
   firebase deploy --only firestore:rules
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔧 Firebase Setup Guide

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Name it (e.g., "wsop-video-poker")
4. Enable Google Analytics (optional)

### 2. Enable Services

**Authentication:**

- Go to Authentication → Sign-in method
- Enable Email/Password and Google (optional)

**Firestore:**

- Go to Firestore Database → Create database
- Start in test mode (configure rules later)
- Choose a location close to your users

### 3. Get Configuration

- Go to Project Settings → General
- Scroll to "Your apps" → Add web app
- Register your app and copy the config
- Paste values into `.env.local`

### 4. Security Rules (Optional)

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Games are user-specific
    match /games/{gameId} {
      allow read, write: if request.auth != null &&
                           request.auth.uid == resource.data.userId;
    }

    // Leaderboards are read-only
    match /leaderboards/{document} {
      allow read: if request.auth != null;
    }
  }
}
```

## 📁 Project Structure

```
wsop-video-poker/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── (auth)/            # Auth pages (login, signup)
│   │   ├── game/              # Main game page
│   │   ├── leaderboard/       # Global rankings
│   │   ├── profile/           # User profile
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── game/              # Game-specific components
│   │   ├── ui/                # UI components
│   │   └── layout/            # Layout components
│   ├── lib/                   # Core libraries
│   │   ├── firebase/          # Firebase configuration
│   │   ├── game/              # Game logic
│   │   └── utils/             # Helper functions
│   ├── hooks/                 # Custom React hooks
│   ├── store/                 # Zustand stores
│   └── types/                 # TypeScript definitions
├── functions/                 # Firebase Cloud Functions
├── public/                    # Static assets
├── .env.local                 # Environment variables (not in git)
├── .env.example              # Environment template
├── firestore.rules           # Database security rules
├── firebase.json             # Firebase configuration
└── package.json              # Dependencies
```

## 🎨 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Testing
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests

# Firebase
npm run deploy       # Deploy to Firebase
npm run deploy:functions  # Deploy functions only
```

### Key Components

**Game Logic:**

```typescript
// lib/game/poker-logic.ts
export function evaluateHand(cards: Card[]): HandResult {
  // Poker hand evaluation logic
}

export function calculatePayout(hand: string, bet: number): number {
  // Payout calculation based on pay table
}
```

**Firebase Integration:**

```typescript
// lib/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your config from .env.local
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

## 🔒 Security Features

- ✅ **Server-side Validation** - Cloud Functions validate all game results
- ✅ **Anti-cheat Measures** - Impossible hands are rejected
- ✅ **Secure Transactions** - All chip changes are verified
- ✅ **Rate Limiting** - Prevents spam and abuse
- ✅ **Input Sanitization** - All user inputs are validated

## 🚀 Deployment

### Firebase Hosting (Recommended)

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   npm run deploy
   ```

### Vercel (Alternative)

1. **Connect your GitHub repo**
2. **Add environment variables in Vercel dashboard**
3. **Deploy automatically on git push**

## 📊 Game Economy

### Chip Sources (Players can only gain chips):

- **Daily Login Bonus**: 100-500 chips
- **Achievement Rewards**: 1,000-10,000 chips
- **Game Winnings**: Based on pay table
- **Weekly Challenges**: Special bonus chips
- **Referral Bonuses**: Invite friends

### Progression System:

- **Achievements**: First Royal Flush, Play 100 hands, etc.
- **Daily Streaks**: Consecutive login multipliers
- **Leaderboard Ranks**: Weekly and all-time rankings
- **Special Events**: Holiday tournaments

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Game flow (deal, hold, draw, win)
- [ ] Chip calculations are correct
- [ ] Leaderboard updates in real-time
- [ ] Daily bonuses work
- [ ] Mobile responsiveness

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing code style (ESLint + Prettier)
- Write tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **World Series of Poker** - Inspiration for the game design
- **Deck of Cards API** - Realistic card management
- **Firebase Team** - Excellent backend services
- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Beautiful utility-first CSS

## 🔗 Links

- [Live Demo](https://your-app.web.app) _(Coming Soon)_
- [Firebase Console](https://console.firebase.google.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Deck of Cards API](https://deckofcardsapi.com)

---

**🎰 Built with ❤️ for poker lovers everywhere**

_Experience the thrill of video poker without the risk - where every hand is a chance to win big!_

## 🐛 Troubleshooting

### Common Issues

**Environment Variables Not Loading:**

```bash
# Make sure .env.local is in root directory
# Restart dev server after adding variables
npm run dev
```

**Firebase Connection Error:**

```bash
# Check your API keys in .env.local
# Verify Firebase project is active
# Check browser console for specific errors
```

**Build Errors:**

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Deployment Issues:**

```bash
# Login to Firebase CLI
firebase login
# Check project configuration
firebase use --add
```
