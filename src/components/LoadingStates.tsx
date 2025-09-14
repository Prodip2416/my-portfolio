import React from 'react';

// Skeleton Components
export const SkeletonCard = () => (
  <div className="bg-gray-900 dark:bg-white rounded-xl overflow-hidden border border-gray-800 dark:border-gray-200 animate-pulse">
    <div className="w-full h-48 bg-gray-700 dark:bg-gray-200"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-700 dark:bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-700 dark:bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 dark:bg-gray-200 rounded mb-4 w-3/4"></div>
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-gray-700 dark:bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-700 dark:bg-gray-200 rounded-full w-20"></div>
        <div className="h-6 bg-gray-700 dark:bg-gray-200 rounded-full w-14"></div>
      </div>
      <div className="flex gap-4">
        <div className="h-4 bg-gray-700 dark:bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-700 dark:bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  </div>
);

export const SkeletonText = ({
  lines = 3,
  className = '',
}: {
  lines?: number;
  className?: string;
}) => (
  <div className={`animate-pulse ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div
        key={i}
        className={`h-4 bg-gray-700 dark:bg-gray-200 rounded mb-2 ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      ></div>
    ))}
  </div>
);

export const SkeletonAvatar = ({ size = 'w-16 h-16' }: { size?: string }) => (
  <div
    className={`${size} bg-gray-700 dark:bg-gray-200 rounded-full animate-pulse`}
  ></div>
);

export const SkeletonButton = ({ width = 'w-32' }: { width?: string }) => (
  <div
    className={`${width} h-10 bg-gray-700 dark:bg-gray-200 rounded-full animate-pulse`}
  ></div>
);

// Loading Spinner
export const LoadingSpinner = ({ size = 'w-8 h-8' }: { size?: string }) => (
  <div className="flex justify-center items-center">
    <div
      className={`${size} border-4 border-gray-300 dark:border-gray-600 border-t-cyan-500 rounded-full animate-spin`}
    ></div>
  </div>
);

// Loading Dots
export const LoadingDots = () => (
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
    <div
      className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
      style={{ animationDelay: '0.1s' }}
    ></div>
    <div
      className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
      style={{ animationDelay: '0.2s' }}
    ></div>
  </div>
);

// Page Loading Component
export const PageLoader = () => (
  <div className="min-h-screen bg-gray-950 dark:bg-gray-100 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-600 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
      <h2 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">
        Loading Portfolio
      </h2>
      <p className="text-gray-400 dark:text-gray-600">
        Please wait while we prepare your experience...
      </p>
    </div>
  </div>
);

// Section Loading Component
export const SectionLoader = ({ title = 'Loading...' }: { title?: string }) => (
  <div className="py-20 bg-gray-900 dark:bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white dark:text-gray-900 mb-4">
          {title}
        </h2>
        <LoadingDots />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </div>
);

// Skill Loading Component
export const SkillLoader = () => (
  <div className="space-y-4">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="flex justify-between items-center mb-2">
          <div className="h-4 bg-gray-700 dark:bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-700 dark:bg-gray-200 rounded w-12"></div>
        </div>
        <div className="w-full bg-gray-700 dark:bg-gray-200 rounded-full h-2"></div>
      </div>
    ))}
  </div>
);

// Project Grid Loading
export const ProjectGridLoader = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Stats Loading
export const StatsLoader = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="bg-gray-800 dark:bg-white p-6 rounded-xl border border-gray-700 dark:border-gray-200 animate-pulse"
      >
        <div className="w-8 h-8 bg-gray-700 dark:bg-gray-200 rounded mb-4"></div>
        <div className="h-8 bg-gray-700 dark:bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 dark:bg-gray-200 rounded w-3/4"></div>
      </div>
    ))}
  </div>
);

// Error State Component
export const ErrorState = ({
  title = 'Something went wrong',
  message = 'Please try again later',
  onRetry,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
}) => (
  <div className="text-center py-12">
    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg
        className="w-8 h-8 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-400 dark:text-gray-600 mb-4">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors"
      >
        Try Again
      </button>
    )}
  </div>
);

// Empty State Component
export const EmptyState = ({
  title = 'No data available',
  message = 'Check back later for updates',
  icon: Icon,
}: {
  title?: string;
  message?: string;
  icon?: React.ComponentType<any>;
}) => (
  <div className="text-center py-12">
    {Icon && (
      <div className="w-16 h-16 bg-gray-700 dark:bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-gray-400" />
      </div>
    )}
    <h3 className="text-xl font-semibold text-white dark:text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-400 dark:text-gray-600">{message}</p>
  </div>
);
