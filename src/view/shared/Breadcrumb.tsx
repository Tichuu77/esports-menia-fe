import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string; // optional → if no path, render as plain text
}

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <ol className="text-sm flex items-center">
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = items.length - 1 === index;

        return (
          <li
            key={index}
            className={`${
              isLast
                ? 'text-gray-800 dark:text-white'
                : 'text-gray-500 dark:text-gray-200 mr-2'
            }`}
          >
            {!isFirst && (
              <FontAwesomeIcon
                className="mr-2 font-normal text-gray-400 dark:text-gray-200"
                icon={faChevronRight}
              />
            )}
            {item.path && !isLast ? (
              <Link className="hover:underline" to={item.path}>
                {item.label}
              </Link>
            ) : (
              item.label
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(Breadcrumb);
