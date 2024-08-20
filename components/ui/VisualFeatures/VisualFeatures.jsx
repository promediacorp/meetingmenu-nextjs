import SectionWrapper from "@/components/SectionWrapper";
import Feature1 from "@/public/images/meeting-countdown-6.png";
import Feature2 from "@/public/images/screen-recorder-5.png";
import Feature3 from "@/public/images/wifi.png";
import Feature4 from "@/public/images/sticky.png";
import Feature5 from "@/public/images/screen-record.png";
import Feature6 from "@/public/images/camera-preview.png";
import Feature7 from "@/public/images/time-zones3.png";
import Feature8 from "@/public/images/privacy-browser.png";
import Feature9 from "@/public/images/meeting-title2.png";
import Feature10 from "@/public/images/next-meeting-13.png";
import Feature11 from "@/public/images/quick-launch.png";


import Image from "next/image";

const VisualFeatures = () => {

    const features = [
        {
            title: "Meeting Countdown Timer",
            desc: "Never miss a meeting with a countdown timer in your menu bar.",
            img: Feature1
        },
        {
            title: "Screen Recording",
            desc: "Effortlessly record your screen during meetings to capture every detail.",
            img: Feature5
        },
        {
            title: "Live Camera Preview",
            desc: "Ensure you're always camera-ready with a quick and easy preview.",
            img: Feature6
        },
        {
            title: "Private Browsing Mode",
            desc: "Browse privately without exposing your embarrassing history.",
            img: Feature8
        },
        {
            title: "One-Click Meeting Launch",
            desc: "Instantly launch your meeting in a click.",
            img: Feature10
        },

        {
            title: "Instant Meeting Reminder",
            desc:"Display the upcoming meeting title in the menu bar.",
            img: Feature9
        },
       
        {
            title: "Meeting App Quick Launch",
            desc: "Access all your meeting apps in one place.",
            img: Feature11
        },
        {
            title: "Manage Time Zones",
            desc: "Easily customize and manage time zones for your global meetings.",
            img: Feature7
        },
        {
            title: "Sticky Notes",
            desc: "Quickly jot down important notes and ideas on the fly.",
            img: Feature4
        },
        {
            title: "Check WiFi Signal Strength",
            desc: "Guarantee a seamless meeting experience with WiFi signal check.",
            img: Feature3
        }
    ];
    

    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-300">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                    The All-in-One Toolbox for Seamless Meetings                    </h2>
                    <p className="mt-3">
                    Transform your meeting management with a powerful all-in-one solution. Experience the speed of a <b>MacOS native app</b> right from your menu bar.
                   </p>
                </div>
                <div className="mt-12">
                    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-6">
                        {features.map((item, idx) => (
                            <li
                                className="flex flex-col justify-between border border-gray-800 rounded-2xl hover:shadow-lg transition duration-300 transform hover:scale-105"
                                key={idx}
                                style={{
                                    background:
                                        "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)"
                                }}
                            >
                                <div className="p-8">
                                    <h3 className="text-gray-50 text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 sm:text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="pl-8">
                                    <Image
                                        src={item.img}
                                        className="w-full ml-auto"
                                        alt={item.title}
                                        layout="responsive"
                                        width={1280}
                                        height={720}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default VisualFeatures;
