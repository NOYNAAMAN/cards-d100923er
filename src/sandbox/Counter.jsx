import { Box, Button, Typography } from "@mui/material";

import useCounter from "./hooks/useCounter";

export default function Counter() {
  const { counter, increment, decrement } = useCounter(100);
  return (
    <Box>
      <Typography variant="h3"> {counter}</Typography>
      <Button variant="contained" onClick={increment}>
        {" "}
        +
      </Button>
      <Button variant="contained" onClick={decrement}>
        {" "}
        -
      </Button>
    </Box>
  );
}
