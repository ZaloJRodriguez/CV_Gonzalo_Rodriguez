import Me from '../../assets/photo-zalo.jpg'
import Logo from '../../assets/logo_hack_a_boss.png'
import './PersonalInfo.css';

function PersonalInfo() {
  return (
    <div className="personal-info">

      <div className="photo-frame">
        <img src={Me} alt="Tu foto" className="profile-photo" />
      </div>

      <div className="fullname">
        <h2 className='zalo'>Gonzalo Jesús Rodríguez Rodríguez</h2>
        <h3 className='role'>Junior FullStack Web Developer</h3>
      </div>

      <div className='personal-data'>
        <h4 className='HAB'>
            Trained at HACK A BOSS - 2023/2024
            
        </h4>

        <a href="https://www.hackaboss.com/" target='blank'><img src={Logo} alt="Hack-A-Boss" className='logo' /></a>

      </div>

    </div>
  );
}

export default PersonalInfo;
