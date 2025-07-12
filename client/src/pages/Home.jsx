
 export const Home = () => {

     return (
       <>
           <main>
            <section classsName="Section-hero">
           
            <div class ="container grid grid-two-cols">
               <div className="hero-content">
               <p>We are providing best services</p>
                  <h1>Welcome to The TrustBank</h1>
                  <p>
               Our bank offers comprehensive Net Banking and Personal Banking services tailored to meet your financial needs.
               We provide a wide range of services including:
                <p>
                  At <strong>TrueBank</strong>, we are committed to delivering a seamless and secure banking experience. 
                  Our goal is to empower individuals and businesses by providing reliable financial services with a personal touch. 
                  Whether you're managing your day-to-day expenses, planning for the future, or growing your business, 
                  we are here to support you every step of the way. Join us today and take a step towards smarter banking.
               </p>
               Experience hassle-free banking with advanced digital services, robust customer support, and a strong commitment to your financial growth.
               </p>
                  
                </div>
              

               {/* hero images */}
                <div className="hero-image">
                   <img src="/image/Bank_img2.png" alt="Bank image" width="750"
                    height="600"/>
              
               
                </div>

                </div>
            </section>
           </main>

           <div className="btn btn-group">
              <a href="/costumers">
                <button className="btn">Costumers</button>
              </a><br/>
              <a href="/check_Transactions">
                <button className="btn">Check Transactions</button>
              </a>
            </div>
           

          
         </>
     );
  };