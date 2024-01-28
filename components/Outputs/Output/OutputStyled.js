import styled from 'styled-components';

export default styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.5s ease;
	text-decoration: none;
	color: inherit;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		align-items: flex-start;
	}
	&:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.imageWrapper {
		flex: 1;
		padding: 1rem 2rem;
	}
	.outputInfo {
		flex: 5;
		padding: 1rem;
		h2 {
			font-size: 2rem;
			margin-bottom: 1rem;
		}
	}
	@media (max-width: 480px) {
		position: relative;
		.imageWrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 0;
			opacity: 0.3;
		}
		.outputInfo {
			z-index: 1;
		}
	}
`;
