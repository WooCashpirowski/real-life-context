import styled from 'styled-components';

export default styled.section`
	padding: 2rem 3rem;
	color: ${({ theme }) => theme.colors.darkBlue};

	@media (max-width: 768px) {
		padding: 2rem;
	}
`;
