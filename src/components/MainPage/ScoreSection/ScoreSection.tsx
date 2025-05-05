import "./ScoreSection.css";
import useStore from "../../../store";
import Flag from "react-world-flags";
import NumberCounter from "../../Global/NumberCounter";
import { FaRegStar, FaStar } from "react-icons/fa6";

const ScoreSection = () => {
  const country = useStore((state) => state.country);
  const countryCode = useStore((state) => state.countryCode);
  return (
    <div className="py-8 flex items-center justify-center flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center w-[45px] h-[45px]">
          <Flag code={countryCode} />
        </div>
        <h2 className="font-semibold text-2xl">{country} Satisfaction</h2>
      </div>
      <div className="w-full px-10 max-w-[1365px] business-rating-top">
        <div className="business-rating-card total-rating-card">
          <div className="business-rating-content">
            <div className="rate-count">
              <span className="rate-count-icon">
                <FaStar fill="#fff" />
              </span>

              <h2 className="rate-count-num">4.5</h2>

              <p className="rate-count-title">Total Rating</p>
            </div>

            <div className="rate-stars-container">
              <div className="rate-stars-content">
                <div className="rate-stars-item">
                  <p className="rate-stars-num">1.25M</p>

                  <div className="rate-stars">
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                  </div>
                </div>

                <div className="rate-stars-item">
                  <p className="rate-stars-num">1.25M</p>

                  <div className="rate-stars">
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaRegStar fill="#ffffff96" />
                  </div>
                </div>

                <div className="rate-stars-item">
                  <p className="rate-stars-num">1.25M</p>

                  <div className="rate-stars">
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaRegStar fill="#ffffff96" />
                    <FaRegStar fill="#ffffff96" />
                  </div>
                </div>
              </div>

              <div className="rate-stars-content">
                <div className="rate-stars-item">
                  <p className="rate-stars-num">1.25M</p>

                  <div className="rate-stars">
                    <FaStar fill="gold" />
                    <FaStar fill="gold" />
                    <FaRegStar fill="#ffffff96" />
                    <FaRegStar fill="#ffffff96" />
                    <FaRegStar fill="#ffffff96" />
                  </div>
                </div>

                <div className="rate-stars-item">
                  <p className="rate-stars-num">1.25M</p>

                  <div className="rate-stars">
                    <FaStar fill="gold" />
                    <FaRegStar fill="#ffffff96" />
                    <FaRegStar fill="#ffffff96" />
                    <FaRegStar fill="#ffffff96" />
                    <FaRegStar fill="#ffffff96" />
                  </div>
                </div>

                <div className="rate-stars-item rate-stars-item-average">
                  <h2 className="average-txt">Total Reviews</h2>

                  <p className="rate-stars-num">1.25M</p>
                </div>
              </div>
            </div>

            <div className="wave-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="728.179"
                height="292.521"
                viewBox="0 0 728.179 292.521"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      id="bg"
                      d="M0,0H728.179a0,0,0,0,1,0,0V212.522a80,80,0,0,1-80,80H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
                      transform="translate(0 0)"
                      fill="#d47fa6"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Mask_Group_10"
                  data-name="Mask Group 10"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="path"
                    d="M46.381,340.178c40.665-.909,42.4-22.036,82.978-22.3s49.869,27.028,80.968,27.157,61.647-38.955,108.875-40.519,68.934,20.176,121.455,19.956,87.264-32.019,147.078-33.754S661.694,314.843,713.3,314.1s82.8-71.1,172.532-74.573,103.616,45.854,194.985,46.244,49.194,21.95,136.726,22.776,220.295,69.584,220.295,69.584H-15.9Z"
                    transform="translate(-1196.862 -85.232)"
                    fill="#ffc1dd"
                    opacity="0.177"
                  />
                  <path
                    id="path-2"
                    data-name="path"
                    d="M1752.993,339.9c-51.7-.907-53.9-21.975-105.486-22.236s-63.4,26.953-102.931,27.082-78.368-38.847-138.408-40.407-87.632,20.12-154.4,19.9-110.934-31.931-186.973-33.661-94.019,24.056-159.622,23.32-105.264-70.9-219.332-74.367-131.722,45.728-247.875,46.117-62.538,21.89-173.813,22.713S-15.9,377.754-15.9,377.754H1832.162Z"
                    transform="translate(-470.702 -85.232)"
                    fill="#fff"
                    opacity="0.159"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="business-rating-card small-card agree-card">
          <div className="business-rating-content">
            <img
              src="/happy.png"
              alt="agree-card-img"
              className="rating-card-img"
              loading="lazy"
            />
            <h2 className="rating-card-title">
              {<NumberCounter number={128} />}M
            </h2>

            <p className="rating-card-subtitle">Happy Customers</p>

            <div className="wave-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="728.179"
                height="292.521"
                viewBox="0 0 728.179 292.521"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      id="bg"
                      d="M0,0H728.179a0,0,0,0,1,0,0V212.522a80,80,0,0,1-80,80H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
                      transform="translate(0 0)"
                      fill="#d47fa6"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Mask_Group_10"
                  data-name="Mask Group 10"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="path"
                    d="M46.381,340.178c40.665-.909,42.4-22.036,82.978-22.3s49.869,27.028,80.968,27.157,61.647-38.955,108.875-40.519,68.934,20.176,121.455,19.956,87.264-32.019,147.078-33.754S661.694,314.843,713.3,314.1s82.8-71.1,172.532-74.573,103.616,45.854,194.985,46.244,49.194,21.95,136.726,22.776,220.295,69.584,220.295,69.584H-15.9Z"
                    transform="translate(-1196.862 -85.232)"
                    fill="#ffc1dd"
                    opacity="0.177"
                  />
                  <path
                    id="path-2"
                    data-name="path"
                    d="M1752.993,339.9c-51.7-.907-53.9-21.975-105.486-22.236s-63.4,26.953-102.931,27.082-78.368-38.847-138.408-40.407-87.632,20.12-154.4,19.9-110.934-31.931-186.973-33.661-94.019,24.056-159.622,23.32-105.264-70.9-219.332-74.367-131.722,45.728-247.875,46.117-62.538,21.89-173.813,22.713S-15.9,377.754-15.9,377.754H1832.162Z"
                    transform="translate(-470.702 -85.232)"
                    fill="#fff"
                    opacity="0.159"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="business-rating-card small-card disagree-card">
          <div className="business-rating-content">
            <img
              src="/unhappy.png"
              alt="agree-card-img"
              className="rating-card-img"
              loading="lazy"
            />

            <h2 className="rating-card-title">
              {<NumberCounter number={651} />}M
            </h2>

            <p className="rating-card-subtitle">Angry Customers</p>

            <div className="wave-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="728.179"
                height="292.521"
                viewBox="0 0 728.179 292.521"
              >
                <defs>
                  <clipPath id="clip-path">
                    <path
                      id="bg"
                      d="M0,0H728.179a0,0,0,0,1,0,0V212.522a80,80,0,0,1-80,80H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
                      transform="translate(0 0)"
                      fill="#d47fa6"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Mask_Group_10"
                  data-name="Mask Group 10"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="path"
                    d="M46.381,340.178c40.665-.909,42.4-22.036,82.978-22.3s49.869,27.028,80.968,27.157,61.647-38.955,108.875-40.519,68.934,20.176,121.455,19.956,87.264-32.019,147.078-33.754S661.694,314.843,713.3,314.1s82.8-71.1,172.532-74.573,103.616,45.854,194.985,46.244,49.194,21.95,136.726,22.776,220.295,69.584,220.295,69.584H-15.9Z"
                    transform="translate(-1196.862 -85.232)"
                    fill="#ffc1dd"
                    opacity="0.177"
                  />
                  <path
                    id="path-2"
                    data-name="path"
                    d="M1752.993,339.9c-51.7-.907-53.9-21.975-105.486-22.236s-63.4,26.953-102.931,27.082-78.368-38.847-138.408-40.407-87.632,20.12-154.4,19.9-110.934-31.931-186.973-33.661-94.019,24.056-159.622,23.32-105.264-70.9-219.332-74.367-131.722,45.728-247.875,46.117-62.538,21.89-173.813,22.713S-15.9,377.754-15.9,377.754H1832.162Z"
                    transform="translate(-470.702 -85.232)"
                    fill="#fff"
                    opacity="0.159"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSection;
