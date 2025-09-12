import React, { useEffect, useMemo, useCallback } from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { TrendingUp, TrendingDown, Users, Coins, Target, Calendar } from 'lucide-react';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import { i18n } from 'src/i18n';
import InviteDashboardFilter from './InvitesDashboardFilter';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'src/modules/invites/dashboard/invitesDashboardListActions';
import selectors from 'src/modules/invites/dashboard/invitesDashboardSelectors';

// Sample time series data for charts - this should come from your API
const monthlyTrends = [
  { month: 'Jan', invites: 180, coins: 2160, accepted: 124 },
  { month: 'Feb', invites: 220, coins: 2640, accepted: 156 },
  { month: 'Mar', invites: 195, coins: 2340, accepted: 142 },
  { month: 'Apr', invites: 267, coins: 3204, accepted: 187 },
  { month: 'May', invites: 310, coins: 3720, accepted: 223 },
  { month: 'Jun', invites: 285, coins: 3420, accepted: 199 },
  { month: 'Jul', invites: 340, coins: 4080, accepted: 245 },
  { month: 'Aug', invites: 287, coins: 4205, accepted: 205 }
];
 

 
// KPI Card Component with proper null checking
const KPICard = React.memo(({ title, value, subValue, trend, icon: Icon, color = "blue" }: any) => {
  const colorClasses: any = {
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800",
    yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800"
  };

  return (
    <div className={`p-6 rounded-xl border-2 ${colorClasses[color]} transition-all duration-300 hover:shadow-lg hover:scale-105`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          <p className="text-3xl font-bold mt-2">{value || '0'}</p>
          {subValue && <p className="text-sm opacity-70 mt-1">{subValue}</p>}
        </div>
        <div className="p-3 rounded-full bg-white bg-opacity-50">
          <Icon size={24} />
        </div>
      </div>
      {trend && (
        <div className="flex items-center mt-4 text-sm">
          {trend.direction === 'up' ? (
            <TrendingUp size={16} className="text-green-600 mr-1" />
          ) : (
            <TrendingDown size={16} className="text-red-600 mr-1" />
          )}
          <span className={trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}>
            {trend.value || 0}% from last month
          </span>
        </div>
      )}
    </div>
  );
});

// Chart Card Wrapper
const ChartCard = React.memo(({ title, children, className = "" }: any) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${className}`}>
    <h3 className="text-xl font-bold text-gray-800 mb-6">{title}</h3>
    {children}
  </div>
));

// Custom Tooltip Components
const CustomTooltip = React.memo(({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-800">{label}</p>
        {payload.map((pld: any, index: any) => (
          <div key={index} className="flex items-center mt-2">
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: pld.color }}
            ></div>
            <span className="text-sm text-gray-600">
              {pld.dataKey}: <span className="font-semibold">{pld.value}</span>
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
});

// Loading Component
const LoadingDashboard = React.memo(() => (
  <div className="min-h-screen bg-gray-50 p-6">
      <Breadcrumb
        items={[
          { label: i18n('user.home'), path: '/' }, 
          { label: i18n('user.invite.dashboard.title')},  
        ]}
      />
      
      <div className="mx-auto my-8">
        {/* Header */}        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Invite Dashboard</h1>
          <p className="text-gray-600">Monitor your invitation performance and analytics</p>
        </div>

        {/* Filter Component */}
        <InviteDashboardFilter />
    
    <div className="mx-auto my-8">
      <div className="animate-pulse">
        {/* Header Loading */}
        <div className="mb-8">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </div>
        
        {/* KPI Cards Loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 rounded-xl border-2 bg-gray-100">
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
        
        {/* Charts Loading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
));

// Error Component
const ErrorDashboard = React.memo(({ error }: { error: string }) => (
  <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
    <div className="bg-white p-8 rounded-xl shadow-lg border border-red-200 text-center">
      <div className="text-red-500 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Error</h2>
      <p className="text-gray-600 mb-4">Failed to load dashboard data</p>
      <p className="text-sm text-red-600">{error}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Retry
      </button>
    </div>
  </div>
));

// Helper function to safely get nested values
const safeGet = (obj: any, path: string, defaultValue: any = 0) => {
  return path.split('.').reduce((current, key) => 
    (current && current[key] !== undefined && current[key] !== null) ? current[key] : defaultValue, obj
  );
};

// Main Dashboard Component
const InviteDashboard = () => {
  const dispatch = useDispatch();
  
  // Use Redux selectors
  const data = useSelector(selectors.selectDataDetails);
  const loading = useSelector(selectors.selectLoading);
  const error = useSelector(selectors.selectError);

  console.log('data', data);

  // FIXED: Single useEffect with proper dependencies and guards
  useEffect(() => {
    // Only fetch if we don't have data and we're not already loading
    if (!data && !loading && !error) {
      console.log("🚀 Fetching dashboard data...");
      dispatch(actions.doFetch() as any);
    }
  }, [dispatch]); // Only depend on dispatch, which is stable

  // Memoize processed data to prevent unnecessary re-renders
  const processedData = useMemo(() => {
    if (!data) return null;
    
    return {
      overallStats: safeGet(data, 'overallStats', {}),
      todayStats: safeGet(data, 'todayStats', {}),
      thisMonthStats: safeGet(data, 'thisMonthStats', {}),
      comparisonWithPreviousMonth: safeGet(data, 'comparisonWithPreviousMonth', {}),
      monthlyTrends: safeGet(data, 'monthlyTrends',  {}),
      inviteStatusData: safeGet(data, 'inviteStatusData',  {}),
      topPerformers: safeGet(data, 'topPerformers',  {}),
      averageRates: safeGet(data, 'averageRates', {})
    };
  }, [data]);

  // Memoize KPI data to prevent recalculation
  const kpiData = useMemo(() => {
    if (!processedData) return null;
    
    return {
      totalInvites: {
        value: processedData.overallStats.totalInvites?.toLocaleString() || '0',
        subValue: `${processedData.todayStats.todayInvites || 0} today`,
        trend: {
          direction: processedData.comparisonWithPreviousMonth.inviteGrowthTrend || 'stable',
          value: Math.abs(processedData.comparisonWithPreviousMonth.inviteGrowthPercentage || 0)
        }
      },
      totalCoins: {
        value: `₹${processedData.overallStats.totalCoinInvested?.toLocaleString() || '0'}`,
        subValue: `₹${processedData.todayStats.todayCoinInvest || 0} today`,
        trend: {
          direction: (processedData.comparisonWithPreviousMonth.coinGrowthPercentage || 0) > 0 ? 'up' : 'down',
          value: Math.abs(processedData.comparisonWithPreviousMonth.coinGrowthPercentage || 0)
        }
      },
      acceptanceRate: {
        value: `${processedData.overallStats.overallAcceptanceRate || 0}%`,
        subValue: `${processedData.todayStats.todayAcceptanceRate || 0}% today`
      },
      thisMonth: {
        value: processedData.thisMonthStats.thisMonthInvites?.toLocaleString() || '0',
        subValue: `₹${processedData.thisMonthStats.thisMonthCoinInvest?.toLocaleString() || '0'} invested`
      }
    };
  }, [processedData]);

  // Manual refresh function for the retry button
  const handleRefresh = useCallback(() => {
    console.log("🔄 Manual refresh triggered");
    dispatch(actions.doFetch() as any);
  }, [dispatch]);

  // Show loading state
  if (loading) {
    return <LoadingDashboard />;
  }

  // Show error state
  if (error) {
    return <ErrorDashboard error={error} />;
  }

  // Show empty state if no data
  if (!processedData) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <Breadcrumb
          items={[
            { label: i18n('user.home'), path: '/' }, 
            { label: i18n('user.invite.dashboard.title')},  
          ]}
        />
        <div className="mx-auto my-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Invite Dashboard</h1>
          <p className="text-gray-600 mb-8">No data available at the moment</p>
          <button 
            onClick={handleRefresh}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Load Data
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Breadcrumb
        items={[
          { label: i18n('user.home'), path: '/' }, 
          { label: i18n('user.invite.dashboard.title')},  
        ]}
      />
      
      <div className="mx-auto my-8">
        {/* Header */}        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Invite Dashboard</h1>
          <p className="text-gray-600">Monitor your invitation performance and analytics</p>
        </div>

        {/* Filter Component */}
        <InviteDashboardFilter />
        
        {/* KPI Cards Row - with proper null checking */}
        {kpiData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard
              title="Total Invites"
              value={kpiData.totalInvites.value}
              subValue={kpiData.totalInvites.subValue}
              trend={kpiData.totalInvites.trend}
              icon={Users}
              color="blue"
            />
            
            <KPICard
              title="Total Coins Invested"
              value={kpiData.totalCoins.value}
              subValue={kpiData.totalCoins.subValue}
              trend={kpiData.totalCoins.trend}
              icon={Coins}
              color="green"
            />
            
            <KPICard
              title="Acceptance Rate"
              value={kpiData.acceptanceRate.value}
              subValue={kpiData.acceptanceRate.subValue}
              icon={Target}
              color="purple"
            />
            
            <KPICard
              title="This Month"
              value={kpiData.thisMonth.value}
              subValue={kpiData.thisMonth.subValue}
              icon={Calendar}
              color="yellow"
            />
          </div>
        )}

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Trends - Line Chart */}
          <ChartCard title="Monthly Invite Trends" className="lg:col-span-1">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={processedData.monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="invites" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  name="Invites Sent"
                />
                <Line 
                  type="monotone" 
                  dataKey="accepted" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                  name="Accepted"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Invite Status Distribution - Pie Chart */}
          <ChartCard title="Invite Status Distribution">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={processedData.inviteStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {processedData.inviteStatusData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: any, name: any) => [value?.toLocaleString(), name]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coins Investment - Area Chart */}
          <ChartCard title="Coins Investment Over Time" className="lg:col-span-2">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={processedData.monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="coins" 
                  stroke="#f59e0b" 
                  fill="url(#colorCoins)" 
                  strokeWidth={2}
                  name="Coins Invested"
                />
                <defs>
                  <linearGradient id="colorCoins" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Top Performers */}
          <ChartCard title="Top Performers">
            <div className="space-y-4">
              {processedData.topPerformers.map((performer: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-semibold text-gray-800">{performer.name || 'Unknown'}</p>
                    <p className="text-sm text-gray-600">
                      {performer.invites || 0} invites • {performer.accepted || 0} accepted
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₹{performer.coins || 0}</p>
                    <p className="text-xs text-gray-500">
                      {performer.invites > 0 ? Math.round((performer.accepted / performer.invites) * 100) : 0}% rate
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {processedData.averageRates.averageInvitesPerDay || 0}
              </p>
              <p className="text-sm text-gray-600">Avg Invites/Day</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                ₹{processedData.averageRates.averageCoinPerInvite || 0}
              </p>
              <p className="text-sm text-gray-600">Avg Coins/Invite</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">
                {processedData.overallStats.uniqueInviters || 0}
              </p>
              <p className="text-sm text-gray-600">Active Inviters</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">
                {processedData.overallStats.uniqueInvitees || 0}
              </p>
              <p className="text-sm text-gray-600">Unique Invitees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteDashboard;