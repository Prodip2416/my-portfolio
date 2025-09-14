import React from 'react';
import {
  Trophy,
  Target,
  TrendingUp,
  Award,
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

  const awards = [
    {
      title: 'Outstanding Technical Leadership',
      company: 'SSL Wireless',
      year: '2023',
      description:
        'Recognized for exceptional leadership in technical projects and team mentoring',
    },
    {
      title: 'Rookie of the Year',
      company: 'Al-Hiyal Software',
      year: '2019',
      description:
        'Awarded for outstanding performance and rapid skill development',
    },
    {
      title: 'GitHub Pull Shark',
      company: 'GitHub',
      year: '2024',
      description:
        'Achieved Pull Shark achievement for significant contributions',
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

          {/* Awards Section */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Awards & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
                >
                  <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {award.title}
                  </h4>
                  <p className="text-cyan-400 font-medium mb-2">
                    {award.company}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">{award.year}</p>
                  <p className="text-gray-300 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
