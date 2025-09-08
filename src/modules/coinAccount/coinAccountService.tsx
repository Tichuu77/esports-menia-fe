import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import authAxios from 'src/modules/shared/axios/authAxios';

export default class CoinAccountService {
  static async edit(data:any) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/user`,
      body,
    );

    return response.data;
  }

 

  static async find( ) {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/coinAccount`,
    );
    return response.data;
  }

  static async fetchUsers(filter:any, orderBy:any, limit:number, offset:any) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/user`,
      {
        params,
      },
    );

    return response.data;
  }

  
}
