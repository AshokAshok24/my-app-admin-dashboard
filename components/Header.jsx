import React from 'react'

const Header = ({ sidebarVisible, setSidebarVisible }) => {


    return (

        <>

            {/* <div className="header">
                <div className="header-content">

                    <div className="side-bar-extent-btn" onClick={() => setSidebarVisible(!sidebarVisible)}>
                        <i className="fa-solid fa-bars toggle-sidebar-btn" ></i>
                    </div>

                    <div>profile</div>

                </div>
            </div> */}


            <div className="header">
    <div className="header-content">

        {/* Sidebar toggle */}
        <div className="side-bar-extent-btn" onClick={() => setSidebarVisible(!sidebarVisible)}>
            <i className="fa-solid fa-bars toggle-sidebar-btn"></i>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown">
            <div
                className="profile-box"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    src="https://i.pravatar.cc/40"
                    className="profile-img"
                    alt="profile"
                />
                <span className="profile-name">Arun</span>
                <i className="fa-solid fa-chevron-down profile-icon"></i>
            </div>

            <ul className="dropdown-menu dropdown-menu-end profile-menu">
                <li className="dropdown-header text-center">
                    <img src="https://i.pravatar.cc/70" className="profile-img-lg" />
                    <h6 className="mt-2 mb-0">Arun Kumar</h6>
                    <small className="text-muted">Software Engineer</small>
                </li>

                <li><hr className="dropdown-divider" /></li>

                <li>
                    <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-user"></i> My Profile
                    </a>
                </li>

                <li>
                    <a className="dropdown-item" href="#">
                        <i className="fa-solid fa-gear"></i> Settings
                    </a>
                </li>

                <li>
                    <a className="dropdown-item logout-btn" href="#">
                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

        </>
    )
}

export default Header
