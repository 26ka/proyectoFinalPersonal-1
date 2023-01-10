import './Footer.css'

export function Footer(){

    return(
        <>
        <footer>
            <div className="container-fluid">
                <div className="row footer">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/jesse-y-joy.png?alt=media&token=dac39679-b192-412c-8f80-51838f4f9732" alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 text-center p-5 align-self-center">
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4 className="">banda de pop & rock anternativo</h4>
                        <br/>
                        
                    </div>
                    <div className="col-12 col-md-4 p-5 align-self-center">
                    <i className="bi bi-instagram fuente me-3"></i>
                    <i className="bi bi-twitter fuente me-3"></i>
                    <i className="bi bi-facebook fuente"></i>
                    </div>
                </div>
            </div>
        </footer> 
        </>
    )

}