import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import NavLink from "../NavLink";
import LayoutEffect from "@/components/LayoutEffect";
import MacDownloadLogo from "@/public/images/mac_download.png";

// Settings
const singleHeadline = "The Ultimate Meeting Assistant"; // Single headline to use

const Hero = () => (
    <section className="relative flex items-center justify-center px-2 sm:px-0"> {/* Removed h-screen */}
        <div className="custom-screen py-0 sm:py-2"> {/* Updated padding-top to 0 */}
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div className="bg-transparent max-w-[90%] mx-auto text-center"> {/* Updated width */}
                    <div className="space-y-1 sm:space-y-4 max-w-6xl mx-auto"> {/* Reduced space between elements */}
                        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl mt-2 sm:mt-0" // Adjusted margin-top for desktop
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
                                wordSpacing: "4px", // Add more space between words
                                lineHeight: "1.1" // Adjust line height
                            }}
                        >
                            {singleHeadline}
                        </h1>
                        <p className="max-w-full mx-auto text-gray-300 text-lg sm:text-xl text-center"> {/* Updated text */}
                            Manage, organize, and execute perfect meetings effortlessly, right from your Mac menu bar.                        
                        </p>
                        <div className="flex justify-center font-medium text-sm mt-0"> {/* Reduced margin-top by half */}
                            <NavLink href="/mac-download">
                                <Image
                                    src={MacDownloadLogo}
                                    width={150}
                                    height={50}
                                    alt="Download for Mac"
                                    className="cursor-pointer"
                                />
                            </NavLink>
                        </div>
                    </div>
                    <GradientWrapper className="mt-4 sm:mt-6" wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
                        <video
                            src="/images/august-20-hero-video.mp4"
                            width="1200"
                            height="800"
                            className="shadow-lg rounded-2xl"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </GradientWrapper>
                </div>
            </LayoutEffect>
        </div>
    </section>
);

export default Hero;
