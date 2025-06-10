# RemWaste Task Management Application

This project is built using React and Vite. The application provides an interactive interface that allows users to select and manage their waste containers (skips).

## 🚀 Features

### Core Features
- Modern and user-friendly interface
- Step-by-step task creation process
- Progress tracking
- Responsive design

### Technical Features
- Two different design options (A and B)
- Real-time data loading
- Dynamic container selection
- Progress indicator
- Error handling
- Loading state display

### User Experience
- Intuitive navigation
- Visual feedback
- Animated transitions
- Easy design switching feature

## 🛠️ Technologies

### Frontend
- React - Modern UI development
- Vite - Fast development environment
- Tailwind CSS - Utility-first CSS framework
- CSS - Styling and layout
- ESLint - Code quality control

### API Integration
- RESTful API support
- Asynchronous data loading
- Error catching and handling

## 🏗️ Installation

1. Clone the project:
```bash
git clone [repo-url]
```

2. Navigate to the project directory:
```bash
cd remwastetask
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open in your browser:
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
  ├── assets/        # Images and other static files
  ├── App.jsx        # Main application component and state management
  ├── SkipDesignA.jsx # First design component (Alternative A)
  ├── SkipDesignB.jsx # Second design component (Alternative B)
  ├── StepProgress.jsx # Progress bar component
  ├── main.jsx       # Application entry point
  └── index.css      # Global style file
```

### Component Descriptions

- **App.jsx**: Main application logic, state management, and API integration
- **SkipDesignA.jsx**: First design alternative
- **SkipDesignB.jsx**: Second design alternative
- **StepProgress.jsx**: User progress indicator

## 🔄 Data Flow

1. Data is fetched from the API when the application starts
2. User makes container selection
3. Selection is saved to state
4. UI updates according to selection




