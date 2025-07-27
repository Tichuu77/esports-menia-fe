import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'src/modules/tenant/list/tenantListActions';

function TenantListFilter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doFetch()as any);
  }, [dispatch]);

  return null;
}

export default TenantListFilter;
