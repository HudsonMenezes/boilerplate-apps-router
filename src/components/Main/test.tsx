import { render, screen } from '@testing-library/react'
import {Main} from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderizar o componente
    render(<Main />)
    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react testing library/i })
    ).toBeInTheDocument()

  })

})
