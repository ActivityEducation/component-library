# **AscendUCore Design System**

The **AscendUCore Design System** is a comprehensive set of React components and design guidelines built to power educational platforms, particularly those focused on self-paced learning and ActivityPub integration. Our mission is to provide a professional, consistent, and intuitive user experience that builds confidence and facilitates effective learning.

## **🚀 Features**

This design system offers a growing collection of reusable UI components, including:

- **Buttons**: Versatile action elements with various styles (primary, secondary, ghost, destructive) and sizes, including a dedicated icon variant for compact, circular buttons.
- **Cards**: Flexible containers for grouping related content, featuring structured slots for titles, subtitles, headers, actions, and footers.
- **Toolbars**: Horizontal containers for organizing actions and navigation elements, with flexible alignment options.
- **Tabs & Tab Groups**: Components for organizing content into distinct sections, with active state management and responsive behavior.
- **Tables**: Structured display for tabular data, with options for striped rows and cell borders, designed for readability and responsiveness.
- **Steppers**: Visual guides for multi-step processes, indicating progress and current steps, with interactive navigation.
- **Badges**: Small, non-interactive indicators for displaying status, counts, or labels with various semantic color variants.
- **Checkboxes**: Form controls for selecting multiple options, supporting checked, unchecked, indeterminate, and disabled states.
- **Radios**: Form controls for selecting a single option from a set, supporting checked and disabled states.
- **Selects**: Dropdown menus for single option selection, featuring custom styling, keyboard navigation, and accessibility.
- **Sliders**: Interactive controls for selecting a value from a range, with draggable thumbs and customizable min/max/step values.
- **Video Player**: A custom video player with integrated controls (play/pause, volume, fullscreen) and support for interactive "interrupt" elements at specific timestamps, visually marked on the progress bar.
- **Flipper**: A component that adds a 3D flip animation effect, ideal for flashcards or showcasing front and back content, with configurable flip directions and durations.
- **Input**: Styled text input fields with support for floating labels, helper text, error states, and leading/trailing adornments (including icons).
- **Icon**: A flexible icon component supporting Font Awesome classes, SVG URLs, and inline SVG content, with configurable sizes and colors.
- **Flyover**: A component that wraps text and, upon hover (desktop) or tap (mobile), displays a Card with additional content, useful for glossary terms, tooltips, or contextual info. The popover position is configurable and includes automatic collision detection and flipping.

## **🛠️ Technologies Used**

- **React**: The core JavaScript library for building user interfaces.
- **Emotion**: A high-performance CSS-in-JS library for styling components, enabling dynamic and theme-driven styles.
- **TypeScript**: For type safety and improved developer experience.
- **Storybook**: An indispensable tool for developing, documenting, and testing UI components in isolation.

## **📦 Installation**

To set up the AscendUCore Design System locally for development or to explore its components:

1. **Clone the repository:**  
   git clone https://github.com/your-repo/ascenducore-ui-kit.git  
   cd ascenducore-ui-kit

   _(Replace https://github.com/your-repo/ascenducore-ui-kit.git with your actual repository URL)_

2. **Install dependencies:**  
   npm install  
   \# or  
   yarn install

3. Add Font Awesome CSS for Storybook (Crucial for Icon Component):  
   Create or open the file .storybook/preview-head.html and add the following line:
   ```HTML
   <\!-- .storybook/preview-head.html \-->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   ```

## **⚙️ Available Commands**

This project uses npm (or yarn) scripts for various development tasks. Here are the most common commands:

- npm run dev or yarn dev:  
  Starts the development server using Vite. This is typically used for local application development.
- npm run build or yarn build:  
  Builds the project for production. It first compiles TypeScript (tsc \-b) and then bundles the assets using Vite.
- npm run lint or yarn lint:  
  Runs ESLint to check for code quality issues and style inconsistencies.
- npm run preview or yarn preview:  
  Locally previews the production build. Useful for verifying the bundled output before deployment.

### **Storybook Commands**

- npm run storybook or yarn storybook:  
  Starts the Storybook development server. This is where you can browse, develop, and test all UI components in isolation. It typically runs on http://localhost:6006.
- npm run build-storybook or yarn build-storybook:  
  Builds a static version of your Storybook. This output can be deployed as a standalone documentation site for your component library.

## **💡 Usage in Your Project**

To use the AscendUCore Design System components in your React application:

1. Install the package:  
   Once published to npm (or linked locally), install it:

```BASH
   npm install ascenducore-ui-kit
```

\# or

```BASH
   yarn add ascenducore-ui-kit
```

2. Wrap your application with ThemeProvider:  
   To ensure all components have access to the defined design tokens (colors, spacing, typography, etc.), wrap your application's root component or the section where you use the UI Kit components with the ThemeProvider.  
   // src/App.js or src/index.js in your consuming application

```TypeScript
   import React from 'react';
   import { ThemeProvider, theme, Button } from 'ascenducore-ui-kit'; // Adjust path if local linking

   function App() {
     return (
       <ThemeProvider theme={theme}>
         <div>
           <h1>My Learning Platform</h1>
           <Button variant="primary">Start Course</Button>
           {/* Other components from AscendUCore UI Kit */}
         </div>
       </ThemeProvider>
     );
   }
  export default App;
```

3. **Import and use components:**

```TSX
   import { Button, Card, Input, Icon } from 'ascenducore-ui-kit';

   function MyComponent() {
     return (
       <Card title="Welcome">
         <p>This is a card from the AscendUCore UI Kit.</p>
         <Input label="Your Name" leading={<Icon name="fa-solid fa-user" />} />
         <Button>Submit</Button>
       </Card>
     );
   }
```

4. Include Font Awesome CSS (in your main application):  
   Just like with Storybook, if you use Font Awesome icons via the name prop of the Icon component, you must include the Font Awesome CSS in your main application's entry point (e.g., public/index.html or your main CSS file).

```html
<!-- public/index.html in your main application -->
<head>
  <!-- ... other head content ... -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
```

## **🎨 Design Principles**

The AscendUCore Design System is built upon the following core principles:

- **Clarity & Readability**: Prioritizing legibility and clear information hierarchy to reduce cognitive load for learners.
- **Approachability & Trust**: Utilizing clean aesthetics, thoughtful color usage, and consistent interactions to foster a sense of reliability and ease of use.
- **Focus & Minimal Distraction**: Designing user interfaces that guide attention to learning content and minimize unnecessary visual clutter.
- **Accessibility**: Ensuring all components meet high accessibility standards (WCAG compliance) to support diverse learners.
- **Progress & Achievement**: Incorporating visual cues and feedback mechanisms that motivate learners by highlighting their journey and accomplishments.

## **🤝 Contributing**

We welcome contributions to the AscendUCore Design System\! If you're interested in contributing, please refer to our (forthcoming) CONTRIBUTING.md file for guidelines on setting up your development environment, coding standards, and submitting pull requests.

## **📄 License**

This project is licensed under the MIT License.  
(Note: You will need to create a LICENSE file in your repository if you haven't already.)
