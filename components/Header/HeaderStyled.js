import styled from 'styled-components';

const Navbar = styled.header`
	position: fixed;
	z-index: 100;
	width: 100vw;
	.barWrapper {
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		background: ${({ theme }) => theme.colors.darkBlue};
		text-transform: uppercase;
		font-family: 'Amatic SC', cursive;
		transition: all 0.5s ease;
		nav.desktopNav {
			ul {
				list-style: none;
				display: flex;
				justify-content: space-between;
				align-items: center;
				li {
					padding: 1rem;
					font-size: 1.5rem;
					font-weight: bold;
					color: white;
					letter-spacing: 2px;
					cursor: pointer;
					transition: all 0.5s ease;
					&:hover {
						color: ${({ theme }) => theme.colors.yellow};
					}
				}
			}
		}
		.logo {
			position: absolute;
			transform: translateX(-50%);
			left: 50%;
			top: 0.5rem;
			cursor: pointer;
			width: 100px;
			height: 82px;
			transition: all 0.5s ease;
		}
		.switcherWrapper {
			display: flex;
			align-items: center;

			.surveyLink {
				display: block;
				margin-right: 3rem;
				padding: 0.25rem 1rem;
				text-decoration: none;
				color: white;
				background-color: ${({ theme }) => theme.colors.blue};
				font-size: 1.25rem;
				transition: 0.3s;

				&:hover {
					background-color: rgba(255, 255, 255, 0.9);
					color: ${({ theme }) => theme.colors.darkBlue};
				}
			}
		}
		.burgerMenu {
			display: none;
		}
		@media (max-width: ${({ theme }) => theme.mobile}) {
			padding: 0 1rem;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			nav.desktopNav {
				display: none;
			}
			.switcherWrapper {
				visibility: hidden;
			}
		}
	}
	&.shrink {
		.barWrapper {
			background: rgba(255, 255, 255, 0.9);
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			nav {
				ul {
					li {
						padding: 0.25rem 1rem;
						color: ${({ theme }) => theme.colors.darkBlue};
						&:hover {
							color: ${({ theme }) => theme.colors.yellow};
						}
					}
				}
			}
			.logo {
				width: 60px;
				height: 49px;
				top: 0.25rem;
			}
			div[class*='Switcher'] {
				padding: 0.25rem 0.5rem;
			}
		}
	}
`;

export default Navbar;
