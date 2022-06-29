import React from 'react'
import './CreateLogin.css'

const CreateLogin = () => {
  return (
    <div className='CreateLogin'>
       <from className='from'>
         <h5>Choose a Login Methhod</h5>
         <div className='Log'>
          <div className='byScoil'>
             <div className='Scoil'>
                <i class="fa-brands fa-facebook"></i>
                <p>Facebook</p>
             </div>
             <div className='Scoil'>
                <i class="fa-brands fa-github"></i>
                <p>Github</p>
             </div>
             <div className='Scoil'>
                <i class="fa-brands fa-google"></i>
                <p>Google</p>
             </div>
          </div>
          <div className='line'>
            <h5>OR</h5>
            <div className='mainline'></div>
          </div>
          <div className='bypassword'>
            <input className='input' type='text' placeholder='UserName'/>
            <input className='input' type='password' placeholder='Password'/>
            <button>Login</button>
          </div>
         </div>
       </from>
    </div>
  )
}

export default CreateLogin