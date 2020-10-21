import './style.css';

export const Quote = () => {
  return `
  <div class="inner-box">
    <i class="fas fa-quote-left fa2"></i>
  </div>
  <div class="text">
    <i class="fas fa-quote-right fa1"></i>
    <div class="wrapper">
      <h3>Quote the day</h3>
      <p>
        Always code as if the guy who ends up maintaining your code will be
        a violent psychopath who knows where you live
      </p>
      <em>― John Woods</em>
    </div>
  </div>
  `;
};
Quote();
