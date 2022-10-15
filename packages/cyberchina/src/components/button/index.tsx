import React, { forwardRef, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export default forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children } = props;

  return <button ref={ref}>{children}</button>;
});
