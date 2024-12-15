import { ServiceDetails } from '../components/ServiceDetails/ServiceDetails';
import { services } from '../components/servicesList';

export const ServiceDetailsContainer: React.FC = () => {
  return <ServiceDetails services={services} />;
};
