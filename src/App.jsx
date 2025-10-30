import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import './index.css'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorMapping, ColorPicker, Editor } from './pages';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  // Apply dark mode to <html> based on currentMode
  useEffect(() => {
    const root = document.documentElement;
    if (currentMode === 'Dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [currentMode]);

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-gray-800 bg-white">
        <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu && (
          <div className="fixed sidebar dark:bg-gray-800 bg-white w-64 md:w-72 max-w-[80vw]">
            <Sidebar />
          </div>
        )}

        <div className={`dark:bg-gray-800 bg-white min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
          <div className="fixed md:static dark:bg-gray-800 bg-white navbar w-full">
            <Navbar />
          </div>
           {/* Global responsive container for page content */}
          <div className="dark:bg-gray-800 bg-white max-w-[1400px] mx-auto px-4 md:px-6 w-full">
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* dashboard */}
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/" element={<Ecommerce />} />

              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;