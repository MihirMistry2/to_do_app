import { Toaster as HotToaster } from 'react-hot-toast';

const Toaster: React.FC = (): React.ReactElement => {
    return (
        <HotToaster
            position="bottom-right"
            toastOptions={{
                className: 'app-toast',
            }}
        />
    );
};

export default Toaster;
