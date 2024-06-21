import React from 'react';

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current); // Stop observing once visible
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div
      className={`transform transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
