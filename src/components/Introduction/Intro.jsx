import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <img
            src="https://bestwallpapers.in/wp-content/uploads/2018/08/anime-night-scenery-4k-wallpaper.jpg"
            alt=""
            className="bg-img"
          />
          <h1 className="i-intro">ADVENTURE INSPIRED ART FOR YOUR HOME</h1>
          <h3 className="i-name">
            THANK YOU FOR A WONDERFUL HOLIDAY SEASON! THE HOLIDAY SHOP IS NOW
            CLOSED
          </h3>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Fine Artist</div>
              <div className="i-title-item">Illustrator</div>
              <div className="i-title-item">Storyteller</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="i-right">
      </div> */}
    </div>
  );
};

export default Intro;
