import { Box, Progress } from "@chakra-ui/react";
import React from "react";

const ProgressBar = React.forwardRef(({ children, ...rest }, ref) => (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  ));

export default ProgressBar;