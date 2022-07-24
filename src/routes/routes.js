import Cats from "../components/Cats/Cats";
import CreateItem from "../components/CreateItem";
import Dogs from "../components/Dogs/Dogs";
import Hospitals from "../components/Hospitals/Hospitals";
import HowToCare from "../components/HowToCare/HowToCare";
import MainPage from "../components/MainPage/MainPage";
import UserProfile from "../components/UserProfile";
import OtherAnimals from "../components/OtherAnimals";


export const routes = [
    { path: "*", element: <MainPage /> },
    { path: "/cats", element: <Cats /> },
    { path: "/dogs", element: <Dogs /> },
    { path: "/how-to-care", element: <HowToCare /> },
    { path: "/hospitals", element: <Hospitals /> },
    { path: "/user-profile", element: <UserProfile /> },
    { path: "/create-item", element: <CreateItem /> },
    {path: "/other-animals", element:<OtherAnimals/>},
]


