 
import Roles from 'src/security/roles';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
 

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.owner ],
        
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.owner],
        
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.owner],
        
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.owner],
        
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.owner],
        
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.owner],
        
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.owner,roles.admin],
        
      },
        userInvite: {
        id: 'userCreate',
        allowedRoles: [roles.owner,roles.user],
      },
       userRemoveInvite: {
        id: 'userCreate',
        allowedRoles: [roles.owner,roles.user],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.owner, roles.admin],
        
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin, roles.owner],
        
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.owner],
        
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner],
        
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
        
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      settingsRead: {
        id: 'settingsRead',
        allowedRoles: [roles.owner],
        
      },
      addministrator: {
        id: 'administrator',
        allowedRoles: [roles.owner, roles.admin],
      
      },
      workSpeacen:{
        id: 'workSpace',
        allowedRoles: [roles.owner, roles.admin],
        
      },
      dashboardRead: {
        id: 'dashboardRead',
        allowedRoles: [roles.owner],
        
      },
      ownerAccess: {
        id: 'ownerAccess',
        allowedRoles: [roles.owner],
        
      },
      hostAccess: {
        id: 'hostAccess',
        allowedRoles: [roles.host],
        
      },
      userAccess: {
        id: 'userAccess',
        allowedRoles: [roles.user],
        
      },
      adminAccess: {
        id: 'adminAccess',
        allowedRoles: [roles.admin],
        
      },
  }
}


static get asArray() {
  return (Object.keys(this.values) as (keyof typeof this.values)[])
    .map((key) => this.values[key]);
}

}

export default Permissions;
