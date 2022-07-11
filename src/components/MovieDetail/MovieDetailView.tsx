import { Film } from "../../models";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CharactersView from "./CharactersView";

const MovieDetailView = ({ movie, id }: { movie: Film, id: Number }) => {

    return movie?.title ? (
        <div className="film-detail">
            <div className="film-detail__cover-container">
                <Avatar
                    variant="square"
                    src={`/assets/${id}.jpeg`}
                    sx={{ width: 300, height: 300, display: 'inline-block' }}
                />

            </div>
            <Typography className="film-detail__text-title">
                {movie.title}
            </Typography>
            <Typography className="film-detail__text-info">
                Director: {movie.director}
            </Typography>
            <Typography className="film-detail__text-info">
                Año: {movie.release_date.split('-')[0]}
            </Typography>
            <Typography className="film-detail__text-description">
                {movie.opening_crawl}
            </Typography>
            <Typography variant="h4" className="film-detail__text-characters">Personajes</Typography>
            {movie?.characters?.map((character) => {
                const characterUrlParts = character.split("/").filter(Boolean);
                const characterId = characterUrlParts[characterUrlParts.length - 1];
                return <CharactersView id={characterId} key={characterId} />;
            })}
        </div>
    ) : (
        <div className="search-message"> Ocurrió un error</div>
    );
};

export default MovieDetailView;
