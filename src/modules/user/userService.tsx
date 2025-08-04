import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import authAxios from 'src/modules/shared/axios/authAxios';

export default class UserService {
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

  static async destroy(ids:any[]) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/user`,
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
      `/tenant/${tenantId}/user/${id}`,
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

  static async fetchUserAutocomplete(query:any, limit:number) {
    const params = {
      query,
      limit,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/user/autocomplete`,
      {
        params,
      },
    );
    return response.data;
  }
}
