import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  // ✅ Helper functions for formatting
  const formatCurrency = (value) => {
    const num = parseFloat(value.replace(/,/g, ''));
    if (isNaN(num)) return value;
    return `$${num.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  const formatNumber = (value) => {
    const num = parseFloat(value.replace(/,/g, ''));
    if (isNaN(num)) return value;
    return num.toLocaleString('en-US');
  };

  return (
    <div className="mt-12">
      {/* Earnings Summary */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
        <div className="bg-sky-50 dark:bg-gray-700 dark:text-white h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400 dark:text-gray-300">Earnings</p>
              <p className="text-2xl dark:text-white">$63,449</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        {/* Small Cards */}
        <div className="m-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 xl:gap-4 items-stretch">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-sky-50 dark:bg-gray-700 dark:text-gray-200 w-full p-4 pt-9 rounded-2xl h-44"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3 whitespace-nowrap">
                <span className="text-lg font-semibold">
                  {['Sales', 'Refunds'].includes(item.title)
                    ? formatCurrency(item.amount)
                    : formatNumber(item.amount)}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    item.percentage.includes('-') ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {item.percentage}
                </span>
              </p>

              <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Updates Section */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 m-3 p-4 rounded-2xl w-full">
          <div className="flex justify-between">
            <p className="font-semibold text-xl dark:text-white">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Budget / SparkLine with Charts */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="m-4">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
                <p className="text-gray-500 dark:text-gray-300 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                  size="md"
                />
              </div>
            </div>

            {/* Pie Chart */}
            <div>
              <p className="text-xl font-semibold mb-4 dark:text-white">Expense Breakdown</p>
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity height="300px" />
            </div>

            {/* Stacked Chart */}
            <div>
              <p className="text-xl font-semibold mb-4 dark:text-white">Sales Comparison</p>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
