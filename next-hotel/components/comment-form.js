import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import StarRate from "@/components/star-rate";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextareaValidator({ handleSendClick }) {
  const [dialogOpen, setDialogOpen] = useState(true);
  const categories = [
    { name: "Cleanliness", id: 1 },
    { name: "Service", id: 2 },
    { name: "Facilities", id: 3 },
    { name: "Value for Money", id: 4 },
    { name: "Location", id: 5 },
  ];
  const [ratings, setRatings] = useState([]);

  const handleSubmitClick = () => {
    toast.success('Rating sent!', { autoClose: 2500 });
    setDialogOpen(false);
    handleSendClick();
  };

  const handleRatingChange = (categoryId, rating) => {
    const updatedRatings = ratings.map((item) => {
      if (item.id === categoryId) {
        return { ...item, rating };
      }
      return item;
    });
    setRatings(updatedRatings);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      {dialogOpen && (
        <Dialog
          open={dialogOpen}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Your comment
          </DialogTitle>
          <DialogContent dividers>
            <Textarea
              placeholder="Type something here…"
              minRows={6}
              sx={{
                marginBottom: 'var(--Textarea-paddingBlock)',
              }}
            />
            {categories.map((category) => (
              <Box key={category.id}>
                <span>{category.name}</span>
                <StarRate
                  key={category.id}
                  value={ratings.find((item) => item.id === category.id)?.rating || 0}
                  onChange={(rating) => handleRatingChange(category.id, rating)}
                />
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmitClick}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}