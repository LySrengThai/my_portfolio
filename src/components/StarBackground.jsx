import { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to generate a random set of "stars" for a background effect
  const generateStars = () => {
    // Calculate how many stars to generate based on the window size
    // Larger screen area -> more stars
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 5000
    );

    // Temporary array to hold the generated stars
    const newStars = [];

    // Loop to create each star
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i, // Unique identifier for each star
        size: Math.random() * 3 + 1, // Random star size between 1px and 4px
        x: Math.random() * 100, // Random horizontal position (percentage of screen width)
        y: Math.random() * 100, // Random vertical position (percentage of screen height)
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1 (for twinkling effect)
        animationDuration: Math.random() * 4 + 2, // Random animation duration between 2s and 6s
      });
    }

    // Update the state with the newly generated stars
    setStars(newStars);
  };

  // Function to generate a small set of meteors with random properties
const generateMeteors = () => {
  // Fixed number of meteors to generate
  const numberOfMeteors = 4;

  // Temporary array to hold generated meteors
  const newMeteors = [];

  // Loop through and create each meteor
  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: i, // Unique identifier for each meteor
      size: Math.random() * 2 + 1, // Random meteor size between 1px and 3px
      x: Math.random() * 100, // Random horizontal starting position (% of screen width)
      y: Math.random() * 20, // Random vertical starting position (% of top screen height)
      opacity: Math.random() * 15, // Random brightness (but this is very high — usually 0 to 1 is expected!)
      animationDuration: Math.random() * 3 + 3, // Random fall duration between 3s and 6s
    });
  }
  // Update state with the newly generated meteors
  setMeteors(newMeteors);
};


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animateDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 3 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animateDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
