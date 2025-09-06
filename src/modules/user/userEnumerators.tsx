import Roles from 'src/security/roles';

const userEnumerators = {
  status: ['active', 'invited', 'blocked'],
  inviteStatus:[ 'accept','invite', 'reject'],
  roles: Object.keys(Roles.values),
  userType: ['user', 'host'],
  userTypeForAdmin: ['user', 'host', 'admin'],
};

export default userEnumerators;
