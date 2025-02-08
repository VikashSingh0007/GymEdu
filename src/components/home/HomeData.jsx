export const headerData = {
    backgroundImage:
      'https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?t=st=1732371738~exp=1732375338~hmac=e0f0084f7482b3808a04085d5cab50e722efe291c3024cb37b6fd0dac45ab8d4&w=826',
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
        href: '#about',
        isPrimary: true,
      },
      {
        label: 'Learn More',
        href: '#learn-more',
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
  