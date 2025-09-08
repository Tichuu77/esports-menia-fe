import { useEffect } from 'react';
import { i18n } from 'src/i18n';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import actions from 'src/modules/coinAccount/view/coinAccountActions';
import { useDispatch, useSelector } from 'react-redux';
import CoinAccountDisplay from './coinAccountDisplay';
import { useNavigate } from 'react-router-dom';
import selector from 'src/modules/coinAccount/view/coinAccountSelectors'

function CoinAccountPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const coinAccount =  useSelector(selector.selectCoinAccount);
  const loading = useSelector(selector.selectLoading)
 

  useEffect(() => {
    dispatch(actions.doFind(navigate) as any);
  }, [dispatch]);

  return (
    <>
      <Breadcrumb
       items={[
                { label: i18n('user.home'), path: '/' }, 
                { label: i18n('user.coinAccount.menu')},  
              ]}
      />
      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('user.coinAccount.title')}
        </h1>
        
        {/* Desktop Table - Hidden on mobile */}
        <div >
          <CoinAccountDisplay accountData={coinAccount} loading={loading}/>
        </div>
        
      </div>
    </>
  );
}

export default CoinAccountPage;