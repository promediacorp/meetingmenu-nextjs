import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/AppIcon.png"
        alt="MeetingMenu logo"
        {...props}
        width={55}
        height={18.75}
        priority
    />
)
export default Brand