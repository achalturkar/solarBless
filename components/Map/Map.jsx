const Map = () => {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.900699156138!2d73.84924417502952!3d18.499396882579835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c00d1126ff37%3A0x8e418088a96ad7c6!2sSunbless%20Solar%20Systems!5e0!3m2!1sen!2sin!4v1707021200000!5m2!1sen!2sin"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      />

      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-yellow-400/20 to-transparent pointer-events-none" />

      {/* Soft border glow */}
      <div className="absolute inset-0 ring-2 ring-orange-400/40 rounded-none pointer-events-none" />
    </section>
  );
};

export default Map;
