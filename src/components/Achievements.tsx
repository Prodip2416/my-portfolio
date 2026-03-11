import React from 'react';
import {
  Target,
  TrendingUp,
  Users,
  Zap,
  Code2,
  Star,
} from 'lucide-react';

const AchievementCard = ({
  icon: Icon,
  title,
  description,
  value,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  value: string;
  color: string;
}) => (
  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
    <div className="text-3xl font-bold text-cyan-400">{value}</div>
  </div>
);

const Achievements = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Reduced application load time',
      value: '40%',
      color: 'bg-green-500',
    },
    {
      icon: Target,
      title: 'Project Delivery',
      description: 'Projects delivered ahead of schedule',
      value: '5',
      color: 'bg-blue-500',
    },
    {
      icon: Code2,
      title: 'Code Coverage',
      description: 'Automated testing coverage achieved',
      value: '90%',
      color: 'bg-purple-500',
    },
    {
      icon: Users,
      title: 'Team Mentoring',
      description: 'Junior developers mentored',
      value: '15+',
      color: 'bg-orange-500',
    },
    {
      icon: Star,
      title: 'Client Satisfaction',
      description: 'Satisfaction score improvement',
      value: '95%',
      color: 'bg-yellow-500',
    },
    {
      icon: Zap,
      title: 'Bug Reduction',
      description: 'Reduction in bug reports',
      value: '60%',
      color: 'bg-red-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Achievements & Metrics
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Quantified results and recognition from my professional journey
          </p>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="slide-up-delay-{index}">
                <AchievementCard {...achievement} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
