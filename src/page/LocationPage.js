import LocationItem from '../components/location/LocationItem';
import styled from 'styled-components';
import { size } from '../settings';

const countries = [
  {
    country: 'canada',
    designo: 'designo central office',
    adress: '3886 wellington street',
    town: 'Toronto, Ontario M9C 3J5',
    portable: '+1 253-863-8967',
    mail: 'contact@designo.co',
    map: 'image-map-canada.png',
  },
  {
    country: 'australia',
    designo: 'designo AU office',
    adress: '19 Balonne Street',
    town: 'New South Wales 2443',
    portable: '(02) 6720 9092',
    mail: 'contact@designo.au',
    map: 'image-map-australia.png',
  },
  {
    country: 'united kingdom',
    designo: 'designo UK office',
    adress: '13 Colorado Way',
    town: 'Rhyd-y-fro SA8 9GA',
    portable: '078 3115 1400',
    mail: 'contact@designo.co',
    map: 'image-map-united-kingdom.png',
  },
];

const LocationPage = () => {
  return (
    <Main>
      {countries.map((country) => (
        <LocationItem key={country.country} {...country} />
      ))}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  @media (min-width: ${size.small}) {
    gap: var(--location-gap);
  }
`;
export default LocationPage;
