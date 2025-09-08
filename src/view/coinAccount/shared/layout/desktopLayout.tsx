import { Calendar, CalendarCheck, Coins, Gift, TrendingDown, Trophy, User, Users } from "lucide-react";
import StatusBadge from "../components/statusBadge";
import SkeletonDesktopCard from "../skeleton/desktopSkeletonCard";
import DesktopStatCard from "../components/desktopStatCard";
import { formatDate } from "../utils";

export default function  DesktopLayout  ({data,loading}:any) {
 return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-80 mb-4"></div>
              <div className="flex gap-4">
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          ) : (
            <>
              
              <div className="flex gap-4 items-center">
                <StatusBadge
                  condition={!data?.isBlock} 
                  label={data?.isBlock ? "Blocked" : "Active"} 
                  type={data?.isBlock ? "danger" : "success"} 
                />
                <StatusBadge 
                  condition={!data?.isLimitExced} 
                  label={data?.isLimitExced ? "Limit Exceeded" : "Within Limits"} 
                  type={data?.isLimitExced ? "warning" : "success"} 
                />
              </div>
            </>
          )}
        </div>

        {/* Main Balance Card */}
        {loading ? (
          <div className="bg-gray-200 rounded-2xl p-8 mb-8 shadow-lg animate-pulse">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-8 bg-gray-300 rounded w-40 mb-4"></div>
                <div className="h-16 bg-gray-300 rounded w-32 mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-16"></div>
              </div>
              <div className="w-24 h-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-blue-600 to-gray-800 rounded-2xl p-8 text-white mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Total Balance</h2>
                <p className="text-6xl font-bold">{data?.coins}</p>
                <p className="text-xl opacity-75 mt-2">coins</p>
              </div>
              <Coins className="w-24 h-24 opacity-30" />
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {loading ? (
            <>
              <SkeletonDesktopCard />
              <SkeletonDesktopCard />
              <SkeletonDesktopCard />
              <SkeletonDesktopCard />
              <SkeletonDesktopCard />
            </>
          ) : (
            <>
              <DesktopStatCard 
                icon={Gift}
                title="Bonus Reward"
                value={data?.bonasReward}
                color="blue"
              />
              
              <DesktopStatCard 
                icon={Trophy}
                title="Win Reward"
                value={data?.winReward}
                color="gray"
              />
              
              <DesktopStatCard 
                icon={Users}
                title="Referral Reward"
                value={data?.refralReward}
                subtitle={`${data?.refralRewardCount} rewards earned`}
                color="black"
              />
              
              <DesktopStatCard 
                icon={TrendingDown}
                title="Withdrawal Reward"
                value={data?.withdralReward}
                color="blue"
              />
              
              <DesktopStatCard 
                icon={CalendarCheck}
                title="Daily Login Reward"
                value={data?.loginReward}
                color="blue"
              />
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Account Information */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-gray-600" />
              Account Information
            </h3>
            
            <div className="space-y-4">
              {loading ? (
                <>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-28"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-8"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="font-medium text-gray-700">Last Login</span>
                    </div>
                    <span className="font-semibold text-gray-900">{formatDate(data?.lastLoginDate)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-700">Account Created</span>
                    </div>
                    <span className="font-semibold text-gray-900">{formatDate(data?.createdAt)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-500" />
                      <span className="font-medium text-gray-700">Total Referrals</span>
                    </div>
                    <span className="font-semibold text-gray-900">{data?.refferals.length}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Referrals Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-gray-600" />
              Referrals {!loading && `(${data?.refferals.length})`}
            </h3>
            
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-pulse">
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                  </div>
                ))}
              </div>
            ) : data?.refferals && data?.refferals.length > 0 ? (
              <div className="space-y-4">
                {data?.refferals.map((referral: any, index: any) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Referral #{index + 1}</p>
                      <p className="text-sm text-gray-600">{formatDate(referral.date)}</p>
                    </div>
                    <StatusBadge 
                      label={referral.status} 
                      type={referral.status === 'accept' ? 'success' : referral.status === 'reject' ? 'danger' : 'warning'} 
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No referrals yet</p>
              </div>
            )}
          </div>
          
        </div>
        
      </div>
    </div>
  );
}