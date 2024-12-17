const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        {/* Social media links */}
        <div className="flex gap-3">
          <div className="social-icon flex items-center justify-center w-10 h-10 rounded-full bg-gray-700">
            <a
              href="https://github.com/PremStark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/github.svg"
                alt="github"
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="social-icon flex items-center justify-center w-10 h-10 rounded-full bg-gray-700">
            <a
              href="https://www.linkedin.com/in/prem-raj-s-b968b6282/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/lin.svg"
                alt="linkedin"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Prem Raj S. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  