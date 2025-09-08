 import MobileLayout from './shared/layout/mobileLayout';
import DesktopLayout from './shared/layout/desktopLayout';

const CoinAccountDisplay = ({ accountData, loading}: any) => {
   
  return (
    <>
      {/* Mobile Layout - Hidden on desktop */}
      <div className="block lg:hidden">
        <MobileLayout data={accountData} loading={loading} />
      </div>
      
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:block">
        <DesktopLayout  data={accountData} loading={loading}/>
      </div>
    </>
  );
};

export default CoinAccountDisplay;