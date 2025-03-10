const videoLinks = [
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/a69tzxqpxi1kjdgehuox",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/jpeutus83ylybuo56icr",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/mprbgyt9ihqrr1cg1res",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/alxzoyzlh9ayseglffwq",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/bgarhsmhncewvfvlu8ut",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/vw0n05bcal8ynmp9d8gw",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/d28adjbn6wt0uyil93ii",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/v1/LFD/vh3gpn5usysswr9rul1k",
    "https://res.cloudinary.com/dcraqvlmb/video/upload/f_auto:video,q_auto/kljyshqcw96m4ob6mfmx",
  ];

  const Eventos = () => {
    return (
      <section className="eventos-section" id="Eventos">
        <div className="eventos-grid">
          {videoLinks.map((video, index) => (
            <div className="evento" key={index}>
              <video
                src={video}
                muted
                loop
                autoPlay
                playsInline
                className="video-element"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Eventos