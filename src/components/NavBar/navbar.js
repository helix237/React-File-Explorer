import React from 'react';
import NfcIcon from '@material-ui/icons/Nfc';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AppsIcon from '@material-ui/icons/Apps';
import ImageIcon from '@material-ui/icons/Image'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './navbar.css'
import listItems from '../../hoc/listItem';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuItems: [
                {
                    id: '1',
                    name: 'AirDrop',
                    icon: <NfcIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '2',
                    name: 'Recents',
                    icon: <RecentActorsIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '3',
                    name: 'Applications',
                    icon: <AppsIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '4',
                    name: 'Downloads',
                    icon: <CloudDownloadIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '5',
                    name: 'Pictures',
                    icon: <ImageIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '6',
                    name: 'Music',
                    icon: <MusicNoteIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '7',
                    name: 'Movies',
                    icon: <MovieCreationIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '8',
                    name: 'Creative Cloud Files',
                    icon: <CloudQueueIcon style={{ color: "deepskyblue" }} />
                },
            ],
            CloudMenuItems: [
                {
                    id: '1',
                    name: 'iCloud Drive',
                    icon: <CloudCircleIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '2',
                    name: 'Documents',
                    icon: <AssignmentIndIcon style={{ color: "deepskyblue" }} />
                },
                {
                    id: '3',
                    name: 'Desktop',
                    icon: <DesktopMacIcon style={{ color: "deepskyblue" }} />
                }
            ],
        }
    }

    render() {
        let Items = listItems(this.state.MenuItems, this.props.clickedItem);
        let IcloudItems = listItems(this.state.CloudMenuItems, this.props.clickedItem);
        return (
            <React.Fragment>
                <div>
                    <ul className="sideBarOptions">
                        <li><FiberManualRecordIcon fontSize="small" color="secondary" /></li>
                        <li><FiberManualRecordIcon fontSize="small" style={{ color: "yellow" }} /></li>
                        <li><FiberManualRecordIcon fontSize="small" style={{ color: "green" }} /></li>
                    </ul>
                </div>
                <h6>Favourites</h6>
                <ul className="NavbarItems">
                    {Items}
                </ul>
                <h6>iCloud</h6>
                <ul className="NavbarItems">
                    {IcloudItems}
                </ul>
            </React.Fragment>
        )
    }
}


export default Navbar
