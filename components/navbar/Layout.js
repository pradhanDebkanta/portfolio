import { Box } from "./Box.js";
// import { Content } from "./Content.js"

export const Layout = ({ children }) => (
    <Box
        css={{
            maxW: "100%"
        }}
    >
        {children}
        {/* <Content /> */}
    </Box>
);