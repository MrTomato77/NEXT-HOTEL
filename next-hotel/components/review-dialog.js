import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { toast, ToastContainer } from "react-toastify";

export default function ReviewDialog({ onClose, onSubmit }) {
  const [valueCleanliness, setValueCleanliness] = useState(null);
  const [valueService, setValueService] = useState(null);
  const [valueFacilities, setValueFacilities] = useState(null);
  const [valueValueForMoney, setValueValueForMoney] = useState(null);
  const [valueLocation, setValueLocation] = useState(null);
  const [comment, setComment] = useState("");

  const handleRatingCleanlinessChange = (event, newValue) => {
    setValueCleanliness(newValue);
  };

  const handleRatingServiceChange = (event, newValue) => {
    setValueService(newValue);
  };

  const handleRatingFacilitiesChange = (event, newValue) => {
    setValueFacilities(newValue);
  };

  const handleRatingValueForMoneyChange = (event, newValue) => {
    setValueValueForMoney(newValue);
  };

  const handleRatingLocationChange = (event, newValue) => {
    setValueLocation(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Validate if all ratings and comment are completed
    if (
      valueCleanliness === null ||
      valueService === null ||
      valueFacilities === null ||
      valueValueForMoney === null ||
      valueLocation === null ||
      comment === ""
    ) {
      toast.warning("Please complete all ratings and provide a comment.", {
        autoClose: 2500,
      });
    } else {
      // Call the onSubmit function with the review data
      const reviewData = {
        cleanliness: valueCleanliness,
        service: valueService,
        facilities: valueFacilities,
        valueForMoney: valueValueForMoney,
        location: valueLocation,
        comment: comment,
      };
      onClose(); // Close the dialog
      toast.success("Review submitted successfully", {
        autoClose: 2500,
      });
      onSubmit(reviewData);
    }
  };

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DialogContent>
        <TextField
          label="Comment"
          multiline
          rows={4}
          value={comment}
          onChange={handleCommentChange}
          sx={{ mt: 2, minWidth: "100%" }}
        />
        <Box
          sx={{
            minWidth: 250,
            display: "flex",
            alignItems: "center",
            mt: 2,
            justifyContent: "space-between",
          }}
        >
          <span>Cleanliness:</span>
          <Rating
            name="cleanliness-rating"
            value={valueCleanliness}
            precision={0.5}
            onChange={handleRatingCleanlinessChange}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
        <Box
          sx={{
            minWidth: 250,
            display: "flex",
            alignItems: "center",
            mt: 2,
            justifyContent: "space-between",
          }}
        >
          <span>Service:</span>
          <Rating
            name="service-rating"
            value={valueService}
            precision={0.5}
            onChange={handleRatingServiceChange}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
        <Box
          sx={{
            minWidth: 250,
            display: "flex",
            alignItems: "center",
            mt: 2,
            justifyContent: "space-between",
          }}
        >
          <span>Facilities:</span>
          <Rating
            name="facilities-rating"
            value={valueFacilities}
            precision={0.5}
            onChange={handleRatingFacilitiesChange}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
        <Box
          sx={{
            minWidth: 250,
            display: "flex",
            alignItems: "center",
            mt: 2,
            justifyContent: "space-between",
          }}
        >
          <span>Value for Money:</span>
          <Rating
            name="value-for-money-rating"
            value={valueValueForMoney}
            precision={0.5}
            onChange={handleRatingValueForMoneyChange}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
        <Box
          sx={{
            minWidth: 250,
            display: "flex",
            alignItems: "center",
            mt: 2,
            justifyContent: "space-between",
          }}
        >
          <span>Location:</span>
          <Rating
            name="location-rating"
            value={valueLocation}
            precision={0.5}
            onChange={handleRatingLocationChange}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Box sx={{ mr: 2, mb: 1 }}>
          <Button
            sx={{ mr: 2 }}
            onClick={onClose}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </DialogActions>
    </div>
  );
}
