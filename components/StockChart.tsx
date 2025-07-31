'use client';

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const stockData = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4500 },
  { month: 'May', value: 6000 },
  { month: 'Jun', value: 5500 },
  { month: 'Jul', value: 7000 },
  { month: 'Aug', value: 6500 },
  { month: 'Sep', value: 8000 },
  { month: 'Oct', value: 7500 },
  { month: 'Nov', value: 9000 },
  { month: 'Dec', value: 8500 },
];

export default function StockChart() {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={stockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="stockGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            className="text-xs text-gray-500"
          />
          <YAxis hide />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#stockGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}