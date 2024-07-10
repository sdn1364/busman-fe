import {Outlet} from "react-router-dom";

const PublicLayout = () => {
    return (
        <div className='w-screen'>
            this is public layout
            <Outlet/>
        </div>
    );
};

export default PublicLayout;