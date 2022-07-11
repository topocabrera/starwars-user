import { useQuery } from "react-query";
import Typography from "@mui/material/Typography";

const CharacterView = ({ id }: { id: string }) => {
    const { isLoading, isError, isSuccess, data } = useQuery(`character-${id}`, () =>
        fetch(`https://swapi.dev/api/people/${id}/`).then(res =>
            res.json()
        )
    );

    const renderResult = () => {
        if (isLoading) {
            return <div className="search-message"> Loading... </div>;
        }

        if (isError) {
            return <div className="search-message">Something went wrong</div>;
        }

        if (isSuccess) {
            return <Typography variant="body1">{data.name}</Typography>;
        }

        return <></>;
    };

    return (
        <div className="character-result">
            {renderResult()}
        </div>
    );
}

export default CharacterView;
