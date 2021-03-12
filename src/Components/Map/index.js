import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.720117777919!2d-0.10238798423502367!3d51.37144177961303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760736911a8145%3A0x7db993509d67fcc!2s69%20High%20St%2C%20Croydon%20CR0%201QE!5e0!3m2!1sen!2suk!4v1602760248618!5m2!1sen!2suk"
        width="100%"
        height="500px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        title="google maps locations for Global Mac Spec office"
        //  aria-hidden="false"
        //tabindex="0"
      ></iframe>
    </div>
  );
};

export default Map;
