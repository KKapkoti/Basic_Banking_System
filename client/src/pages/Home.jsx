
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
               </p>
                  <ul>
                  <li>Accounts & Deposits – Savings, Current, Fixed Deposits, and more</li>
                  <li>Debit & Credit Cards with exciting rewards and cashback offers</li>
                  <li>Personal, Home, Education, and Business Loans with competitive interest rates</li>
                  <li>Insurance solutions for Life, Health, and General Insurance</li>
                  <li>24/7 Net Banking and Mobile Banking for easy access to your finances</li>
                  <li>Secure fund transfers, bill payments, and investment options</li>
                  </ul>
               <p>
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