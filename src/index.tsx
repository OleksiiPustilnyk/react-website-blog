import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const Header = () => {
    return <div className="red">Header</div>
}

const App = () => {
    return <Header />
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
