import LayoutEffect from "@/components/LayoutEffect"
import SectionWrapper from "@/components/SectionWrapper"
import {
  DesktopComputerIcon,
  ViewListIcon,
  PhotographIcon,
  ViewGridIcon,
  CollectionIcon,
  DeviceMobileIcon,
  SpeakerphoneIcon,
  SwitchVerticalIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  MicrophoneIcon,
  LightningBoltIcon
} from '@heroicons/react/outline'

const Features = () => {

    const featuresList = [
        {
            icon: <DesktopComputerIcon className="w-6 h-6" />,
            title: "Hide Your Desktop",
            desc: "Declutter your screen instantly with a single click."
        },
        {
            icon: <CollectionIcon className="w-6 h-6" />,
            title: "In-Meeting Indicator",
            desc: "Easily see when you're in a meeting with a visible menu bar indicator."
        },        
        {
            icon: <PhotographIcon className="w-6 h-6" />,
            title: "Hide Wallpaper",
            desc: "Keep personal photos private by hiding your wallpaper with ease."
        },
        {
            icon: <ViewGridIcon className="w-6 h-6" />,
            title: "Hide Windows",
            desc: "Instantly clear your workspace by hiding all open windows."
        },
        {
            icon: <LightningBoltIcon className="w-6 h-6" />,
            title: "Enable Low Power Mode",
            desc: "Extend your battery life during long meetings - don't let it bail on you!"
        },
        {
            icon: <SpeakerphoneIcon className="w-6 h-6" />,
            title: "Audio Quality Test",
            desc: "Ensure crystal clear audio before joining any meeting."
        },
        {
            icon: <SwitchVerticalIcon className="w-6 h-6" />,
            title: "Switch Audio Output",
            desc: "Effortlessly switch between audio output devices with a single click."
        },
        {
            icon: <VolumeUpIcon className="w-6 h-6" />,
            title: "Control Speaker Volume",
            desc: "Quickly and easily adjust your speaker volume for perfect sound."
        },
        {
            icon: <MicrophoneIcon className="w-6 h-6" />,
            title: "Control Microphone Volume",
            desc: "Control your microphone volume and easily mute to ensure you're always heard clearly."
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-300">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                            But Wait, There's More!
                        </h2>
                    </div>
                </LayoutEffect>
                <LayoutEffect
                    className="duration-1000 delay-500"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0"
                    }}
                >
                    <div className="relative mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                featuresList.map((item, idx) => (
                                    <li key={idx} className="space-y-3 p-4 rounded-xl border border-gray-800"
                                        style={{
                                            background: "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)"
                                        }}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-gray-50">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg text-gray-50 font-semibold">
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </LayoutEffect>
            </div>
        </SectionWrapper>
    )
}

export default Features
