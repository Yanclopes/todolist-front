import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Task} from "./pages/task/Task";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Task />} />
                {/*<Route path="/tag" element={<Tag />} />*/}
                {/*<Route path="/category" element={<Category />} />*/}
                {/*<Route path="/user" element={<User />} />*/}
            </Routes>
        </BrowserRouter>
    );
}
