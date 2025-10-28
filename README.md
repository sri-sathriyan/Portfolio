
# Cloud & DevOps Student Portfolio

This is a production-ready, cinematic portfolio website built with React, TypeScript, and Vite. It showcases skills, projects, and experience using modern web technologies, including 3D rendering with React Three Fiber and various animation libraries.

## Features

- **Cinematic Design**: Dark-first UI with a light mode toggle.
- **Animated Hero Section**: A dynamic hero section with a particle background and interactive elements.
- **Animated Sections**: Smooth animations for skills, projects, and timeline powered by Framer Motion and React Awesome Reveal.
- **Interactive Elements**: Tooltips, modals, and a 3D playground.
- **Smooth Scrolling**: Implemented with Lenis for a fluid user experience.
- **Responsive**: Fully responsive design for desktops, tablets, and mobile devices.
- **CI/CD Ready**: Includes a `Dockerfile` for containerization and a GitHub Actions workflow for automated deployment.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **3D**: React Three Fiber, Drei
- **Animation**: Framer Motion, React Awesome Reveal, AutoAnimate, tsparticles
- **Scrolling**: Lenis
- **Icons**: React Icons, Lucide React, and more.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Development

To start the development server, run:

```bash
npm run dev
```

This will open the application on `http://localhost:5173`. The server supports Hot Module Replacement (HMR).

### Building for Production

To create a production-ready build of the application, run:

```bash
npm run build
```

This command will generate a `dist` directory with optimized static assets.

---

## Deployment

This Vite project can be deployed to any static hosting service.

### Vercel

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and import your project from GitHub.
3.  Vercel will automatically detect that it's a Vite project. Use the following settings:
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
4.  Click "Deploy".

### Netlify

1.  Push your code to a GitHub repository.
2.  Go to [Netlify](https://www.netlify.com/) and add a "New site from Git".
3.  Choose your repository.
4.  Netlify will detect it's a Vite project. Use the following settings:
    - **Build Command**: `npm run build`
    - **Publish directory**: `dist`
5.  Click "Deploy site".

### Docker

You can also deploy the application as a Docker container.

1.  **Build the Docker image:**
    ```bash
    docker build -t my-portfolio-app .
    ```

2.  **Run the container:**
    ```bash
    docker run -p 8080:80 my-portfolio-app
    ```
    The application will be available at `http://localhost:8080`.

---

## Customization

- **3D Model**: Replace the placeholder GLB model path in `components/3d/DevOpsModel.tsx` with your own model.
- **Content**: Update the data in `constants.ts` (or directly in the components) to reflect your own skills, projects, and experience.
- **Styling**: Modify colors, fonts, and other design tokens in `tailwind.config.js`."# Portfolio" 
