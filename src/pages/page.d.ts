import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
  auth?: boolean;
};

// Add generic type
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
