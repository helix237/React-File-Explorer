import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import FolderIcon from '@material-ui/icons/Folder';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import folderData from '../../folderData/folderData.json';
import './react-contextmenu.css';
import './fileExplorer.css';
import Draggable from 'react-draggable';

const FileExplorer = (props) => {
  let [folders, setFolders] = useState(folderData.Music);
  let [createFolder, setCreateFolder] = useState(false);
  let [folderName, setFolderName] = useState("");

  useEffect(() => {
    if (props.clickedItem) setFolders(folderData[props.clickedItem]);
  }, [props])

  const createClick = (e, data) => {
    setCreateFolder(true)
  }

  function deleteClick(e, data) {
    const remainingFolders = folders.filter(folder => folder.name !== data.item.name);
    setFolders(remainingFolders)
  }

  function handleInputChange(e) {
    setFolderName(e.target.value)
  }

  function handleKeyDown(e) {
    debugger
    if (e.key === "Enter") {
      let newFolder = {
        id: folders.length + 1,
        name: folderName,
        children: []
      }
      setFolders([...folders, newFolder]);
      setCreateFolder(false)
    }
  }


  let folderItems = folders.map((folder) => {
    return (
      <div>
        <ContextMenu id={folder.name}>
          <MenuItem onClick={createClick} data={{ item: folder }}>Create</MenuItem>
          <MenuItem onClick={deleteClick} data={{ item: folder }}>Delete</MenuItem>
        </ContextMenu>
        <Draggable>
          <Col key={folder.id} md={3}>
            <div className="folderItem">
              <ContextMenuTrigger id={folder.name} holdToDisplay={1000}>
                <FolderIcon style={{ fontSize: 150, color: "deepskyblue" }} />
                <p className="folderLabel">{folder.name}</p>
              </ContextMenuTrigger>
            </div>
          </Col>
        </Draggable>
      </div>
    )
  })

  return (
    <Row>
      <Col md={12}><h5 className="presentFolder">{props.clickedItem}</h5></Col>
      {folderItems}
      {createFolder ? <Col md={3}>
        <div className="folderItem">
          <ContextMenuTrigger id='Dummy' holdToDisplay={1000}>
            <FolderIcon style={{ fontSize: 150, color: "deepskyblue" }} />
            <input
              type="text"
              autoFocus
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
            />
          </ContextMenuTrigger>
        </div>
      </Col> : null
      }
    </Row>
  )
}

export default FileExplorer;
