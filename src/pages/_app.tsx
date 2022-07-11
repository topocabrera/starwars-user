import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import CardHeader from '@mui/material/CardHeader';
import '../../styles/globals.css';
import '../components/Films/styles/FilmsCardView.scss';
import '../components/MovieDetail/styles/MovieDetail.scss';
import '../components/Loading/styles/Loading.scss';
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <CardHeader className="header" title={<Link href="/">StarWars movies - Filadd</Link>}/>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
