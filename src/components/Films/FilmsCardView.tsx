import { useState } from "react";
import { Film } from "../../models";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Icon from "@mui/material/Icon";

const FilmsCardView = ({ films }: { films: Film[] }) => {
  const [selection, setSelection] = useState("date");

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    setSelection(event.target.value);
    if (event.target.value === "date") {
      films.sort((a, b) =>
        b.release_date < a.release_date
          ? 1
          : b.release_date > a.release_date
            ? -1
            : 0
      );
    } else {
      films.sort((a, b) =>
        b.title < a.title ? 1 : b.title > a.title ? -1 : 0
      );
    }
  };

  return films?.length > 0 ? (
    <div className="film">
      <div className="film__filter-container">
        <Typography className="film__filter-text">Ordenar por:</Typography>
        <Select
          value={selection}
          onChange={handleChange}
          className="film__filter-select"
        >
          <MenuItem value="date">Fecha</MenuItem>
          <MenuItem value="alphabetic">Orden alfabético</MenuItem>
        </Select>
      </div>
      <div className="film__info-container">
        {films.map((film) => {
          const idFilm = film.url.split("/")[5];
          return (
            <Card className="film__card-container" key={film.title}>
              <CardContent>
                <div className="film__avatar-container">
                  <Avatar
                    className="film__avatar"
                    variant="square"
                    src={`/assets/${idFilm}.jpeg`}
                    sx={{ width: 56, height: 56 }}
                  />
                </div>
                <div className="film__text-container">
                  <Typography className="film__text-title">
                    {film.title}
                  </Typography>
                  <Typography>
                    <Icon className="film__info-icon" color="primary">
                      <InfoIcon />
                    </Icon>
                    Director: {film.director}
                  </Typography>
                  <Typography>
                    <Icon className="film__info-icon" color="primary">
                      <InfoIcon />
                    </Icon>
                    Fecha emisión: {film.release_date}
                  </Typography>
                </div>
              </CardContent>
              <CardActions className="film__button-container">
                <Button
                  className="film__more-info-link"
                  variant="contained"
                  size="small"
                  href={`/movies/${idFilm}`}
                >
                  Mas info
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="search-message"> No Films found</div>
  );
};

export default FilmsCardView;
