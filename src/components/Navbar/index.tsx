import { useState, MouseEvent } from "react";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import { Button } from "@mui/material";
import { BellIcon, SearchIcon } from "@icons";
import userIcon from "@assets/images/Avatar.jpg";
import useAuth from "@hooks/useAuth";
import "@styles/navbar.css";

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const [searchText, setSearchText] = useState('');
  const { signOut } = useAuth();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const handleClick =
  (newPlacement: PopperPlacementType) =>
  (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const id = open ? 'simple-popper' : undefined;

  return (
    <header className="navbar">
      <div className="search-container">
        <div className="search-wrapper">
          <SearchIcon className={ 'search-icon'} />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar (Ctrl+F)"
            className="search-input"
          />
          <div className="icons">
            {/* <img className="icon" src={bellIcon} alt="Sininho" /> */}
            <BellIcon />
            <img className="icon" src={userIcon} alt="Usuário" onClick={handleClick('bottom-start')} />
          </div>

          <Popper id={id} open={open} anchorEl={anchorEl} placement={placement}>
            <div style={{ border: 1, backgroundColor: 'lightgray',alignItems:'center', justifyContent: 'center', display:'flex',
            height: "8vh",width:'100%', padding: "5px",
             marginTop:8 }}>
              <Button onClick={() => signOut()} variant='contained' color='error'>Sair</Button>
            </div>
          </Popper>

        </div>
      </div>
    </header>
  );
}

export default Navbar;