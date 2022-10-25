import styled from 'styled-components';

export default styled.section`
	padding: 2rem 0 2rem 3rem;
	color: white;
	background: ${({ theme }) => theme.colors.darkBlue};
	.wrapper {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		position: relative;
		min-height: 70vh;
		.text {
			width: 30%;
			padding-right: 2rem;
		}
		.image {
			position: absolute;
			top: -10%;
			width: 70%;
			height: 110%;
			right: 0;
			z-index: 0;
			.overlay {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				right: 0;
				background: linear-gradient(
					90deg,
					#1d2c55 3.13%,
					rgba(29, 44, 85, 0) 87.88%
				);
			}
		}
		@media (max-width: 1000px) {
			min-height: 50vh;
			.text {
				width: 100%;
				z-index: 1;
			}
			.image {
				width: 100%;
				top: 0;
				max-height: 100%;
				.overlay {
					background: ${({ theme }) => theme.colors.darkBlue};
					opacity: 0.8;
				}
			}
		}
	}

	@media (max-width: 768px) {
		padding: 2rem 0 2rem 2rem;
	}
`;
