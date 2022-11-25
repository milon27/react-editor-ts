import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import URL from "../../utils/constant/URL";
import Ck from "../pages/Ck";
import Home from "../pages/Home";
import MyQuill from "../pages/MyQuill";
import _404 from "../pages/_404";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={URL.HOME} element={<Home />} />
                <Route path={URL.CK} element={<Ck />} />
                <Route path={URL.QUIL} element={<MyQuill />} />


                <Route path="*" element={<_404 />} />

            </Routes>
        </BrowserRouter>
    )
}
