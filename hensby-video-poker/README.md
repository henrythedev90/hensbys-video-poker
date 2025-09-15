# Hensby's Video Poker

A full-stack World Series of Poker inspired video poker game built with Next.js, Firebase, and modern web technologies. Play risk-free, earn chips, and climb the global leaderboards!

## 🎮 Features

- **Risk-Free Gaming**: Play with virtual chips - no real money involved
- **Global Leaderboards**: Compete with players worldwide
- **Modern UI/UX**: Built with Next.js and modern web technologies
- **Real-time Updates**: Powered by Firebase for instant gameplay
- **Authentication**: Secure user accounts and progress tracking

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Backend**: Firebase (Authentication, Firestore, Functions)
- **Styling**: CSS Modules, Tailwind CSS (planned)
- **Deployment**: Vercel (recommended)

## 🎯 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd hensby-video-poker
```

2. Install dependencies

```bash
npm install
```

3. Set up Firebase configuration

```bash
# Copy the example environment file
cp .env.example .env.local

# Add your Firebase configuration
# Update the values in .env.local
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎲 Game Rules

- Start with 1000 virtual chips
- Choose your bet amount
- Draw 5 cards
- Hold the cards you want to keep
- Draw new cards for the ones you don't want
- Win based on poker hand rankings
- Climb the leaderboards!

## 🏆 Hand Rankings

1. **Royal Flush** - A, K, Q, J, 10, all the same suit
2. **Straight Flush** - Five cards in a sequence, all in the same suit
3. **Four of a Kind** - All four cards of the same rank
4. **Full House** - Three of a kind with a pair
5. **Flush** - Any five cards of the same suit, but not in a sequence
6. **Straight** - Five cards in a sequence, but not all of the same suit
7. **Three of a Kind** - Three cards of the same rank
8. **Two Pair** - Two different pairs
9. **Pair** - Two cards of the same rank
10. **High Card** - When you haven't made any of the hands above

## 🛠️ Development

### Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   │   ├── login/         # Login page
│   │   └── signup/        # Signup page
│   └── globals.css        # Global styles
├── lib/                   # Utility libraries
│   ├── firebase/          # Firebase configuration
│   └── game/              # Game logic
└── components/            # React components
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Firebase Setup

1. Create a new Firebase project
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Set up Firebase Functions (optional)
5. Add your configuration to `.env.local`

## 📱 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by World Series of Poker
- Built with love for the poker community
- Special thanks to all contributors

---

**Ready to play?** Start your poker journey today! 🃏
