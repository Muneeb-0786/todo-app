import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import todoContext from "../../Context/todoContext";
import { Box } from "@mui/material";

// Component to display a single todo item
const Todolistitems = ({ todo }) => {
  // Accessing the deleteTodo function from the context
  const { deleteTodo } = useContext(todoContext);

  return (
    <Stack
      key={todo?.id}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      margin="0 30px"
    >
      {/* Checkbox to mark the completion status of the todo */}
      <Box sx={{ flex: 1 }}>
        <input
          className="custom-checkbox"
          type="checkbox"
          style={inputStyle}
          checked={todo.completed}
        />
      </Box>

      {/* Display the title of the todo */}
      <Typography variant="subtitle1" component="div" sx={{ width: "70%" }}>
        {todo?.title}
      </Typography>

      {/* Delete icon to remove the todo */}
      <DeleteOutlineOutlinedIcon
        style={{ flex: 1, cursor: "pointer" }}
        onClick={() => deleteTodo(todo?.id)}
      />
    </Stack>
  );
};

const inputStyle = {
  width: "18px",
  height: "18px",
  border: "3px solid ",
  background: "aqua",
  color: "yellow",
  boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
};
// Export the Todolistitems component
export default Todolistitems;
