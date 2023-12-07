const SubscriptionTitle = ({ title, data }) => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      <ul>
        {data.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionTitle;
