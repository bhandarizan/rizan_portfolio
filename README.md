#  Portfolio Site

A modern, responsive portfolio website built with React and Tailwind CSS.
Designed to showcase my projects, technical skills, and experience as a web developer,
with a strong focus on clean UI, accessibility, and performance.

## 🌐 Live Demo

 **Live Website**: https://rizan-portfolio.vercel.app/


##  Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Project Showcase** - Highlight key projects with descriptions, technologies, and links
- **Skills Section** - Display technical skills and proficiencies
- **Contact Form** - Email integration using EmailJS for direct messaging
- **Dark Mode** - Toggle between light and dark themes
- **Toast Notifications** - User-friendly feedback with Radix UI toast components

##  Technologies Used

- **Frontend**: React 18.3, JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS 4.1 with Vite integration
- **Build Tool**: Vite 5.3
- **Routing**: React Router DOM 7.5
- **UI Components**: Radix UI, Lucide React Icons
- **Email Service**: EmailJS for contact form
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Deployment**: Vercel

##  Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0 or higher)
- npm or yarn package manager

##  Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/beautiful-portfolio.git
   cd beautiful-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```

##  Project Structure

```
beautiful-portfolio/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Contact

For inquiries, please reach out through the contact form on the website or visit my GitHub profile.

Made with ❤️ by Rizan Bhandari 