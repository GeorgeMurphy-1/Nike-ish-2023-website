import "./callToAction.css";

function CallToAction() {
  return (
    <div className="ebikerepair__calltoaction_container">
      <p className="ebikerepair__calltoaction_heading-sub">First Look</p>
      <h1 className="ebikerepair__calltoaction__heading-main">
        Bike Tire Tubes
      </h1>
      <p className="ebikerepair__calltoaction__body">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
        Pulse —designed to push you past your limits and help you go to the max.
      </p>
      <div className="ebikerepair__calltoaction__btn-container">
      <span>
        <a href="#" className="ebikerepair__calltoaction__btn">
          Notify Me
        </a>
      </span>
      <span>
        <a href="#" className="ebikerepair__calltoaction__btn">
          Shop Tubes
        </a>
      </span>
      </div>
    </div>
  );
}

export default CallToAction;
