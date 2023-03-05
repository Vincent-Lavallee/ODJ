import Drawer from "@mui/material/Drawer";
import { SetStateAction, Dispatch } from "react";
import useNavbarLinks from "./useNavbarLinks";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import LanguageSelector from "./LanguageSelector";
interface MobileNavDrawerProps {
  mobileDrawerState: [boolean, Dispatch<SetStateAction<boolean>>];
}
const MobileNavDrawer = ({
  mobileDrawerState: [isMobileDrawerOpen, setIsMobileDrawerOpen],
}: MobileNavDrawerProps) => {
  const router = useRouter();

  const links = useNavbarLinks();

  return (
    <Drawer
      variant="temporary"
      sx={{
        width: "265px",
      }}
      PaperProps={{
        sx: {
          pt: "100px",
          width: "265px",
          position: "relative",
          backgroundColor: (theme) => theme.palette.background.paper,
        },
      }}
      anchor="left"
      open={isMobileDrawerOpen}
      hideBackdrop
    >
      {links.map((link) => (
        <Button
          key={link.label}
          sx={{
            m: "10px",
            fontSize: "20px",
            textTransform: "none",
          }}
        >
          {link.label}
        </Button>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "125px",
          left: "0px",
          pl: "5%",
          width: "90%",
          position: "absolute",
        }}
      >
        <LanguageSelector />
      </Box>
    </Drawer>
  );
};

export default MobileNavDrawer;
