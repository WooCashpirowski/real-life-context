import BurgerStyled from './BurgerStyled'

const BurgerNav = ({ isExpanded, setIsExpanded }) => {
  return (
    <BurgerStyled>
      <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
        <div className={isExpanded ? 'lines expanded' : 'lines'}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </button>
    </BurgerStyled>
  )
}

export default BurgerNav
