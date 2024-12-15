import { services } from '../components/servicesList';
import { Services } from '../pages/Services/Services';

export const ServicesContainer = () => {
  return <Services services={services} />;
};
