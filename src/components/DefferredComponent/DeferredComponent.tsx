import { PropsWithChildren, useEffect, useState } from 'react';

const DeferredComponent = ({ children, delay }: PropsWithChildren<{ delay?: number }>) => {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, delay ?? 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
};

export default DeferredComponent;
