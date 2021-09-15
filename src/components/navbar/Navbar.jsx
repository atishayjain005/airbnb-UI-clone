import "./navbar.scss";

export default function Navbar({ dropdownMenuOpen, setDropdownMenuOpen }, props) {

    const navbarTransition = () => {
        console.log("hibt");
            let elem = document.getElementsClassName("mainwrapper")
            elem.addEventListener("scroll", function(){
                elem.classList.add("active");
                console.log("hibt");
            })
            
    }

    return (
        <div className="section">
            <div className="midLink">
                <p>Not sure where to go? Perfect.</p>
                <div className="button">
                    <button className="imFlexible">I'm flexible</button></div>
            </div>
            <div className="mainwrapper" id="mainwrapper" onScroll={console.log("hi")}>
                <div className="left">
                    <h1 className="name">
                        <span>
                            <svg
                                className="logo"
                                viewBox="0 0 1991.3 2143.2"
                                xmlns="http://www.w3.org/2000/svg"
                                {...props}
                            >
                                <path
                                    d="M1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118C1201.6 47.2 1102.9 0 997.8 0 890.5 0 794 47.2 723.1 128.7c-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8C422.8 682.1 261.9 1008.2 113.9 1330l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z"
                                    fill="white"
                                />{/* #e0565b */}
                            </svg>
                        </span>
                        airbnb
                    </h1>
                </div>
                <div className="center">
                    <div className="wrapper">
                        <a>Places to stay</a>
                        <a>Experiences</a>
                        <a>Online Experiences</a>
                    </div>
                    <div className="traveldetails">
                        <div className="travelInfo">
                            <div className="location">Location</div>
                            <input type="text" placeholder="Where are you going?" />
                        </div>
                        <div className="border"></div>
                        <div className="travelInfo">
                            <div className="checkIn">Check In</div>
                            <input type="text" placeholder="Add dates" />
                        </div>
                        <div className="border"></div>
                        <div className="travelInfo">
                            <div className="checkOut">Check Out</div>
                            <input type="text" placeholder="Add dates" />
                        </div>
                        <div className="border"></div>
                        <div className="guestTravelInfo">
                            <div className="travelInfo">
                                <div className="guests">Guests</div>
                                <input type="text" placeholder="Add guests" />
                            </div>
                            <div className="search">
                                <button className="searchIcon">
                                    <svg
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        style={{
                                            height: 16,
                                            width: 16,
                                        }}
                                        display="block"
                                        fill="transparent"
                                        stroke="white"
                                        strokeWidth={4}
                                        {...props}
                                    >
                                        <path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2 2 6.925 2 13s4.925 11 11 11zm8-3l9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <a>Become a host</a>
                    <a>
                        <div className="languageRegion">
                            <svg
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                style={{
                                    height: 16,
                                    width: 16,
                                }}
                                display="block"
                                fill="currentcolor"
                                {...props}
                            >
                                <path d="M8.002.25a7.77 7.77 0 017.748 7.776 7.75 7.75 0 01-7.521 7.72l-.246.004a7.75 7.75 0 01-7.73-7.513L.25 7.992A7.75 7.75 0 018.002.25zm1.949 8.5H6.048c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 003.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 003.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576l-.115.046a6.257 6.257 0 00-3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904C9.796 4.347 8.774 1.907 8.06 1.756l-.065-.007zm2.28.432l.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 00-3.929-5.068z" />
                            </svg>
                        </div>
                    </a>
                    <div className="dropdown" >
                        <button className="ProfileMenu" onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)}>
                            <div className="hamburger">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={16}
                                    height={16}
                                    {...props}
                                >
                                    <path d="M2 5v2h20V5H2zm0 6v2h20v-2H2zm0 6v2h20v-2H2z" />
                                </svg>
                            </div>
                            <div className="avatar">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                    }}
                                    display="block"
                                    fill="grey"
                                    {...props}
                                >
                                    <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 016.451-4.4A6.507 6.507 0 019.5 14c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 01-3.019 5.491 12.42 12.42 0 016.452 4.4C23.605 26.816 20.021 28.7 16 28.7z" />
                                </svg>
                            </div>
                        </button>
                        <div className={"dropdownMenu " + (dropdownMenuOpen && "active")}>
                            <a href=""><b>Sign Up</b></a>
                            <a href="">Log in</a>
                            <hr />
                            <a href="">Host your name</a>
                            <a href="">Host an experience</a>
                            <a href="">Help</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



