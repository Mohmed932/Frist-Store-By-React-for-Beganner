/* eslint-disable jsx-a11y/alt-text */

import './Footer.css'
  const Footer = () => {
    return (
      <div className="Contain">
        <div className="lef">
          <h1 className="logo">Kajol.</h1>
          <p className="Desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </p>
          <div className="SocialContainer">
            <div className="SocialIcon" style={{color:"3B5999"}}>
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="SocialIcon" style={{color:"E4405F"}}>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="SocialIcon" style={{color:"55ACEE"}}>
               <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="SocialIcon" style={{color:"E60023"}}>
              <i class="fa-brands fa-pinterest"></i>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{marginbottom:'30px'}}>Useful Links</h3>
          <ul className="list">
            <li className="ListItem">Home</li>
            <li className="ListItem">Cart</li>
            <li className="ListItem">Man Fashion</li>
            <li className="ListItem">Woman Fashion</li>
            <li className="ListItem">Accessories</li>
            <li className="ListItem">My Account</li>
            <li className="ListItem">Order Tracking</li>
            <li className="ListItem">Wishlist</li>
            <li className="ListItem">Wishlist</li>
            <li className="ListItem">Terms</li>
          </ul>
        </div>
        <div className="Right">
          <h3>Contact</h3>
          <div className="ContactItem">
            <p style={{marginRight:"10px"}}>622 Dixie Path , South Tobinchester 98336</p>
          </div>
          <div className="ContactItem">
            <h3 style={{marginRight:"10px"}}> +1 234 56 78</h3>
          </div>
          <div className="ContactItem">
            <h3 style={{marginRight:"10px"}}>contact@Mohmed</h3>
          </div>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    );
  };
  
  export default Footer;