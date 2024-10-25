import footerImg from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="w-full bg-neutral relative">

         {/* fly child */}
         
         <div className=" py-16 space-y-5 w-11/12 lg:w-10/12 mx-auto absolute top-[-130px] lg:left-[128px] left-[32px] border" style={{
                backgroundImage: `url('https://i.ibb.co/zPkYPXv/bg-shadow.png')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                borderRadius: '12px',
                backgroundColor: 'white'
                
                
            }}>
                <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-black">Subscribe to our Newsletter</h1>
                <p className="text-sm font-medium text-gray-500">Get the latest updates and news right in your inbox!</p>
                </div>
                <div className="flex justify-center gap-4">
                    <input className="input input-bordered" type="text" placeholder="Enter your email" />
                    <button className=" btn btn-primary
                     text-white">Subscribe</button>
                </div>

            </div>

       {/* footer text */}
            <div className="w-11/12 lg:w-10/12 mx-auto pt-20">

           {/* image div */}
           <div className='lg:flex justify-center mt-20'>
            <img src={footerImg}/>
           </div>
           {/* text */}
   <div className='space-y-8 text-neutral-content py-10 lg:flex justify-between'>
   <nav>
    <h6 className="footer-title">About Us</h6>
    <p>We are a passionate team <br/>dedicated to providing the best <br/> services to our customers.</p>
    
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <li className="link link-hover">Home</li>
    <li className="link link-hover">Service</li>
    <li className="link link-hover">About</li>
    <li className="link link-hover">Contact </li>
  </nav>
  
  <form>
    <h6 className="footer-title">Subscriber</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary  join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
   </div>
</div>
  <hr className="opacity-40" />
  <div className="p-3">
    <p className="text-neutral-content text-xs font-medium text-center ">@2024 Your Company All Rights Reserved.</p>
  </div>
        </div>
    );
};

export default Footer;