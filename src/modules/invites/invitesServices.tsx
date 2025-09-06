import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import authAxios from 'src/modules/shared/axios/authAxios';

export default class InvitesService {
  static async edit(id:string,data:any) {
    const body = {
      status:data,
    };

    const tenantId = AuthCurrentTenant.get();
   console.log('InvitesService edit id,data:', id, data);
    const response = await authAxios.put(
      `/tenant/${tenantId}/invites/${id}`,
      body,
    );

    return response.data;
  }

  static async destroy(ids:any[]) {
    console.log('InvitesService destroy ids:', ids);
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/invites-remove`,
      {
        params,
      },
    );

    return response.data;
  }

  static async fetchDashboard(filter:any) {
    const params = {
      filter,
    };  
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/invites-dashboard`,
      {
        params,
      },
    );
    console.log('InvitesService fetchDashboard response:', response);
    return response.data;
  }
  static async removeInvite(ids:any[]) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/invite-remove`,
      {
        params,
      },
    );

    return response.data;
  }
  static async create(data:any) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/user`,
      body,
    );

    return response.data;
  }

   static async invite(data:any) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/invite`,
      body,
    );

    return response.data;
  }

  static async import(values:any, importHash:any) {
    const body = {
      data: {
        ...values,
      },
      importHash,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/user/import`,
      body,
    );

    return response.data;
  }

  static async find(id:string) {
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.get(
      `/tenant/${tenantId}/invites/${id}`,
    );
    return response.data;
  }

  
   static async fetchInvites(filter:any, orderBy:any, limit:number, offset:any) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/get-invites`,
      {
        params,
      },
    );
    return response.data;
  }

  
}
