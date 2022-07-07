import { Calculator } from "../components/Calculator";
import renderer from 'react-test-renderer';

describe("Testing Calculator", () => {
    it("Testing component with snapshot", () => {
        const DOMTREE = renderer.create(<Calculator />).toJSON();

        expect(DOMTREE).toMatchSnapshot();
    });
});