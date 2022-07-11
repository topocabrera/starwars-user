import { useQuery } from 'react-query';
import React from 'react';
import FilmsCardView from '../components/Films/FilmsCardView';
import CardHeader from '@mui/material/CardHeader';
import Loading from '../components/Loading/Loading';

export default function IndexPage() {
  const { isLoading, isError, isSuccess, data } = useQuery('films', () =>
    fetch('https://swapi.dev/api/films/').then((res) => res.json())
  );

  const renderResult = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (isError) {
      return <div className='search-message'>Something went wrong</div>;
    }

    if (isSuccess) {
      return <FilmsCardView films={data.results} />;
    }

    return <></>;
  };

  return (
    <div className='home'>{renderResult()}</div>
  );
}
