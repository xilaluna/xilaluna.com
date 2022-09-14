import React from 'react';
import Head from 'next/head';
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
import { useTheme } from 'next-themes';
import { supabase } from '@/utils/supabase';
import Heading from '@/components/Heading';
import { SkillGroupInterface } from '@/types';

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
  scales: {
    y: {
      max: 100,
    },
  },
};

export async function getStaticProps() {
  const { data, error } = await supabase
    .from('skill_groups')
    .select('*, skills(*)')
    .order('order');
  if (error) {
    console.log(error);
  }

  return {
    props: {
      skillGroup: data,
    },
  };
}

const Skills = ({ skillGroup }: { skillGroup: SkillGroupInterface[] }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <main className="secondary-page">
      <Head>
        <title>Skills - Xila Luna</title>
        <meta name="description" content="Xila Luna's Skills" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Heading title="Skills" subtitle="A list of my skills" />
      <div className="space-y-5">
        {skillGroup.map((group) => {
          return (
            <div key={group.name}>
              <h2 className="pb-2 text-center text-lg">{group.name}</h2>
              <Bar
                data={{
                  labels: group.skills.map((skill) => skill.name),
                  datasets: [
                    {
                      label: 'Level',
                      data: group.skills.map((skill) => skill.level),
                      backgroundColor:
                        currentTheme === 'dark'
                          ? 'rgb(99 102 241 / 0.5)'
                          : 'rgb(244 114 182 / 0.5)',
                      borderColor:
                        currentTheme === 'dark'
                          ? 'rgb(99 102 241)'
                          : 'rgb(244 114 182)',
                      borderWidth: 2,
                    },
                  ],
                }}
                options={options}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Skills;
