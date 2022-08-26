import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="grid place-items-center bg-blue-100 px-6 font-sans pt-24">
                <Navbar />

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mb-5">
                    <Header />

                    <hr className="mt-4" />

                    <TodoList completed={false} />

                    <hr className="mt-4" />

                    <Footer completed={false} />
                </div>

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    <h3 className={`text-xl font-bold mb-4`}>Completed Tasks</h3>
                    <TodoList completed />

                    <hr className="mt-4" />

                    <Footer completed />
                </div>
            </div>
        </Provider>
    );
}

export default App;
