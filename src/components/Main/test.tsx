import { render } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderizar o componente
    // busca o elemento e verifica a existência dele
    // expect(
    //   screen.getByRole('heading', { name: /React Avançado/i })
    // ).toBeInTheDocument()
    // gerar snapshot
  })

  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
