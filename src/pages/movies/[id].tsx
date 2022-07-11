import { useQuery } from "react-query";
import CircularProgress from '@mui/material/CircularProgress';
import MovieDetailView from "../../components/MovieDetail/MovieDetailView";

export default function MoviePage() {

  const { isLoading, isError, isSuccess, data } = useQuery('films', () => {
    const id = window && window.location?.pathname ? window.location.pathname.split('/')[2] : null;
    if (id) {
      return fetch(`https://swapi.dev/api/films/${window.location.pathname.split('/')[2]}/`).then(res =>
        res.json()
      )
    }
  }
  );

  const renderResult = () => {
    if (!data) {
      return <div className="search-message"> <CircularProgress /> </div>;
    }

    if (isLoading) {
      return <div className="search-message"> Loading... </div>;
    }

    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }

    if (isSuccess) {
      return <MovieDetailView movie={data} id={1} />
    }

    return <></>;
  };

  return (
    <div className="home">
      {renderResult()}
    </div>
  );
}