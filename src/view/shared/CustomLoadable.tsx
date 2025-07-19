// loadables.ts
import React, { ComponentType, LazyExoticComponent } from 'react';
import LoadingComponent from 'src/view/shared/LoadingComponent';

interface LoadableOptions {
  loader: () => Promise<{ default: ComponentType<any> }>;
}

export default function CustomLoadable({ loader }: LoadableOptions): React.FC {
  const LazyComponent: LazyExoticComponent<ComponentType<any>> = React.lazy(loader);

  const LoadableWrapper: React.FC = (props) => (
    <React.Suspense fallback={<LoadingComponent />}>
      <LazyComponent {...props} />
    </React.Suspense>
  );

  return LoadableWrapper;
}
