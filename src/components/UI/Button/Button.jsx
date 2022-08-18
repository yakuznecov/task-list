import styled from 'styled-components';

const Button = styled.button`
	font: inherit;
	padding: 0.5rem 1.5rem;
	color: white;
	border: none;
	background: yellowgreen;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
	cursor: pointer;

	&:focus {
		outline: none;
	}

	&:hover,
	&:active {
		background: rgb(114, 153, 37);
		border-color: rgb(114, 153, 37);
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
	}
`;

// const Button = (props) => {
// 	return (
// 		<button type={props.type} className='button' onClick={props.onClick}>
// 			{props.children}
// 		</button>
// 	);
// };

export default Button;
