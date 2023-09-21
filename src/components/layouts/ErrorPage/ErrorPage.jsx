import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mt-[15%]">
            <h1 className="text-5xl text-center">Not Found!!!</h1>
            <NavLink to='/' className='ml-[46%] mt-5 btn btn-error'>Go Home</NavLink>
        </div>
    );
};

export default ErrorPage;