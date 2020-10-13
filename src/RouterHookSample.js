// import React from 'react';
import useReactRouter from 'use-react-router';

export default function RouterHookSample() {
  const { history, location, match } = useReactRouter();
  console.log({ history, location, match });

  return null;
}
