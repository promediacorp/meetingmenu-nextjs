import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import { siZoom, siMicrosoftteams, siGooglemeet, siSlack, siCisco, siSkype, siGotomeeting, siBluejeans, siJitsi } from 'simple-icons';

const renderIcon = (icon, name, size = "24") => {
  if (!icon || !icon.path) {
    return (
      <div
        style={{
          width: size,
          height: size,
          fontSize: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "50%",
        }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="#FFFFFF"  // All icons are white
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
};

const SupportedApps = () => {
  const appsList = [
    {
      icon: siZoom,
      name: "Zoom",
    },
    {
      icon: siMicrosoftteams,
      name: "Microsoft Teams",
    },
    {
      icon: siGooglemeet,
      name: "Google Meet",
    },
    {
      icon: siSlack,
      name: "Slack",
    },
    {
      icon: siCisco, // Using Cisco for Webex
      name: "Webex",
    },
    {
      icon: siSkype,
      name: "Skype",
    },
    {
      icon: siGotomeeting,
      name: "GoToMeeting",
    },
    {
      icon: siBluejeans,
      name: "BlueJeans",
    },
    {
      icon: siJitsi,
      name: "Jitsi Meet",
    }
  ];

  return (
    <SectionWrapper>
      <div id="supported-apps" className="custom-screen text-gray-300">
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6"
          }}
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
              Supported Meeting Apps
            </h2>
            <p className="mt-5 text-gray-300">
              Seamlessly integrate with your favorite meeting platforms.
            </p>
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
              {appsList.map((app, idx) => (
                <li
                  key={idx}
                  className="space-y-3 p-4 rounded-xl border border-gray-800"
                  style={{
                    background:
                      "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)",
                  }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-gray-50">
                    {renderIcon(app.icon, app.name)}
                  </div>
                  <h3 className="text-lg text-gray-50 font-semibold">
                    {app.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </LayoutEffect>
      </div>
    </SectionWrapper>
  );
};

export default SupportedApps;
