import styled from 'styled-components';

export default styled.section`
	padding: 2rem 3rem;
	color: white;
	background: ${({ theme }) => theme.colors.darkBlue};
	.card {
		font-family: ${({ theme }) => theme.fonts.secondary};
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.4rem;
		display: flex;
		justify-content: space-between;
		padding-bottom: 1.5rem;
		.desc {
			width: 50%;
			flex: 3;
			padding-right: 1rem;
		}
		.address {
			max-width: 50%;
			flex: 3;
			padding-left: 1rem;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-between;
			max-height: 100%;
			ul {
				list-style: none;
				text-align: right;
				margin-bottom: 1rem;
			}
			.map {
				width: 100%;
				height: 75%;
				iframe {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	@media (max-width: ${({ theme }) => theme.mobile}) {
		padding: 2rem;

		.card {
			font-size: 0.85rem;
			line-height: 1rem;
			letter-spacing: 1px;
			flex-direction: column;
			.desc {
				width: 100%;
				padding-right: 0;
				margin-bottom: 1rem;
			}
			.address {
				max-width: 100%;
				padding: 0;
				flex-direction: row-reverse;
				align-items: flex-start;
				ul {
					padding-left: 1rem;
					flex: 5;
				}
				.map {
					flex: 7;
					height: 100%;
				}
				@media (max-width: 480px) {
					flex-direction: column-reverse;
					align-items: center;
					ul {
						padding-left: 0;
						text-align: center;
						margin-top: 1rem;
					}
				}
			}
		}
	}
`;
