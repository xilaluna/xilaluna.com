import type { NextPage } from 'next';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import colors from 'tailwindcss/colors';
import skillsData from '../data/skills.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Skills: NextPage = () => {
  return (
    <div className="page-container">
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="main-heading">Skills</h1>
        <p className="text-center">A list of my skills</p>
      </div>
      <div className="border-divider" />
      <div className="grid grid-cols-2 gap-2">
        {skillsData.map((group) => {
          return (
            <div key={group.name}>
              <Bar
                data={{
                  labels: group.skills.map((skill) => skill.skill),
                  datasets: [
                    {
                      label: 'Level',
                      data: group.skills.map((skill) => skill.level),
                      backgroundColor: colors.indigo[400],
                    },
                  ],
                }}
                options={options}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
