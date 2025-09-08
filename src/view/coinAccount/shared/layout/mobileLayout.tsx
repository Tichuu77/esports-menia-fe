import { Calendar, CalendarCheck, Coins, Gift, TrendingDown,  Trophy, User, Users } from "lucide-react";
import StatusBadge from "../components/statusBadge";
import SkeletonCard from "../skeleton/skeletonCard";
import MobileStatCard from "../components/mobileStatCard";
import SkeletonInfoRow from "../skeleton/skeletonInfoRow";
import InfoRow from "../components/infoRow";
import { formatDate } from "../utils";

export default function  MobileLayout ({data,loading}:any) {
 
return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-sm mx-auto">
        
        {/* Header Card */}
        {loading ? (
          <div className="bg-gray-200 rounded-3xl p-6 mb-6 shadow-lg animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="h-6 bg-gray-300 rounded w-24"></div>
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="mb-4">
              <div className="h-4 bg-gray-300 rounded w-20 mb-2"></div>
              <div className="h-10 bg-gray-300 rounded w-16 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-12"></div>
            </div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-300 rounded-full w-16"></div>
              <div className="h-6 bg-gray-300 rounded-full w-24"></div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-blue-600 to-gray-800 rounded-3xl p-6 text-white mb-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
             
              <Coins className="w-8 h-8" />
            </div>
            <div className="mb-4">
              <p className="text-sm opacity-90 mb-1">Total Balance</p>
              <p className="text-4xl font-bold">{data?.coins}</p>
              <p className="text-sm opacity-75">coins</p>
            </div>
            <div className="flex gap-2">
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
          </div>
        )}

        {/* Rewards Grid - Fixed for mobile */}
        <div className="space-y-4 mb-6">
          {/* First Row - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              <>
                <MobileStatCard
                  icon={Gift}
                  title="Bonus"
                  value={data?.bonasReward}
                  color="blue"
                />
                
                <MobileStatCard 
                  icon={Trophy}
                  title="Win Reward"
                  value={data?.winReward}
                  color="gray"
                />
                
                <MobileStatCard 
                  icon={Users}
                  title="Referral"
                  value={data?.refralReward}
                  subtitle={`${data?.refralRewardCount} rewards`}
                  color="black"
                />
                
                <MobileStatCard 
                  icon={TrendingDown}
                  title="Withdrawn"
                  value={data?.withdralReward}
                  color="blue"
                />
              </>
            )}
          </div>
          
          {/* Daily Login Reward - Separate single card */}
          {loading ? (
            <SkeletonCard />
          ) : (
            <MobileStatCard 
              icon={CalendarCheck}
              title="Daily Login Reward"
              value={data?.loginReward}
              color="blue"
            />
          )}
        </div>

        {/* Account Info Card */}
        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" />
            Account Info
          </h3>
          
          <div className="space-y-0">
            {loading ? (
              <>
                <SkeletonInfoRow />
                <SkeletonInfoRow />
                <SkeletonInfoRow />
              </>
            ) : (
              <>
                <InfoRow 
                  icon={Calendar}
                  label="Last Login"
                  value={formatDate(data?.lastLoginDate)}
                  color="blue"
                />
                
                <InfoRow 
                  icon={Calendar}
                  label="Created"
                  value={formatDate(data?.createdAt)}
                  color="gray"
                />
                
                <InfoRow 
                  icon={Users}
                  label="Total Referrals"
                  value={data?.refferals.length}
                  color="gray"
                />
              </>
            )}
          </div>
        </div>

        {/* Referrals Card */}
        {!loading && data?.refferals && data?.refferals.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-600" />
              Recent Referrals
            </h3>
            <div className="space-y-3">
              {data?.refferals.slice(0, 3).map((referral: any, index: any) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Referral #{index + 1}</p>
                    <p className="text-xs text-gray-500">{formatDate(referral.date)}</p>
                  </div>
                  <StatusBadge 
                    label={referral.status} 
                    type={referral.status === 'accept' ? 'success' : referral.status === 'reject' ? 'danger' : 'warning'} 
                  />
                </div>
              ))}
              {data?.refferals.length > 3 && (
                <p className="text-center text-sm text-gray-500 pt-2">
                  +{data?.refferals.length - 3} more referrals
                </p>
              )}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}