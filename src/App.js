import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from '~/layouts/Header';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import Footer from '~/layouts/Footer';
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {publicRoutes.map((item, index) => {
                    const Page = item.component;
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
