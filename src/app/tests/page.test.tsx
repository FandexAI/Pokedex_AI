import Home from "../page";
import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render', () => {
    const blah = render(<Home />);
    console.log({ blah }); // used to test "npm test" run
  })
})