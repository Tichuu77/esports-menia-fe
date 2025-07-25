import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import authAxios from 'src/modules/shared/axios/authAxios';

export default class AuditLogService {
  static async fetch(filter :any, orderBy : string, limit :number, offset :number) {
    const query = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/audit-log`,
      {
        params: query,
      },
    );

    return response.data;
  }
}
