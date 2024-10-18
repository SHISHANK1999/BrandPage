const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <a href="#">Menu</a>
        <a href="#">Location</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
