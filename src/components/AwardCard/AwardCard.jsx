import './AwardCard.css'

function AwardCard({ imgUrl, title, subtitle }) {
  return (
    <div className="app__awardCard">
      <img src={imgUrl} alt="award" />
      <div className="app__awardCard-content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
}

export default AwardCard;
