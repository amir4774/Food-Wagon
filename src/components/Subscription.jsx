import subscriptionData from "../utils/Subscription.json";
import { StyledSubscription, Titles } from "../style/Subscription.styled";
import SubscriptionTitle from "./SubscriptionTitle";
import Follow from "./Follow";

const Subscription = () => {
  return (
    <StyledSubscription>
      <Titles>
        <SubscriptionTitle title="Company" data={subscriptionData.company} />

        <SubscriptionTitle title="Contact" data={subscriptionData.contact} />

        <SubscriptionTitle title="Legal" data={subscriptionData.legal} />
      </Titles>

      <Follow />
    </StyledSubscription>
  );
};

export default Subscription;
