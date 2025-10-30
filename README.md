# Admin Dashboard

A modern, responsive React admin dashboard built with Syncfusion UI components. This dashboard provides essential features, beautiful charts, light/dark mode, and easy extensibility for your business needs.

## Features

- ✨ **Dashboard Home** with earnings summary and analytics
- 📊 **Rich visualizations**: Stacked, Pie, and Sparkline charts
- 🛒 **Order management**: Editable, sortable orders table
- 🎨 **Theme support**: Light/dark mode toggle, theme color settings
- 📱 **Responsive design** for desktop and mobile
- ⚡ **React Context API** for global state management
- 🔥 Built with [Syncfusion React UI](https://ej2.syncfusion.com/react/) components

## Demo

image.png
## Getting Started

### Prerequisites

- Node.js (v14 or newer recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/admin-dashboard.git
cd admin-dashboard
npm install
```

### Running the App

```bash
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/    # Reusable UI components (Header, Footer, Button, etc.)
├── contexts/      # React Context for global state
├── data/          # Static/dummy data for UI views
├── pages/         # Dashboard pages (Ecommerce, Orders, etc.)
├── App.js         # Main App component
└── index.js       # ReactDOM entry point
```

## Customization

- To change chart data & earnings, edit `src/data/dummy.jsx`.
- For theming or layout tweaks, update CSS classes and the context logic in `src/contexts/ContextProvider.jsx`.

## Built With

- [React](https://reactjs.org/)
- [Syncfusion React UI](https://ej2.syncfusion.com/react/)
- [Tailwind CSS](https://tailwindcss.com/) (for utility styles)
- [React Icons](https://react-icons.github.io/react-icons/)

## License

This project is for educational/demo purposes.
Check [Syncfusion's licensing](https://www.syncfusion.com/sales/communitylicense) for their components if used in production.

---

Inspired by Syncfusion's dashboard template & tailored for fast prototyping.

