import "./Price.css";

function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
            <input type="radio" name="test2"/>
            <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
            <input type="radio" name="test2"/>
            <span className="checkmark"></span> $1-$50
      </label>
      <label className="sidebar-label-container">
            <input type="radio" name="test2"/>
            <span className="checkmark"></span> $51-$100
      </label>
      <label className="sidebar-label-container">
            <input type="radio" name="test2"/>
            <span className="checkmark"></span> $101-$150
      </label>
      <label className="sidebar-label-container">
            <input type="radio" name="test2"/>
            <span className="checkmark"></span> over $150
      </label>
    </div>
  )
}

export default Price;