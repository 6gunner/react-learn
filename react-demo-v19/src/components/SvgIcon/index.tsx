import React, { memo } from 'react';

export interface SvgIconProps {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SvgIcon = memo(
  ({
    size = 20,
    height,
    width,
    name,
    onClick,
    className = '',
    prefix = 'icon',
    style,
    ...rest
  }: SvgIconProps) => {
    const symbolId = `#${prefix}-${name}`;
    return (
      <svg
        className={className}
        width={width ? width : size}
        height={height ? height : size}
        {...rest}
        aria-hidden="true"
        onClick={onClick}
        style={style}
      >
        <use href={symbolId} />
      </svg>
    );
  }
);

export default SvgIcon;
