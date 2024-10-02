export const sliderStyles = {
	minWidth: "300px",
	color: "#0C2",
	"& .MuiSlider-thumb": {
		width: "18px",
		height: "18px",
		color: "#fff",
		border: "1px solid #01CB22",
	},
	"& .MuiSlider-thumb:: after": {
		content: "''",
		position: "absolute",
		top: "50%",
		left: "50%",
		width: "6px",
		height: "6px",
		borderRadius: "50%",
		transform: "translate(-50%, -50%)",
		background: "#01CB22",
	},
	"& .MuiSlider-rail": {
		color: "#8B8B8B", // цвет незаполненной части шкалы
	},
};
