import Cats from "../components/Cats";
import CreateItem from "../components/CreateItem";
import Dogs from "../components/Dogs";
import Hospitals from "../components/Hospitals";
import HowToCare from "../components/HowToCare";
import MainPage from "../components/MainPage";
import UserProfile from "../components/UserProfile";
import OtherPets from "../components/OtherPets";
import ErrorPage from "../components/ErrorPage";
import PetPage from "../components/PetPage";
import EditItem from "../components/EditItem";
import Adopted from "../components/Adopted";


export const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/cats", element: <Cats /> },
    { path: "/dogs", element: <Dogs /> },
    { path: "/how-to-care", element: <HowToCare /> },
    { path: "/hospitals", element: <Hospitals /> },
    { path: "/user-profile", element: <UserProfile /> },
    { path: "/create-item", element: <CreateItem /> },
    { path: "/other-pets", element: <OtherPets /> },
    { path: "*", element: <ErrorPage /> },
    { path: "/pet/:uid", element: <PetPage /> },
    { path: "/pet/:uid/edit", element: <EditItem /> },
    {path:"adopted", element: <Adopted/>}
]


