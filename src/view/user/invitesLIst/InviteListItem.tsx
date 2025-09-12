import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { User, Mail, ExternalLink } from 'lucide-react';
import selectors from 'src/modules/user/userSelectors';

function InviteListItem(props: any) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const label = (record: any) => {
    if (!record) {
      return null;
    }

    if (!record.fullName) {
      return record.email;
    }

    return `${record.fullName} <${record.email}>`;
  };

  const displayableRecord = (record: any) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id} className="mb-2">
          <Link
            className="group inline-flex items-center space-x-3 p-3 bg-white border-2 border-gray-200 rounded-lg transition-all duration-200 hover:border-blue-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:border-blue-500 w-full text-left"
            to={`/invite/${record.id}`}
          >
            {/* User Avatar/Icon */}
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
              <User className="w-5 h-5 text-blue-600" />
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              {record.fullName ? (
                <div>
                  <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-900 transition-colors duration-200">
                    {record.fullName}
                  </p>
                  <div className="flex items-center mt-1">
                    <Mail className="w-3 h-3 text-gray-500 mr-1 flex-shrink-0" />
                    <p className="text-xs text-gray-600 truncate">
                      {record.email}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-900 transition-colors duration-200">
                    {record.email}
                  </p>
                </div>
              )}
            </div>

            {/* Link Indicator */}
            <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
              <ExternalLink className="w-4 h-4" />
            </div>
          </Link>
        </div>
      );
    }

    return (
      <div key={record.id} className="mb-2">
        <div className="inline-flex items-center space-x-3 p-3 bg-gray-50 border-2 border-gray-100 rounded-lg w-full">
          {/* User Avatar/Icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-gray-500" />
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            {record.fullName ? (
              <div>
                <p className="text-sm font-medium text-gray-700 truncate">
                  {record.fullName}
                </p>
                <div className="flex items-center mt-1">
                  <Mail className="w-3 h-3 text-gray-500 mr-1 flex-shrink-0" />
                  <p className="text-xs text-gray-500 truncate">
                    {record.email}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-700 truncate">
                  {record.email}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const records = valueAsArray();

  if (!records.length) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
          <User className="w-6 h-6 text-gray-400" />
        </div>
        <p className="text-sm text-gray-500">No invites found</p>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {/* Header for multiple items */}
      {records.length > 1 && (
        <div className="mb-4 pb-2 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">
              {records.length} invite{records.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      )}

      {/* List Items */}
      {records.map((value) => displayableRecord(value))}
    </div>
  );
}

InviteListItem.propTypes = {
  value: PropTypes.any,
};

export default InviteListItem;