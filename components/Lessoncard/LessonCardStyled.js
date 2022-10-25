import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 1rem;

	.linkWrapper {
		border-radius: 15px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
		transition: all 0.5s ease;
		overflow: hidden;
		height: 270px;
		width: 350px;
		position: relative;
		margin: 1rem;
		transition: all 0.5s ease;

		h2 {
			position: absolute;
			z-index: 10000 !important;
			color: white;
			text-transform: uppercase;
			padding: 0.5rem 1rem;
			font-size: 2.5rem;
			width: 100%;
			background: linear-gradient(
				180deg,
				#283b6c 0%,
				rgba(182, 182, 182, 0) 100%
			);
		}

		img {
			height: 100%;
			transition: transform 0.5s ease;
		}

		&:hover {
			transform: translateY(-5%) scale(1.1);
			box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
			border-radius: 10px;
			img {
				transform: translateY(-5%) scale(1.1);
			}
		}

		@media (max-width: 370px) {
			height: 220px;
			width: 300px;
		}
	}
`;

export default Card;
