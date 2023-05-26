import React, { useState } from "react";
import { useRoomData } from "./api/room";
import { usePaymentData } from "./api/payment";
import Dialog from "@mui/material/Dialog";
import styles from "@/styles/Property.module.css";
import LoadingSpinner from "@/components/LoadingSpinner";
import NoReservedRoom from "@/components/Property/NoReservedRoom";
import NoPaymentInfo from "@/components/Property/NoPaymentInfo";
import PropertyContent from "@/components/Property/PropertyContent";
import ReviewDialog from "@/components/review-dialog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Property() {
  const { roomData, roomLoading } = useRoomData();
  const { paymentData, paymentLoading } = usePaymentData();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);
  
  const handleSubmitReview = (reviewData) => {
    console.log(reviewData);
  };

  return (
    <div className={styles.topGap}>
      {roomLoading && paymentLoading ? (
        <LoadingSpinner />
      ) : !roomData ? (
        <NoReservedRoom />
      ) : !paymentData ? (
        <NoPaymentInfo />
      ) : (
        <>
          <PropertyContent
            roomData={roomData}
            paymentData={paymentData}
            handleOpen={handleOpen}
          />
          <Dialog
            open={dialogOpen}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            sx={{
              "& .MuiDialog-paper": {
                width: "20rem",
                maxWidth: "100%",
                margin: "0 auto",
              },
            }}
          >
            <ReviewDialog onClose={handleClose} onSubmit={handleSubmitReview} />
          </Dialog>
          <ToastContainer />
        </>
      )}
    </div>
  );
}
