import React from "react";

interface ParentProps {
  id?: any;
  className?: string;
  style?: any;
  onClick?: (event: any) => void;
  onDoubleClick?: any;
  children?: any;
}

const Parent: React.FC<ParentProps> = ({
  id,
  className,
  onClick,
  style,
  children,
  onDoubleClick,
  ...props
}) => {
  return (
    <div
      id={id}
      className={className}
      style={style}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Parent;
