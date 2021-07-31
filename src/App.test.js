import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Test App Component", () => {

  test('App shows State Abbr', () => {
    render(<App />);
    const abbrText = screen.getByText(/State Abbr/i);
    // screen.debug()
    expect(abbrText).toBeInTheDocument();
  });

  test("select menu in App", () => {
    const {getByRole} = render(<App />)
    expect( getByRole("combobox")).toBeInTheDocument()
  })

  test("Exists is not in App", () => {
    const {queryByText} = render(<App />)
    expect( queryByText(/Exists/i)).toBeNull()
  })


  test("User selects Arizona", () => {
    const {getByTestId, getByText, queryByText} = render(<App />)
    const selectMenu = getByTestId("chosenState")
    const arizona = queryByText(/arizonas/i)
    userEvent.selectOptions(selectMenu, [arizona])
  })


})



