import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



export default function MenuPopupState({handleChange}) {
  const handleFunction = (e , option ,popupState) => {
    e.preventDefault();
    popupState.close();
    handleChange(option);
    
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            Algorithms
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={(e) => handleFunction(e , 0, popupState )}>A* Algo</MenuItem>
            <MenuItem onClick={(e) => handleFunction(e , 1, popupState )}>DFS</MenuItem>
            <MenuItem onClick={(e) => handleFunction(e , 2, popupState )}>Dijkstra's Algo</MenuItem>
            <MenuItem onClick={(e) => handleFunction(e , 3, popupState )}>BFS</MenuItem>
            <MenuItem onClick={(e) => handleFunction(e , 4, popupState )}>Random DFS</MenuItem>
            <MenuItem onClick={(e) => handleFunction(e , 5, popupState )}>Swarm</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}