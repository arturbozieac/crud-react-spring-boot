import TestRenderer from 'react-test-renderer';
import AddCar from './components/AddCar';
import App from './App';

it('renders a snapshot for AddCar', () => {
  const tree = TestRenderer.create(<AddCar/>).toJSON();
  expect(tree).toMatchSnapshot();
 });

 it('renders a snapshot for App', () => {
  const tree = TestRenderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
 });
