function Infouser() {
    return (
        <div className='profile-header'>
            <div className='logo'>
                <img src="images/people/women/08.jpg" alt="Profile" />
                <div className='info-user'>
                    <span>Oleg Yurlov</span>
                    <small className='status online'></small>
                </div>
            </div>
            <div className='block_info'>
                <div className='_info'>
                    <h2>127</h2>
                    <span>Фото</span>
                </div>
                <div className='_info'>
                    <h2>34</h2>
                    <span>Друзья</span>
                </div>
                <div className='_info'>
                    <h2>1451</h2>
                    <span>Музыка</span>
                </div>
            </div>
        </div>
    )
}
export default Infouser;
