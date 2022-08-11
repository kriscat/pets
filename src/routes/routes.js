import Cats from "../components/CatsPage";
import CreateItem from "../components/CreateItemPage";
import Dogs from "../components/DogsPage";
import Hospitals from "../components/HospitalsPage";
import HowToCare from "../components/HowToCarePage";
import MainPage from "../components/MainPage";
import UserProfile from "../components/UserProfilePage";
import OtherPets from "../components/OtherPetsPage";
import ErrorPage from "../components/ErrorPage";
import PetPage from "../components/PetPage";
import EditItem from "../components/EditItemPage";
import LogoutPage from "../components/LogoutPage";
import AllPetsPage from "../components/AllPetsPage";


export const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/pets", element: <AllPetsPage/> },
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
       { path: "/logout", element: <LogoutPage /> },
]


