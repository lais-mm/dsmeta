import { Fragment } from "react"
import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"

function App() {
    return (
        <Fragment>
            <Header />
            <main>
            <section id="sales">
                <div className="dsmeta-container">
                    <SalesCard/>
                </div>
            </section>
            </main>
        </Fragment>

    )
}

export default App
