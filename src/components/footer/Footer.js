import React from 'react'

export default function FooterElement() {
  return (
  <footer classNameName="bg-dark text-center  text-white"> 
  <div className="container p-4 pb-0 d-flex justify-content-center">
    {/* <!-- Section: Social media --> */}
    <section className="mb-1">
      {/* <!-- Facebook --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/raj-kumar-b8b832140/" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      {/* <!-- Github --> */}
      <a className="btn btn-outline-light btn-floating " href="https://github.com/raj15021996" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>

  
  </div>
 
  <div className="text-center pb-3 pt-1 text-white" style={{backgroundColor: "#393a3c"}}>
    © 2022 Copyright | 
    <a className="text-white" href="https://www.linkedin.com/in/raj-kumar-b8b832140/"> Raj Kumar</a>
  </div>

</footer>
  
  )
}


