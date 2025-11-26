import Likes from "../pages/Likes";
import TrackPage from "../pages/TrackPage";

const commingSoon = () => {
  return (
    <div>
      <h1>Comming Soon</h1>
    </div>
  )
}

export const routes = [
  { path: "/", element: <Likes /> },
  { path: "/likes", element: <Likes /> },
  { path: "/likes/track/:id", element: <TrackPage /> },
];