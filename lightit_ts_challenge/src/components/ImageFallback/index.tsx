import React, { useState } from "react";
import { type ImageSourcePropType, type ImageProps, Image } from "react-native";

export interface ImageFallbackProps extends ImageProps {
  fallback: ImageSourcePropType;
}

export function ImageFallback({
  fallback,
  source,
  onError,
  className,
  ...other
}: ImageFallbackProps) {
  const [isError, setIsError] = useState(false);
  return (
    <Image
    className={className}
    source={isError?fallback:source}
    onError={(...args) => {
      onError?.(...args);
      setIsError(true);
    }}
    {...other}
    />
  );
}
