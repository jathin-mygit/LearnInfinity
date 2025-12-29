# SkillSwap - Trade Skills, Not Cash

A modern, peer-to-peer skill exchange platform built with the MERN stack, featuring a stunning landing page with beautiful animations and a sleek side navigation design.

## 🚀 Features

- **Modern Design**: Sleek yellow and black color scheme with a side navigation bar
- **Beautiful Animations**: Smooth Framer Motion animations throughout the interface
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, floating particles, and dynamic components
- **Time-Based Credits**: Fair exchange system where 1 hour teaching = 1 hour learning
- **Peer-to-Peer Learning**: Direct connections between learners and teachers

## 🛠 Tech Stack

- **Frontend**: React 18, Framer Motion, React Icons
- **Backend**: Node.js, Express
- **Styling**: Custom CSS with modern animations
- **Package Manager**: npm

## 📁 Project Structure

```
skillswap/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Sidebar.js  # Side navigation
│   │   │   ├── Hero.js     # Hero section
│   │   │   ├── Features.js # Features showcase
│   │   │   ├── HowItWorks.js # Process explanation
│   │   │   └── CTA.js      # Call to action & footer
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
├── server.js               # Express server
└── package.json           # Server dependencies
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Golden Yellow (#FFD700)
- **Secondary**: Warm Yellow (#FFC107)
- **Background**: Dark gradients (#1a1a1a to #2d2d2d)
- **Text**: White and light gray

### Animations
- Loading screen with rotating logo
- Floating particles background
- Smooth hover effects on cards and buttons
- Staggered animations for content sections
- Rotating decorative elements

### Components
1. **Sidebar Navigation**: Modern side-mounted navigation with smooth animations
2. **Hero Section**: Eye-catching intro with animated skill cards
3. **Features Grid**: Interactive feature cards with hover effects
4. **How It Works**: Step-by-step process with connecting animations
5. **Call to Action**: Contact information and final conversion section

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install server dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   ```

### Running the Application

#### Development Mode
Start the React development server:
```bash
cd client
npm start
```

The application will open at `http://localhost:3000`

#### Full Stack Mode
To run both server and client:
```bash
npm run dev
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Key Sections

1. **Hero**: Compelling introduction with animated skill cards
2. **Features**: Six key platform benefits with interactive cards
3. **How It Works**: Four-step process explanation
4. **Contact/CTA**: Contact information and final call-to-action

## 🔧 Customization

The design system uses CSS custom properties for easy theming. Key variables include:
- Primary colors
- Animation durations
- Spacing units
- Typography scales

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**SkillSwap** - Empowering communities through skill exchange 🌟