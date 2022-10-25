import styled from 'styled-components';

export default styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 3rem;
	background: ${({ theme }) => theme.colors.darkBlue};
	border-top: 1px solid ${({ theme }) => theme.colors.blue};
	.iconWrapper {
		flex: 1;
		box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
		border-radius: 4px;
	}
	.infoWrapper {
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-weight: 200;
		font-size: 0.75rem;
		flex: 3;
		padding: 1rem 2rem;
	}
	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		align-items: flex-start;
		padding: 2rem;

		.infoWrapper {
			padding: 2rem 1.35rem;
			padding: 1rem 0;
		}
	} ;
`;
