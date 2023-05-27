const Footer = () => {
  const socialLinks = [
    {
      link: "https://twitter.com/JayRomeojay67",
      icon: "fab fa-twitter",
    },
    // {
    //   link: "https://www.instagram.com/the_avtar_jay/",
    //   icon: "fab fa-facebook-f",
    // },
    {
      link: "https://www.linkedin.com/in/jay-kisan-das/",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "https://www.instagram.com/the_avtar_jay/",
      icon: "fab fa-instagram",
    },
  ];

  return (
    <div
      className="container-fluid bg-dark text-white py-5"
      id="contact"
      style={{ marginTop: "90px" }}
    >
      <div className="container text-center py-5">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-3 text-white">Thank You</h1>
          <i className="far fa-heart text-white"></i>
        </div>
        <div className="d-flex justify-content-center mb-4">
          {socialLinks.map((item) => (
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.icon}
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
        <div className="d-flex justify-content-center py-2">
          <p className="text-white">
            <a
              style={{ textDecoration: "none" }}
              href="mailto:jaykisandas@gmail.com"
            >
              jaykisandas@gmail.com
            </a>
          </p>
          <span className="px-3">|</span>
          <p className="text-white">
            <a style={{ textDecoration: "none" }} href="tel:9556539279">
              +91 9556539279
            </a>
          </p>
        </div>
        <p className="m-0">
          &copy;{" "}
          <a
            className="text-primary"
            href="https://www.instagram.com/the_avtar_jay/"
            target="_blank"
            rel="noreferrer"
          >
            Jay Kisan Das
          </a>
          . Designed by
          <a
            className="text-primary"
            href="https://www.instagram.com/the_avtar_jay/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Jay Das
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
