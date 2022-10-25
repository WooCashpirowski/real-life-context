import styled from 'styled-components';

export default styled.div`
	display: none;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		display: block;
	}

	button {
		display: flex;
		justify-content: center;
		align-content: center;
		background: none;
		cursor: pointer;
		border: none;

		.lines {
			width: 2rem;
			height: 1.5rem;
			position: relative;
			overflow: hidden;

			.line {
				position: absolute;
				right: 0;
				width: 100%;
				height: 4px;
				border-radius: 2px;
				background: ${({ theme }) => theme.colors.blue};
				transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

				&:first-child {
					top: 0;
				}

				&:nth-child(2) {
					top: 50%;
					transform: translateY(-55%);
					width: 72%;
				}

				&:nth-child(3) {
					width: 87%;
					bottom: 0;
				}
			}

			&.expanded {
				position: relative;
				overflow: hidden;

				.line {
					position: absolute;

					&:first-child {
						transform: translateY(250%) rotate(405deg);
						right: 0;
						width: 80%;
					}

					&:nth-child(2) {
						top: 50%;
						transform: translate(110%);
						visibility: hidden;
					}

					&:last-child {
						transform: translateY(-240%) rotate(-765deg);
						right: 0;
						width: 80%;
					}
				}
			}
		}
	}
`;
