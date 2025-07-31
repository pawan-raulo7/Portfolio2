
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const skillsData = [
  { name: 'Python', value: 92, color: '#3b82f6' },
  { name: 'Django', value: 90, color: '#06b6d4' },
  { name: 'PostgreSQL', value: 80, color: '#10b981' },
  { name: 'FastAPI', value: 80, color: '#f59e0b' },
  { name: 'React', value: 70, color: '#ef4444' },
  { name: 'Angular', value: 62, color: '#8b5cf6' },
  { name: 'C++', value: 50, color: '#6b7280' },
];

interface SkillChartProps {
  skills?: { name: string; level: number }[];
}

export default function SkillChart({ skills }: SkillChartProps) {
  const data = skills || skillsData;
  
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || skillsData[index]?.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Proficiency']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
