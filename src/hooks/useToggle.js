import { useState, useEffect } from 'react';

export const useToggle = (initialClassName, open) => {
  const [containerClassName, setContainerClassName] = useState(initialClassName);

  useEffect(() => {
    setContainerClassName(open ? `${initialClassName} ${initialClassName}--open` : initialClassName);
  }, [open]);

  return containerClassName;
};
