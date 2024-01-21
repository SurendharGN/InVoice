
import './App.css'

function App() {
  


  return (
    <>
        <div>
            <header id="header">
                <h1 id="title" className='text-9xl my-14 font-bold'>InVoice</h1>
                <p id="desc" className='text-xl'>An invoice generator application for freelancers, small business owners, and professionals to streamline their invoicing process.</p>
            </header>

            <main id="main">
                    <a id="tokenCreation" href="/token">
                        <button className='border px-10 py-3 text-xl font-medium rounded-md my-10 ' id="invoiceGenerator">Create invoice</button>
                    </a>
                    
            </main>

            <footer id="footer">

            </footer>
        </div>
    </>
  )
}

export default App
