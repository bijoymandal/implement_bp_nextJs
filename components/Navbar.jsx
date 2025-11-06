import Image from "next/image";

const Navbar = () => {
    return (
        <header className="mx-[18px] mt-[18px] bg-white px-6 md:px-10 h-[72px] rounded-[70px] shadow-sm flex items-center justify-between fixed top-0 left-0 right-0 z-50">
            {/* Left: Logo */}
            <div className="flex items-center">
                <Image src="/image/TestLogo.svg" alt="Logo" width={150} height={150} />
            </div>

            {/* Center: Menu */}
            <nav className="fixed top-[23px] left-1/2 transform -translate-x-1/2 w-[663px] h-[63px] flex items-center justify-center bg-transparent opacity-100">
                {/* Overview */}
                <ul className="flex items-center justify-center gap-10">
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <Image src="/image/home_FILL0_wght300_GRAD0_opsz24.svg" alt="Home" width={20} height={20} />
                            <span>Overview</span>
                        </a>
                    </li>
                    <li>
                        {/* Patients (Active) */}
                        <a
                            href="#"
                            className="flex items-center gap-1 px-4 py-1 rounded-[41px] bg-[#01F0D0] text-[#072635] font-semibold shadow-sm"
                        >
                            <Image src="/image/group_FILL0_wght300_GRAD0_opsz24.svg" alt="Patients" width={20} height={20} />
                            <span>Patients</span>
                        </a>

                    </li>
                    <li>
                        {/* Schedule */}
                        <a
                            href="#"
                            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <Image src="/image/BirthIcon.svg" alt="Schedule" width={36} height={36} />
                            <span>Schedule</span>
                        </a>
                    </li>
                    <li>
                        {/* Messages */}
                        <a
                            href="#"
                            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <Image src="/image/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" alt="Message" width={20} height={20} />
                            <span>Message</span>
                        </a>
                    </li>
                    <li>
                        {/* Transactions */}
                        <a
                            href="#"
                            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <Image src="/image/credit_card_FILL0_wght300_GRAD0_opsz24.svg" alt="Transactions" width={20} height={20} />
                            <span>Transactions</span>
                        </a>
                    </li>
                </ul>








            </nav>

            {/* Right: Profile */}
            <div className="flex items-center gap-3 md:gap-4">
                {/* Avatar */}
                <div className="h-11 w-11 md:h-12 md:w-12 rounded-full overflow-hidden">
                    <Image
                        src="/image/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
                        alt="Doctor"
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Text Info */}
                <div>
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                        Dr. Jose Simmons
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                        General Practitioner
                    </p>
                </div>

                {/* Divider + Icons */}
                <div className="flex items-center gap-3 pl-4 border-l border-[#EDEDED]">
                    <Image
                        src="/image/settings_FILL0_wght300_GRAD0_opsz24.svg"
                        alt="Settings"
                        width={19}
                        height={20}
                        className="cursor-pointer hover:opacity-80"
                    />
                    <Image
                        src="/image/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
                        alt="More"
                        width={4}
                        height={18}
                        className="cursor-pointer hover:opacity-80"
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
