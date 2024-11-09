import './main.css';
import { FaCircleUser, FaLock, FaEye } from "react-icons/fa6";
import imgae from '../../assets/image1.png';
import kh from '../../assets/kh.svg';
import en from '../../assets/en.svg';
import china from '../../assets/china.svg';

const MainPage = () => {
    return (
       <>
            <div className='box-container'>
                <div className='image-box'>
                    <img src={imgae} alt="Image1" />
                </div>
                <div className='login-box'>
                    <div class='login-title'>
                        Member Login
                    </div>  
                    <form action='' className='login-form'>
                        <div className='input-control'>
                            <FaCircleUser className='icon user'/>
                            <input type='text' name='username' className='username' id='username' placeholder='Username' />
                        </div>                    
                        <div className='input-control'>
                            <FaLock className='icon lock'/>
                            <input type='password' name='password' className='password' id='password' placeholder='Password' />
                            <FaEye className='icon eye'/>
                        </div>   
                        <div className='button'>
                            <button type='submit' className='btn-login'>Login</button>
                        </div>    
                        <div className='languages'>
                            <img src={kh} alt="khmer" />
                            <img src={en} alt="english" />
                            <img src={china} alt="chinese" />
                        </div>       
                    </form>
                </div>  
            </div>
            <div className='image-bottom'>
                    <img src={imgae} alt="Image1" />
            </div>
       </>
        
    );
};

export default MainPage;