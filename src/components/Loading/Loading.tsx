import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div className="progress">
            <CircularProgress size={100}/>
        </div>
    );
}

export default Loading;
