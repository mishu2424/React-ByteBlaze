import { ScaleLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='relative min-h-[calc(100vh-116px)] flex items-center justify-center'>
            <ScaleLoader color='pink'/>
        </div>
    );
};

export default LoadingSpinner;