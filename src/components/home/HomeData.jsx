export const headerData = {
    backgroundImage:
      'https://i.postimg.cc/1RT7TzB3/banner.jpg',
    title: (
      <>
        Welcome to <span className="text-pink-400">Resistance</span>
      </>
    ),
    subtitle:
      'Elevate your fitness with our expert resources and guidance. Join the Resistance community and unlock your full potential.',
    ctaButtons: [
      {
        label: 'Get Started',
        href: 'https://www.who.int/health-topics/physical-activity',
        isPrimary: true,
      },
      {
        label: 'Learn More',
        href: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
        isPrimary: false,
      },
    ],
    overlayStyles: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradientAnimationStyles: {
      animation: 'pulse 2s infinite',
    },
  };
  