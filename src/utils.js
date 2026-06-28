import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};


// import { toast } from "react-toastify";

// export const handleSuccess = (msg) => {
//   toast.success(msg, {
//     position: "top-right",
//     style: {
//       background: "#28a745", // green for success
//       color: "white",
//       fontWeight: "bold",
//       fontSize: "16px",
//       borderRadius: "8px",
//     },
//   });
// };

// export const handleError = (msg) => {
//   toast.error(msg, {
//     position: "top-right",
//     style: {
//       background: "#ff8c00", // MaltaMart orange for error
//       color: "white",
//       fontWeight: "bold",
//       fontSize: "16px",
//       borderRadius: "8px",
//     },
//   });
// };
