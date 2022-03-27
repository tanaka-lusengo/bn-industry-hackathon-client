import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// Notification function for UploadPage
const handleUploadComplete = () => {
	Swal.fire({
		title: "Success!",
		text: "New Material has been added to Sell list!",
		icon: "success",
	});
};

export { handleUploadComplete };
