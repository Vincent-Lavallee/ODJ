import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import HamburgerIcon from "./HamburgerIcon";
import MobileNavDrawer from "./MobileNavDrawer";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import useNavbarLinks from "./useNavbarLinks";

interface NavbarProps {}
const Navbar = ({}: NavbarProps) => {
  const switchToHamburgerMenu = useMediaQuery("(max-width:920px)");

  const mobileDrawerState = useState(false);

  const links = useNavbarLinks();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          backgroundColor: (theme) => theme.palette.background.default,
          alignItems: "center",
          display: "flex",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "fixed",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(./logo.png)",
            backgroundSize: "cover",
            position: "absolute",
            left: "30px",
            top: "30px",
            height: "130px",
            width: "145px",
          }}
        />
        <Box>
          {switchToHamburgerMenu ? (
            <HamburgerIcon mobileDrawerState={mobileDrawerState} />
          ) : (
            <Box sx={{ display: "flex" }}>
              <Box>
                <LanguageSelector />
              </Box>
              {links.map((link) => (
                <Button
                  key={link.label}
                  sx={{
                    color: "white",
                    m: "10px",
                    fontSize: "20px",
                    fontWeight: "400",
                    // color: router.pathname === link.link ? "?" : "white",
                    textTransform: "none",
                  }}
                  // onClick={() => router.push(link.link)}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Box>
      <MobileNavDrawer mobileDrawerState={mobileDrawerState} />
    </>
  );
};

export default Navbar;
